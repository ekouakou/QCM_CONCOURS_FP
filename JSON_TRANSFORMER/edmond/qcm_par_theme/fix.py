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

# add the overlay
if "id=\"folderSelectionOverlay\"" not in content:
    content = content.replace('<div class="app" id="app">', overlay_html + '\n  <div class="app" id="app">')

# update badge
import re
content = re.sub(r'<span class="badge">[^<]+</span>', '<span class="badge" id="topBadge">Sélectionnez un dossier...</span>', content)

with open("qcm_Global.html", "w", encoding="utf-8") as f:
    f.write(content)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed!")
