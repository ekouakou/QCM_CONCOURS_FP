    // ═══ STATE ═══
    let currentQCM = [];
    let currentThemeName = '';
    let state = { current: 0, answers: [], revealed: [] };
    let activeCategory = 'Tous';

    let scores = {};
    let settings = { timerEnabled: false, timerType: 'quiz', duration: 600 };
    
    let timerInterval = null;
    let timeRemaining = 0;
    let isPaused = false;

    // ═══ INIT ═══
    document.addEventListener('DOMContentLoaded', () => { 
      loadStoredData();
      renderHomePage();

      // Support direct link
      const hash = window.location.hash;
      if (hash && hash.startsWith('#quiz/')) {
        const filename = decodeURIComponent(hash.substring(6));
        const item = QCM_MANIFEST.find(m => m.file === filename);
        if (item) loadQuiz(item);
      }
    });

    function loadStoredData() {
      try {
        const sc = localStorage.getItem('qcm_scores');
        if (sc) scores = JSON.parse(sc);
        const st = localStorage.getItem('qcm_settings');
        if (st) settings = JSON.parse(st);
      } catch(e) {}
    }

    // ═══ HOME PAGE ═══
    function renderHomePage() {
      const totalQ = QCM_MANIFEST.reduce((s, m) => s + m.count, 0);
      const categories = [...new Set(QCM_MANIFEST.map(m => m.category))];
      document.getElementById('totalQuestions').textContent = totalQ;
      document.getElementById('totalThemes').textContent = QCM_MANIFEST.length;
      document.getElementById('statThemes').textContent = QCM_MANIFEST.length;
      document.getElementById('statQuestions').textContent = totalQ;
      document.getElementById('statCategories').textContent = categories.length;

      let filtersHtml = '<button class="cat-filter active" onclick="filterByCategory(\'Tous\', this)">Tous</button>';
      categories.sort().forEach(cat => {
        const count = QCM_MANIFEST.filter(m => m.category === cat).length;
        filtersHtml += `<button class="cat-filter" onclick="filterByCategory('${cat}', this)">${cat} (${count})</button>`;
      });
      document.getElementById('categoryFilters').innerHTML = filtersHtml;
      
      updateGlobalScoreStats();
      renderThemes(QCM_MANIFEST);
    }

    function updateGlobalScoreStats() {
      let totC = 0, totT = 0;
      Object.values(scores).forEach(s => { totC += s.correct; totT += s.total; });
      if (totT > 0) {
        document.getElementById('scoreStatBox').style.display = 'block';
        document.getElementById('resetBtn').style.display = 'flex';
        let globalPct = Math.round((totC / totT) * 100);
        document.getElementById('statGlobalScore').textContent = globalPct + '%';
      } else {
        document.getElementById('scoreStatBox').style.display = 'none';
        document.getElementById('resetBtn').style.display = 'none';
      }
    }

    function renderThemes(items) {
      if (items.length === 0) {
        document.getElementById('themesContainer').innerHTML = '<div class="no-results"><div class="emoji">🔍</div><h3>Aucun résultat</h3><p>Essayez un autre terme de recherche.</p></div>';
        return;
      }
      const groups = {};
      items.forEach(m => { if (!groups[m.category]) groups[m.category] = []; groups[m.category].push(m); });
      let html = '';
      Object.keys(groups).sort().forEach(cat => {
        const catItems = groups[cat];
        const totalQ = catItems.reduce((s, m) => s + m.count, 0);
        html += `<div class="category-group"><div class="category-title">${cat}<span class="category-count">${catItems.length} thèmes · ${totalQ} questions</span></div><div class="qcm-grid">`;
        
        catItems.sort((a, b) => a.name.localeCompare(b.name)).forEach(m => {
          const qCount = m.count;
          let scoreTag = '';
          if (scores[m.name]) {
            scoreTag = `<span class="card-score">${scores[m.name].correct}/${scores[m.name].total} (${scores[m.name].pct}%)</span>`;
          }
          html += `<div class="qcm-card" onclick="loadQuiz(QCM_MANIFEST.find(x=>x.file==='${m.file}'))"><div class="card-head"><div class="card-icon">${m.icon}</div><div class="card-title">${m.name}</div></div><div class="card-meta"><span class="card-count">${qCount} question${qCount > 1 ? 's' : ''}</span><span class="card-cat">${m.category}</span>${scoreTag}<div class="card-play"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div></div>`;
        });
        html += '</div></div>';
      });
      document.getElementById('themesContainer').innerHTML = html;
    }

    function filterThemes() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      let filtered = QCM_MANIFEST;
      if (activeCategory !== 'Tous') filtered = filtered.filter(m => m.category === activeCategory);
      if (query) filtered = filtered.filter(m =>
        m.name.toLowerCase().includes(query) || m.category.toLowerCase().includes(query) ||
        (m.parties && m.parties.some(p => p.toLowerCase().includes(query)))
      );
      renderThemes(filtered);
    }

    function filterByCategory(cat, btn) {
      activeCategory = cat;
      document.querySelectorAll('.cat-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterThemes();
    }

    // ═══ SETTINGS & PERSISTENCE ═══
    function openSettings() {
      document.getElementById('setTimerEnable').value = settings.timerEnabled ? "1" : "0";
      document.getElementById('setTimerType').value = settings.timerType;
      document.getElementById('setTimerDuration').value = settings.duration;
      document.getElementById('settingsModal').style.display = 'flex';
    }
    function closeSettings() { document.getElementById('settingsModal').style.display = 'none'; }
    function saveSettings() {
      settings.timerEnabled = document.getElementById('setTimerEnable').value === "1";
      settings.timerType = document.getElementById('setTimerType').value;
      settings.duration = parseInt(document.getElementById('setTimerDuration').value, 10);
      localStorage.setItem('qcm_settings', JSON.stringify(settings));
      closeSettings();
    }
    function resetAllScores() {
      if (confirm("Voulez-vous vraiment effacer tous les scores enregistrés ?")) {
        scores = {};
        localStorage.removeItem('qcm_scores');
        renderHomePage();
      }
    }
    function saveCurrentScore() {
      const correct = state.answers.filter((a, i) => a === currentQCM[i].correct).length;
      const pct = currentQCM.length > 0 ? Math.round((correct / currentQCM.length) * 100) : 0;
      scores[currentThemeName] = { correct, total: currentQCM.length, pct };
      localStorage.setItem('qcm_scores', JSON.stringify(scores));
    }

    // ═══ TIMER LOGIC ═══
    function startTimer() {
      clearInterval(timerInterval);
      isPaused = false;
      document.getElementById('timerWrap').style.display = 'flex';
      document.getElementById('pauseBtn').style.display = 'flex';
      document.getElementById('pauseBtn').innerHTML = '⏸️ Pause';
      updateTimerDisplay();
      
      timerInterval = setInterval(() => {
        if (isPaused) return;
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) handleTimeUp();
      }, 1000);
    }

    function updateTimerDisplay() {
      const m = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
      const s = (timeRemaining % 60).toString().padStart(2, '0');
      document.getElementById('timerText').textContent = `${m}:${s}`;
      if (timeRemaining <= 10 && timeRemaining > 0) {
        document.getElementById('timerWrap').classList.add('danger');
      } else {
        document.getElementById('timerWrap').classList.remove('danger');
      }
    }

    function handleTimeUp() {
      clearInterval(timerInterval);
      if (settings.timerType === 'quiz') {
        alert("⏳ Temps écoulé pour ce QCM !");
        showResults();
      } else {
        alert("⏳ Temps écoulé pour cette question !");
        revealAnswer();
      }
    }

    function togglePause() {
      isPaused = !isPaused;
      const overlay = document.getElementById('pauseOverlay');
      const btn = document.getElementById('pauseBtn');
      if (isPaused) {
        if(overlay) overlay.style.display = 'flex';
        btn.innerHTML = '▶️ Reprendre';
      } else {
        if(overlay) overlay.style.display = 'none';
        btn.innerHTML = '⏸️ Pause';
      }
    }

    // ═══ LOAD QUIZ ═══
    async function loadQuiz(item) {
      document.getElementById('loadingOverlay').style.display = 'flex';
      try {
        const response = await fetch(item.file);
        const text = await response.text();
        const startIndex = text.indexOf('[');
        const endIndex = text.lastIndexOf(']');
        if (startIndex === -1 || endIndex === -1) throw new Error('Format invalide');
        const jsonString = text.substring(startIndex, endIndex + 1);
        const parsed = JSON.parse(jsonString);
        if (!Array.isArray(parsed) || parsed.length === 0) throw new Error('Aucune question');
        
        currentQCM = parsed;
        currentThemeName = item.name;
        state = { current: 0, answers: new Array(currentQCM.length).fill(null), revealed: new Array(currentQCM.length).fill(false) };
        window.location.hash = `quiz/${encodeURIComponent(item.file)}`;
        isPaused = false;
        
        showQuizPage();
        if (settings.timerEnabled && settings.timerType === 'quiz') {
          timeRemaining = settings.duration;
          startTimer();
        }
        renderAll();
      } catch (e) {
        alert(`Erreur lors du chargement de "${item.name}": ${e.message}`);
      }
      document.getElementById('loadingOverlay').style.display = 'none';
    }

    function showQuizPage() {
      document.getElementById('homePage').style.display = 'none';
      document.getElementById('quizPage').style.display = 'block';
      document.getElementById('backBtn').style.display = 'flex';
      document.getElementById('topBadge').textContent = currentThemeName;
      document.getElementById('pwWrap').style.display = 'flex';
      document.getElementById('scoreWrap').style.display = 'block';
      document.getElementById('exportBtn').style.display = 'flex';
      window.scrollTo(0, 0);
    }

    function goHome() {
      clearInterval(timerInterval);
      document.getElementById('homePage').style.display = 'block';
      document.getElementById('quizPage').style.display = 'none';
      document.getElementById('backBtn').style.display = 'none';
      document.getElementById('topBadge').textContent = 'Révision Interactive';
      document.getElementById('pwWrap').style.display = 'none';
      document.getElementById('scoreWrap').style.display = 'none';
      document.getElementById('exportBtn').style.display = 'none';
      document.getElementById('timerWrap').style.display = 'none';
      document.getElementById('pauseBtn').style.display = 'none';
      window.location.hash = '';
      renderHomePage();
      window.scrollTo(0, 0);
    }

    // ═══ SIDEBAR ═══
    function renderSidebar() {
      const parties = {};
      currentQCM.forEach((q, i) => { const p = q.partie || 'Sans catégorie'; if (!parties[p]) parties[p] = []; parties[p].push({ q, i }); });
      let html = `<div class="sb-title">${currentThemeName} (${currentQCM.length})</div>`;
      for (const [p, items] of Object.entries(parties)) {
        html += `<div class="pg"><div class="pl">${p}</div>`;
        items.forEach(({ q, i }) => {
          let cls = '';
          if (i === state.current) cls = ' active';
          else if (state.answers[i]) cls = state.answers[i] === q.correct ? ' correct' : ' wrong';
          const dot = state.answers[i] ? '<div class="qs"></div>' : '';
          html += `<div class="qi${cls}" onclick="goTo(${i})"><div class="qn">${i+1}</div><span>${q.num}</span>${dot}</div>`;
        });
        html += '</div>';
      }
      document.getElementById('sidebar').innerHTML = html;
    }

    // ═══ PROGRESS ═══
    function renderProgress() {
      const answered = state.answers.filter(Boolean).length;
      const correct = state.answers.filter((a, i) => a === currentQCM[i].correct).length;
      const pct = Math.round((answered / currentQCM.length) * 100);
      document.getElementById('progressFill').style.width = pct + '%';
      document.getElementById('progressText').textContent = answered + ' / ' + currentQCM.length;
      document.getElementById('scoreDisplay').textContent = correct + ' / ' + answered;
    }

    // ═══ MAIN RENDER ═══
    function renderMain() {
      const q = currentQCM[state.current];
      const answered = state.answers[state.current];
      const revealed = state.revealed[state.current];

      if (settings.timerEnabled && settings.timerType === 'question' && !answered && !revealed) {
        if (timeRemaining <= 0 || !timerInterval) {
          timeRemaining = settings.duration;
          startTimer();
        }
      }

      let choicesHtml = '';
      Object.entries(q.choices).forEach(([k, v]) => {
        let cls = '', icon = '';
        if (answered) {
          if (k === q.correct) { cls = ' correct disabled'; icon = '<span class="ci">✓</span>'; }
          else if (k === answered) { cls = ' wrong disabled'; icon = '<span class="ci">✗</span>'; }
          else cls = ' ndis disabled';
        }
        choicesHtml += `<div class="choice${cls}" onclick="selectChoice('${k}')"><div class="cl">${k}</div><div class="ct">${v}</div>${icon}</div>`;
      });

      let expHtml = '';
      if (revealed) {
        const isCorrect = answered === q.correct;
        const wrongItemsHtml = (q.wrongAnalysis || []).map(w => `<div class="witem"><div class="wh"><div class="wl">${w.l}</div><div class="wlbl">Proposition ${w.l} — Pourquoi incorrecte</div></div><div class="et">${w.t}</div></div>`).join('');
        const summaryHtml = (q.summary || []).map(s => `<div class="si-row"><div class="sa">→</div><div class="st">${s}</div></div>`).join('');

        expHtml = '<div class="explanation">';
        expHtml += `<div class="ab${isCorrect ? '' : ' wa'}"><div class="ai">${isCorrect ? '✅' : '❌'}</div><div><div class="albl">${isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse'}</div><div class="ac">La bonne réponse est la <strong>Proposition ${q.correct}</strong> : ${q.choices[q.correct]}</div></div></div>`;
        expHtml += `<div class="eb"><div class="ebt blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>Explication détaillée</div><div class="et">${q.explanation || '<p>Pas d\'explication disponible.</p>'}</div></div>`;
        if (wrongItemsHtml) expHtml += `<div class="eb"><div class="ebt red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>Analyse des propositions incorrectes</div><div class="wi">${wrongItemsHtml}</div></div>`;
        if (q.examiner) expHtml += `<div class="eb"><div class="ebt purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>Ce que l'examinateur cherche à vérifier</div><div class="et"><p>${q.examiner}</p></div></div>`;
        if (summaryHtml) expHtml += `<div class="eb"><div class="ebt yellow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>Ce qu'il faut retenir</div><div class="sl">${summaryHtml}</div></div>`;
        expHtml += '</div>';
      }

      const revealDisplay = answered && !revealed ? 'block' : 'none';
      let mainHtml = `<div class="q-header"><span class="pt-tag">${q.partie || currentThemeName}</span><span class="qn-tag">${q.num} · ${state.current+1} / ${currentQCM.length}</span></div>`;
      
      // The pause overlay needs to be absolutely positioned within the qcard if we want to hide questions
      let pauseOverlayHtml = isPaused ? `<div class="pause-overlay" id="pauseOverlay"><h2>⏸️ En pause</h2><p>Le temps est arrêté. Reprenez quand vous êtes prêt.</p><button class="nb primary" style="margin-top:20px; width:auto;" onclick="togglePause()">▶️ Reprendre</button></div>` : '';
      
      mainHtml += `<div class="qcard" style="position:relative;">${pauseOverlayHtml}<div class="qtext">${q.q}</div><div class="choices">${choicesHtml}</div></div>`;
      mainHtml += `<div class="reveal-s" id="revealS" style="display:${revealDisplay}"><button class="reveal-btn" onclick="revealAnswer()"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>Voir l'explication complète du cours</button></div>`;
      mainHtml += expHtml;
      mainHtml += `<div class="nav"><button class="nb" onclick="goTo(${state.current-1})" ${state.current === 0 ? ' disabled' : ''}>← Précédent</button>`;
      if (state.current < currentQCM.length - 1) mainHtml += `<button class="nb primary" onclick="goTo(${state.current+1})">Suivant →</button>`;
      else mainHtml += `<button class="nb primary" onclick="showResults()">Voir les résultats 🎉</button>`;
      mainHtml += '</div>';
      document.getElementById('main').innerHTML = mainHtml;
      document.getElementById('main').scrollTop = 0;
    }

    // ═══ INTERACTIONS ═══
    function selectChoice(k) { 
      if (state.answers[state.current]) return; 
      state.answers[state.current] = k; 
      if (settings.timerEnabled && settings.timerType === 'question') clearInterval(timerInterval);
      renderAll(); 
    }
    function revealAnswer() { 
      state.revealed[state.current] = true; 
      if (!state.answers[state.current]) state.answers[state.current] = 'SKIPPED'; // mark as skipped if time ran out
      if (settings.timerEnabled && settings.timerType === 'question') clearInterval(timerInterval);
      renderAll(); 
    }
    function goTo(i) { 
      if (i < 0 || i >= currentQCM.length) return; 
      if (settings.timerEnabled && settings.timerType === 'question' && state.current !== i) {
        clearInterval(timerInterval);
        timeRemaining = 0; // force restart timer for next question
      }
      state.current = i; 
      renderAll(); 
    }
    function renderAll() { renderSidebar(); renderMain(); renderProgress(); }

    // ═══ RÉSULTATS ═══
    function showResults() {
      clearInterval(timerInterval);
      saveCurrentScore();
      document.getElementById('timerWrap').style.display = 'none';
      document.getElementById('pauseBtn').style.display = 'none';

      const correct = state.answers.filter((a, i) => a === currentQCM[i].correct).length;
      const answered = state.answers.filter(a => a && a !== 'SKIPPED').length;
      const pct = answered > 0 ? Math.round((correct / currentQCM.length) * 100) : 0;
      const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
      const msg = pct >= 80 ? 'Excellent ! Vous maîtrisez ce thème.' : pct >= 60 ? 'Bon résultat ! Quelques révisions suffiront.' : 'Continuez à réviser — vous progressez !';
      document.getElementById('main').innerHTML = `<div class="splash"><div class="splash-icon">${emoji}</div><h1>Quiz terminé !</h1><p>${msg}</p><div class="splash-stats"><div class="sc"><div class="sn g">${correct}</div><div class="sl2">Bonnes réponses</div></div><div class="sc"><div class="sn r">${answered - correct}</div><div class="sl2">Mauvaises réponses</div></div><div class="sc"><div class="sn">${currentQCM.length - answered}</div><div class="sl2">Non répondues</div></div><div class="sc"><div class="sn b">${pct}%</div><div class="sl2">Score final</div></div></div><div><button class="restart-btn" onclick="restart()">🔄 Recommencer</button><button class="home-btn" onclick="goHome()">🏠 Retour aux thèmes</button></div></div>`;
    }
    function restart() { 
      state = { current: 0, answers: new Array(currentQCM.length).fill(null), revealed: new Array(currentQCM.length).fill(false) }; 
      isPaused = false;
      if (settings.timerEnabled && settings.timerType === 'quiz') {
        timeRemaining = settings.duration;
        startTimer();
      }
      if (settings.timerEnabled && settings.timerType === 'question') {
        timeRemaining = settings.duration;
      }
      renderAll(); 
    }

    // ═══ EXPORT ═══
    function showExportModal() { document.getElementById('exportModal').style.display = 'flex'; }
    function closeModal() { document.getElementById('exportModal').style.display = 'none'; }

    function buildExportContent() {
      let html = '';
      currentQCM.forEach((q, i) => {
        const choicesHtml = Object.entries(q.choices).map(([k, v]) => `<div class="ec ${k === q.correct ? 'ecorrect' : ''}"><span class="ek">${k}</span> ${v}${k === q.correct ? ' ✓' : ''}</div>`).join('');
        const wrongHtml = (q.wrongAnalysis || []).map(w => `<div class="ew"><strong>Proposition ${w.l} :</strong> ${w.t}</div>`).join('');
        const summaryHtml = (q.summary || []).map(s => `<li>${s}</li>`).join('');
        html += `<div class="eq"><div class="eq-header"><span class="eq-num">Question ${i+1}</span><span class="eq-tag">${q.partie||''} · ${q.num}</span></div><div class="eq-q">${q.q}</div><div class="eq-choices">${choicesHtml}</div><div class="eq-section eq-answer"><strong>✅ Bonne réponse :</strong> Proposition ${q.correct} — ${q.choices[q.correct]}</div><div class="eq-section"><div class="eq-section-title">📖 Explication</div><div class="eq-text">${q.explanation||''}</div></div>`;
        if (wrongHtml) html += `<div class="eq-section"><div class="eq-section-title">❌ Propositions incorrectes</div>${wrongHtml}</div>`;
        if (summaryHtml) html += `<div class="eq-section eq-summary"><div class="eq-section-title">⭐ À retenir</div><ul>${summaryHtml}</ul></div>`;
        html += '</div>';
      });
      return html;
    }

    function exportHTML() {
      const content = buildExportContent();
      const blob = new Blob([`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>${currentThemeName} — QCM</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,sans-serif;background:#f6f8fa;color:#1f2328;line-height:1.6;padding:40px 24px;max-width:900px;margin:0 auto}.eq{background:#fff;border:1px solid #d0d7de;border-radius:10px;padding:28px;margin-bottom:28px;page-break-inside:avoid}.eq-header{display:flex;align-items:center;gap:10px;margin-bottom:14px}.eq-num{font-size:12px;font-weight:700;background:#3b82f6;color:#fff;padding:3px 10px;border-radius:20px}.eq-tag{font-size:12px;color:#57606a;background:#f6f8fa;border:1px solid #d0d7de;padding:3px 10px;border-radius:20px}.eq-q{font-size:17px;font-weight:600;margin-bottom:18px;line-height:1.5}.eq-choices{display:flex;flex-direction:column;gap:8px;margin-bottom:16px}.ec{display:flex;gap:10px;padding:10px 14px;border-radius:6px;border:1px solid #d0d7de;background:#f6f8fa;font-size:14px}.ec.ecorrect{background:#dafbe1;border-color:#22c55e;font-weight:600;color:#15803d}.ek{font-weight:700;min-width:18px;flex-shrink:0}.eq-section{margin-top:16px;padding-top:16px;border-top:1px solid #eaecef}.eq-answer{background:#dafbe1;border:1px solid #22c55e;border-radius:8px;padding:12px 16px;margin-top:16px;font-size:14px;color:#15803d}.eq-section-title{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#57606a;margin-bottom:10px}.eq-text{font-size:14px;line-height:1.8;color:#444c56}.eq-text p{margin-bottom:10px}.eq-text strong{color:#1f2328}.ew{background:#fff5f5;border-left:3px solid #ef4444;padding:10px 14px;margin-bottom:8px;font-size:14px;line-height:1.7}.ew strong{color:#ef4444}.eq-summary{background:#fffbee;border:1px solid #d4a72c;border-radius:8px;padding:16px}.eq-summary ul{list-style:none;display:flex;flex-direction:column;gap:8px}.eq-summary li{font-size:14px;line-height:1.6;padding-left:20px;position:relative}.eq-summary li::before{content:"→";position:absolute;left:0;color:#d4a72c;font-weight:700}@media print{.eq{break-inside:avoid}}</style></head><body><h1 style="text-align:center;margin-bottom:32px;font-size:28px">📝 ${currentThemeName}</h1>${content}</body></html>`], { type: 'text/html;charset=utf-8' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'qcm-' + currentThemeName.toLowerCase().replace(/\\s+/g, '-') + '.html'; a.click(); closeModal();
    }

    function exportPrint() {
      const content = buildExportContent();
      const win = window.open('', '_blank');
      win.document.write(`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>${currentThemeName}</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,sans-serif;background:#fff;color:#1f2328;line-height:1.6;padding:20px;max-width:900px;margin:0 auto}.eq{border:1px solid #d0d7de;border-radius:8px;padding:22px;margin-bottom:22px;break-inside:avoid}.eq-header{display:flex;align-items:center;gap:8px;margin-bottom:12px}.eq-num{font-size:11px;font-weight:700;background:#3b82f6;color:#fff;padding:2px 8px;border-radius:20px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.eq-tag{font-size:11px;color:#57606a;background:#f6f8fa;border:1px solid #d0d7de;padding:2px 8px;border-radius:20px}.eq-q{font-size:16px;font-weight:600;margin-bottom:14px;line-height:1.5}.eq-choices{display:flex;flex-direction:column;gap:7px;margin-bottom:14px}.ec{display:flex;gap:8px;padding:8px 12px;border-radius:5px;border:1px solid #d0d7de;font-size:13px}.ec.ecorrect{background:#dafbe1;border-color:#22c55e;font-weight:600;color:#15803d;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ek{font-weight:700;min-width:16px;flex-shrink:0}.eq-section{margin-top:14px;padding-top:14px;border-top:1px solid #eaecef}.eq-answer{background:#dafbe1;border:1px solid #22c55e;border-radius:6px;padding:10px 14px;margin-top:14px;font-size:13px;color:#15803d;-webkit-print-color-adjust:exact;print-color-adjust:exact}.eq-section-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#57606a;margin-bottom:8px}.eq-text{font-size:13px;line-height:1.75;color:#444c56}.ew{background:#fff5f5;border-left:3px solid #ef4444;padding:8px 12px;margin-bottom:7px;font-size:13px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ew strong{color:#ef4444}.eq-summary{background:#fffbee;border:1px solid #d4a72c;border-radius:6px;padding:14px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.eq-summary ul{list-style:none;display:flex;flex-direction:column;gap:7px}.eq-summary li{font-size:13px;line-height:1.6;padding-left:18px;position:relative}.eq-summary li::before{content:"→";position:absolute;left:0;color:#d4a72c;font-weight:700}</style></head><body><h1 style="text-align:center;margin-bottom:24px">📝 ${currentThemeName}</h1>${content}<script>window.onload=function(){window.print()}<\/script></body></html>`);
      win.document.close(); closeModal();
    }

    // ═══ KEYBOARD SHORTCUTS ═══
    document.addEventListener('keydown', e => {
      if (document.getElementById('quizPage').style.display !== 'block' || isPaused) return;
      if (e.key === 'ArrowRight' || e.key === 'n') goTo(state.current + 1);
      else if (e.key === 'ArrowLeft' || e.key === 'p') goTo(state.current - 1);
      else if (e.key === 'r') revealAnswer();
      else if (['a','b','c','d','A','B','C','D'].includes(e.key)) selectChoice(e.key.toUpperCase());
      else if (e.key === 'Escape') goHome();
    });
