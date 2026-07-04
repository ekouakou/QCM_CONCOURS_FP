import re

with open("qcm_Global.html", "r", encoding="utf-8") as f:
    content = f.read()

overlay_html = """
  <div id="folderSelectionOverlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:var(--bg);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--text);">
    <div style="background:var(--surface);padding:40px;border-radius:var(--r);border:1px solid var(--border);text-align:center;max-width:500px;box-shadow:0 10px 30px rgba(0,0,0,0.5);">
      <h1 style="margin-bottom:15px;font-size:24px;">Bienvenue sur vos QCM !</h1>
      <p style="color:var(--muted);margin-bottom:30px;line-height:1.6;">Pour commencer, veuillez sélectionner le dossier contenant vos fichiers QCM (.js).</p>
      <label class="nb primary" style="display:inline-flex;padding:12px 24px;cursor:pointer;font-size:16px;">
        📂 Choisir le dossier
        <input type="file" id="folderInput" webkitdirectory directory multiple style="display:none;" onchange="handleFolderSelect(event)">
      </label>
    </div>
  </div>
"""
content = content.replace('<div class="app">', overlay_html + '\n  <div class="app">')

start_script = content.find("<script>")
render_sidebar_idx = content.find("function renderSidebar()")

if start_script != -1 and render_sidebar_idx != -1:
    script_body_start = start_script + len("<script>")
    
    dynamic_script = """
    let QCM = [];
    let state = {
      current: 0,
      answers: [],
      revealed: []
    };

    async function handleFolderSelect(event) {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      let allQuestions = [];
      const btn = event.target.parentElement;
      btn.innerHTML = '⏳ Chargement en cours...';
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.name.endsWith('.js') || file.name.endsWith('.json')) {
          const text = await file.text();
          try {
            const startIndex = text.indexOf('[');
            const endIndex = text.lastIndexOf(']');
            if (startIndex !== -1 && endIndex !== -1) {
               const jsonString = text.substring(startIndex, endIndex + 1);
               const parsed = JSON.parse(jsonString);
               if (Array.isArray(parsed)) {
                  allQuestions = allQuestions.concat(parsed);
               }
            }
          } catch(e) {
            console.error("Erreur de parsing sur " + file.name, e);
          }
        }
      }

      if (allQuestions.length > 0) {
         QCM = allQuestions;
         state = {
           current: 0,
           answers: new Array(QCM.length).fill(null),
           revealed: new Array(QCM.length).fill(false)
         };
         document.getElementById('folderSelectionOverlay').style.display = 'none';
         renderAll();
      } else {
         btn.innerHTML = '📂 Choisir le dossier';
         alert("Aucun QCM valide n'a été trouvé dans ce dossier !");
      }
    }

    """
    
    new_content = content[:script_body_start] + dynamic_script + content[render_sidebar_idx:]
    
    with open("qcm_Global.html", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("qcm_Global.html updated successfully.")
else:
    print("Could not find script tags or renderSidebar.")
