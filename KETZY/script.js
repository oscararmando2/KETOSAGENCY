/* =====================================================
   KETZY — Butterfly Life Cycle Game — script.js
   ===================================================== */

'use strict';

// ── Stage data ─────────────────────────────────────────────────────────────
const STAGES = [
  {
    id: 'egg',
    number: '1 / 4',
    nameEn: 'Egg',
    nameEs: 'Huevo',
    phraseEn: 'The butterfly starts here.',
    phraseEs: 'La mariposa empieza aquí.',
    animClass: 'anim-egg',
    emoji: '🥚',
    color: '#ffe066'
  },
  {
    id: 'caterpillar',
    number: '2 / 4',
    nameEn: 'Caterpillar',
    nameEs: 'Oruga',
    phraseEn: 'It eats and grows.',
    phraseEs: 'Come y crece.',
    animClass: 'anim-caterpillar',
    emoji: '🐛',
    color: '#6dd67a'
  },
  {
    id: 'chrysalis',
    number: '3 / 4',
    nameEn: 'Chrysalis',
    nameEs: 'Crisálida',
    phraseEn: 'It changes.',
    phraseEs: 'Cambia.',
    animClass: 'anim-chrysalis',
    emoji: '🫛',
    color: '#c084fc'
  },
  {
    id: 'butterfly',
    number: '4 / 4',
    nameEn: 'Butterfly',
    nameEs: 'Mariposa',
    phraseEn: 'It flies.',
    phraseEs: 'Vuela.',
    animClass: 'anim-butterfly',
    emoji: '🦋',
    color: '#ff8fc8'
  }
];

// ── SVG illustrations (inline, cartoon-style) ──────────────────────────────
function svgEgg() {
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g class="egg-group">
    <!-- leaf platform -->
    <ellipse cx="100" cy="175" rx="65" ry="14" fill="#5cb85c" opacity="0.7"/>
    <path d="M40 170 Q100 148 160 170 Q130 195 70 195 Z" fill="#6dd67a"/>
    <!-- egg body -->
    <ellipse cx="100" cy="120" rx="42" ry="54" fill="#fffde7"/>
    <ellipse cx="100" cy="118" rx="40" ry="52" fill="#fff9c4"/>
    <!-- shine -->
    <ellipse cx="85" cy="96" rx="10" ry="14" fill="white" opacity="0.5" transform="rotate(-18,85,96)"/>
    <!-- face -->
    <circle cx="90" cy="122" r="4.5" fill="#555" />
    <circle cx="110" cy="122" r="4.5" fill="#555" />
    <path d="M88 134 Q100 142 112 134" stroke="#555" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- spots -->
    <circle cx="78" cy="145" r="5" fill="#ffe082" opacity="0.6"/>
    <circle cx="122" cy="140" r="4" fill="#ffe082" opacity="0.6"/>
  </g>
</svg>`;
}

function svgCaterpillar() {
  return `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g class="cat-group">
    <!-- grass -->
    <rect x="0" y="160" width="220" height="40" fill="#6dd67a" rx="8"/>
    <!-- body segments -->
    <g class="cat-body">
      <circle cx="55"  cy="148" r="22" fill="#8bc34a"/>
      <circle cx="90"  cy="143" r="24" fill="#7cb342"/>
      <circle cx="127" cy="143" r="24" fill="#8bc34a"/>
      <circle cx="163" cy="146" r="21" fill="#7cb342"/>
    </g>
    <!-- head -->
    <circle cx="40" cy="133" r="26" fill="#aed561"/>
    <!-- face -->
    <circle cx="32" cy="128" r="5" fill="#33691e"/>
    <circle cx="49" cy="128" r="5" fill="#33691e"/>
    <circle cx="33" cy="127" r="2" fill="white"/>
    <circle cx="50" cy="127" r="2" fill="white"/>
    <path d="M30 140 Q40 148 51 140" stroke="#33691e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- antennae -->
    <line x1="28" y1="110" x2="18" y2="92" stroke="#33691e" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="47" y1="108" x2="52" y2="89" stroke="#33691e" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="18" cy="90" r="5" fill="#ff7043"/>
    <circle cx="52" cy="87" r="5" fill="#ff7043"/>
    <!-- legs -->
    <line x1="75"  y1="165" x2="65"  y2="180" stroke="#558b2f" stroke-width="3" stroke-linecap="round"/>
    <line x1="105" y1="165" x2="98"  y2="178" stroke="#558b2f" stroke-width="3" stroke-linecap="round"/>
    <line x1="140" y1="165" x2="133" y2="178" stroke="#558b2f" stroke-width="3" stroke-linecap="round"/>
    <line x1="162" y1="167" x2="155" y2="179" stroke="#558b2f" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>`;
}

function svgChrysalis() {
  return `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g class="chrysalis-group">
    <!-- branch -->
    <rect x="92" y="0" width="16" height="55" fill="#795548" rx="8"/>
    <!-- thread -->
    <line x1="100" y1="52" x2="100" y2="65" stroke="#9e9e9e" stroke-width="2.5"/>
    <!-- chrysalis body -->
    <path d="M100 70 C65 70 48 105 48 135 C48 168 70 195 100 195 C130 195 152 168 152 135 C152 105 135 70 100 70 Z" fill="#ce93d8"/>
    <!-- shine/ridges -->
    <path d="M70 100 Q100 88 130 100" stroke="#e1bee7" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M62 120 Q100 106 138 120" stroke="#e1bee7" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M60 140 Q100 125 140 140" stroke="#e1bee7" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
    <!-- glow overlay -->
    <ellipse cx="100" cy="135" rx="48" ry="57" fill="url(#glow)" opacity="0.35"/>
    <!-- tip -->
    <path d="M88 190 Q100 205 112 190" fill="#ab47bc"/>
    <!-- shine spot -->
    <ellipse cx="83" cy="100" rx="9" ry="16" fill="white" opacity="0.3" transform="rotate(-15,83,100)"/>
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="#e040fb" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#ce93d8" stop-opacity="0"/>
      </radialGradient>
    </defs>
  </g>
</svg>`;
}

function svgButterfly() {
  return `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g class="butterfly-body">
    <!-- left wings -->
    <g class="wing-left">
      <path d="M108 95 C80 50 20 45 18 90 C16 130 65 150 108 120 Z" fill="#ff8fc8"/>
      <path d="M108 95 C80 50 20 45 18 90 C16 130 65 150 108 120 Z" fill="url(#wingL)" opacity="0.5"/>
      <path d="M108 120 C75 145 30 160 25 135 C18 110 60 145 108 120 Z" fill="#ffb3d9"/>
      <!-- wing pattern -->
      <circle cx="55" cy="88"  r="12" fill="#ffecf5" opacity="0.6"/>
      <circle cx="42" cy="108" r="8"  fill="#ffecf5" opacity="0.5"/>
    </g>
    <!-- right wings -->
    <g class="wing-right">
      <path d="M112 95 C140 50 200 45 202 90 C204 130 155 150 112 120 Z" fill="#ff8fc8"/>
      <path d="M112 95 C140 50 200 45 202 90 C204 130 155 150 112 120 Z" fill="url(#wingR)" opacity="0.5"/>
      <path d="M112 120 C145 145 190 160 195 135 C202 110 160 145 112 120 Z" fill="#ffb3d9"/>
      <!-- wing pattern -->
      <circle cx="165" cy="88"  r="12" fill="#ffecf5" opacity="0.6"/>
      <circle cx="178" cy="108" r="8"  fill="#ffecf5" opacity="0.5"/>
    </g>
    <!-- body -->
    <ellipse cx="110" cy="108" rx="9" ry="35" fill="#6a1b4d"/>
    <!-- head -->
    <circle cx="110" cy="70" r="12" fill="#6a1b4d"/>
    <!-- eyes -->
    <circle cx="105" cy="67" r="3.5" fill="white"/>
    <circle cx="115" cy="67" r="3.5" fill="white"/>
    <circle cx="105" cy="67" r="2"   fill="#222"/>
    <circle cx="115" cy="67" r="2"   fill="#222"/>
    <!-- antennae -->
    <path d="M106 59 C98 44 88 36 83 28" stroke="#6a1b4d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M114 59 C122 44 132 36 137 28" stroke="#6a1b4d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="83"  cy="26" r="5" fill="#ff8fc8"/>
    <circle cx="137" cy="26" r="5" fill="#ff8fc8"/>
    <defs>
      <radialGradient id="wingL" cx="60%" cy="40%" r="60%">
        <stop offset="0%"   stop-color="#ffffff" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#ff8fc8" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="wingR" cx="40%" cy="40%" r="60%">
        <stop offset="0%"   stop-color="#ffffff" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#ff8fc8" stop-opacity="0"/>
      </radialGradient>
    </defs>
  </g>
</svg>`;
}

const SVG_FNS = [svgEgg, svgCaterpillar, svgChrysalis, svgButterfly];
const STEP_EMOJIS = ['🥚', '🐛', '🫛', '🦋'];

// ── Confetti ────────────────────────────────────────────────────────────────
const canvas = document.getElementById('confetti-canvas');
const ctx    = canvas.getContext('2d');
let confettiPieces = [];
let confettiRunning = false;

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function spawnConfetti() {
  const COLORS = ['#ffe066','#ff8fc8','#6dd67a','#b8e8ff','#c084fc','#ff7043','#fff'];
  confettiPieces = [];
  for (let i = 0; i < 130; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.5,
      r: 5 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rot: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 3,
      vy: 2.5 + Math.random() * 3.5,
      vrot: (Math.random() - 0.5) * 0.15,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }
  confettiRunning = true;
  animateConfetti();
}

function animateConfetti() {
  if (!confettiRunning) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let alive = 0;
  confettiPieces.forEach(p => {
    p.x  += p.vx;
    p.y  += p.vy;
    p.rot += p.vrot;
    if (p.y < canvas.height + 30) alive++;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = 0.88;
    if (p.shape === 'rect') {
      ctx.fillRect(-p.r, -p.r * 0.4, p.r * 2, p.r * 0.8);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, p.r * 0.6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  });
  if (alive > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiRunning = false;
  }
}

// ── Sparkle reward burst ────────────────────────────────────────────────────
function burstSparkle() {
  const container = document.getElementById('sparkle-container');
  const emojis = ['⭐','✨','🌟','💫','🎉'];
  for (let i = 0; i < 10; i++) {
    const el = document.createElement('span');
    el.className = 'sparkle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = (20 + Math.random() * 60) + 'vw';
    el.style.top  = (40 + Math.random() * 30) + 'vh';
    el.style.animationDelay = (Math.random() * 0.35) + 's';
    container.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
}

// ── Audio (graceful — uses AudioContext; silent if unavailable) ─────────────
let audioCtx = null;
let muted = false;

function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(_) {}
  }
  return audioCtx;
}

function playTone(freq, type, duration, volume) {
  if (muted) return;
  const ac = getAudioCtx();
  if (!ac) return;
  try {
    const osc  = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, ac.currentTime);
    gain.gain.setValueAtTime(volume || 0.12, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + duration);
    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + duration);
  } catch(_) {}
}

function playClick()      { playTone(520, 'sine', 0.12, 0.10); }
function playAdvance()    { playTone(660, 'sine', 0.18, 0.12); setTimeout(() => playTone(880, 'sine', 0.18, 0.10), 100); }
function playCelebrate()  {
  const notes = [523, 659, 784, 1047];
  notes.forEach((n, i) => setTimeout(() => playTone(n, 'sine', 0.25, 0.12), i * 130));
}
function playError()      { playTone(200, 'sawtooth', 0.3, 0.07); }

// ── Text-to-Speech (Web Speech API) ─────────────────────────────────────────
function speakEnglish(text) {
  if (muted) return;
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang  = 'en-US';
  utter.rate  = 0.75;  // Slow for pronunciation learning
  utter.pitch = 1;
  window.speechSynthesis.speak(utter);
}

// ── Mute toggle ─────────────────────────────────────────────────────────────
const muteBtn = document.getElementById('mute-btn');
muteBtn.addEventListener('click', () => {
  muted = !muted;
  muteBtn.textContent  = muted ? '🔇' : '🔊';
  muteBtn.title        = muted ? 'Unmute' : 'Mute';
  muteBtn.setAttribute('aria-pressed', String(muted));
  playClick();
});

// ── State ────────────────────────────────────────────────────────────────────
let currentStage = 0;
let direction    = 'next'; // 'next' | 'back'

// ── DOM refs ─────────────────────────────────────────────────────────────────
const stageView   = document.getElementById('stage-view');
const finalView   = document.getElementById('final-view');
const progressBar = document.getElementById('progress-bar');

// ── Progress bar builder ─────────────────────────────────────────────────────
function buildProgressBar(activeIndex) {
  progressBar.innerHTML = '';
  STAGES.forEach((s, i) => {
    // step
    const stepDiv  = document.createElement('div');
    stepDiv.className = 'progress-step';

    const icon = document.createElement('div');
    icon.className = 'step-icon' +
      (i === activeIndex ? ' active' : (i < activeIndex ? ' done' : ''));
    icon.textContent = STEP_EMOJIS[i];
    icon.setAttribute('aria-label', s.nameEn);

    const label = document.createElement('div');
    label.className = 'step-label';
    label.textContent = s.nameEn + '\n' + s.nameEs;

    stepDiv.appendChild(icon);
    stepDiv.appendChild(label);
    progressBar.appendChild(stepDiv);

    // connector
    if (i < STAGES.length - 1) {
      const conn = document.createElement('div');
      conn.className = 'progress-connector' + (i < activeIndex ? ' done' : '');
      progressBar.appendChild(conn);
    }
  });
}

// ── Stage renderer ────────────────────────────────────────────────────────────
function renderStage(index, dir) {
  const s = STAGES[index];
  buildProgressBar(index);

  stageView.classList.remove('hidden');
  finalView.classList.add('hidden');

  const animClass = dir === 'next' ? 'enter-from-right' : 'enter-from-left';

  stageView.innerHTML = `
    <div class="stage-card ${animClass}" role="main" aria-label="${s.nameEn} stage">
      <div class="stage-number">${s.number}</div>

      <h2 class="stage-name">${s.nameEn} / ${s.nameEs}</h2>

      <div class="illustration-wrap ${s.animClass}" aria-hidden="true">
        ${SVG_FNS[index]()}
      </div>

      <div class="phrase-en phrase-speakable" id="phrase-en-${index}" role="button" tabindex="0" aria-label="Tap to hear: ${s.phraseEn}">
        <span class="phrase-lang-badge">🔊 English — tap to hear!</span>
        ${s.phraseEn}
      </div>
      <div class="phrase-es" role="text">
        <span class="phrase-lang-badge">Español</span>
        ${s.phraseEs}
      </div>

      <div class="btn-row">
        ${index > 0 ? `<button class="btn btn-back" id="btn-back" aria-label="Go back">← Back</button>` : ''}
        <button class="btn btn-next" id="btn-next" aria-label="${index < STAGES.length - 1 ? 'Next stage' : 'See results'}">
          ${index < STAGES.length - 1 ? 'Next ➜' : 'Finish! 🎉'}
        </button>
      </div>
    </div>
  `;

  document.getElementById('btn-next').addEventListener('click', () => {
    playAdvance();
    burstSparkle();
    if (index < STAGES.length - 1) {
      direction    = 'next';
      currentStage = index + 1;
      renderStage(currentStage, 'next');
    } else {
      showFinal();
    }
  });

  const backBtn = document.getElementById('btn-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      playClick();
      direction    = 'back';
      currentStage = index - 1;
      renderStage(currentStage, 'back');
    });
  }

  // Tap-to-speak: English phrase
  const phraseEnEl = document.getElementById(`phrase-en-${index}`);
  if (phraseEnEl) {
    phraseEnEl.addEventListener('click', () => speakEnglish(s.phraseEn));
    phraseEnEl.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); speakEnglish(s.phraseEn); }
    });
  }
}

// ── Final celebration screen ──────────────────────────────────────────────────
function showFinal() {
  stageView.classList.add('hidden');
  finalView.classList.remove('hidden');
  buildProgressBar(STAGES.length); // all done

  // Mark all steps done
  document.querySelectorAll('.step-icon').forEach(el => {
    el.classList.remove('active');
    el.classList.add('done');
  });
  document.querySelectorAll('.progress-connector').forEach(el => el.classList.add('done'));

  playCelebrate();
  setTimeout(spawnConfetti, 300);

  finalView.innerHTML = `
    <div class="final-screen fade-in" role="main">
      <span class="final-trophy" aria-hidden="true">🏆</span>
      <h2 class="final-title">You learned it! / ¡Lo aprendiste!</h2>
      <p class="final-subtitle-en">You learned the butterfly life cycle!</p>
      <p class="final-subtitle-es">¡Aprendiste el ciclo de vida de la mariposa!</p>

      <div class="say-loud-title">
        <span aria-hidden="true">🗣️</span> Say it out loud / Dilo en voz alta
      </div>

      <div class="review-grid" role="list">
        ${STAGES.map(s => `
          <div class="review-card" role="listitem">
            <div class="review-card-icon" aria-hidden="true">${s.emoji}</div>
            <div class="review-card-stage">${s.nameEn} / ${s.nameEs}</div>
            <div class="review-card-en">${s.phraseEn}</div>
            <div class="review-card-es">${s.phraseEs}</div>
          </div>
        `).join('')}
      </div>

      <div class="final-phrase-box">
        <div class="final-phrase-en">This is the butterfly life cycle.</div>
        <div class="final-phrase-es">Este es el ciclo de vida de la mariposa.</div>
      </div>

      <div class="btn-row">
        <button class="btn btn-trivia" id="btn-trivia" aria-label="Play trivia game">
          🎮 ¡Jugar Trivia!
        </button>
        <button class="btn btn-restart" id="btn-restart" aria-label="Play again">
          ↺ Jugar de Nuevo
        </button>
      </div>
    </div>
  `;

  document.getElementById('btn-restart').addEventListener('click', () => {
    playClick();
    burstSparkle();
    currentStage = 0;
    renderStage(0, 'next');
  });

  document.getElementById('btn-trivia').addEventListener('click', () => {
    playClick();
    burstSparkle();
    renderTrivia(0, 0);
  });

  // Tap-to-speak on review cards (English phrase)
  document.querySelectorAll('.review-card').forEach((card, i) => {
    const enEl = card.querySelector('.review-card-en');
    if (enEl) {
      enEl.classList.add('phrase-speakable');
      enEl.setAttribute('role', 'button');
      enEl.setAttribute('tabindex', '0');
      enEl.setAttribute('title', 'Tap to hear / Toca para escuchar');
      enEl.addEventListener('click', () => speakEnglish(STAGES[i].phraseEn));
      enEl.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); speakEnglish(STAGES[i].phraseEn); }
      });
    }
  });
}

// ── Trivia questions ─────────────────────────────────────────────────────────
// Simple questions for a 5-year-old — vocabulary focus, emoji-rich
const TRIVIA_QUESTIONS = [
  {
    emoji: '🦋',
    question: '¿Qué es esto? / What is this?',
    options: ['Butterfly', 'Egg', 'Caterpillar', 'Chrysalis'],
    correct: 0
  },
  {
    emoji: '🥚',
    question: '¿Qué es esto? / What is this?',
    options: ['Butterfly', 'Egg', 'Caterpillar', 'Chrysalis'],
    correct: 1
  },
  {
    emoji: '🐛',
    question: '¿Qué es esto? / What is this?',
    options: ['Butterfly', 'Egg', 'Caterpillar', 'Chrysalis'],
    correct: 2
  },
  {
    emoji: '🫛',
    question: '¿Qué es esto? / What is this?',
    options: ['Butterfly', 'Egg', 'Caterpillar', 'Chrysalis'],
    correct: 3
  },
  {
    emoji: '🦋',
    question: 'Mariposa en inglés es...',
    options: ['Butterfly', 'Egg', 'Caterpillar', 'Chrysalis'],
    correct: 0
  },
  {
    emoji: '🥚',
    question: 'Huevo en inglés es...',
    options: ['Butterfly', 'Egg', 'Caterpillar', 'Chrysalis'],
    correct: 1
  },
  {
    emoji: '1️⃣',
    question: '¿Cuál es primero? / Which is first?',
    options: ['Butterfly 🦋', 'Caterpillar 🐛', 'Chrysalis 🫛', 'Egg 🥚'],
    correct: 3
  },
  {
    emoji: '4️⃣',
    question: '¿Cuál es último? / Which is last?',
    options: ['Egg 🥚', 'Caterpillar 🐛', 'Butterfly 🦋', 'Chrysalis 🫛'],
    correct: 2
  }
];

// ── Trivia renderer ───────────────────────────────────────────────────────────
function renderTrivia(qIndex, score) {
  stageView.classList.add('hidden');
  finalView.classList.remove('hidden');
  buildProgressBar(STAGES.length); // keep all done

  const q      = TRIVIA_QUESTIONS[qIndex];
  const totalQ = TRIVIA_QUESTIONS.length;

  finalView.innerHTML = `
    <div class="trivia-card fade-in" role="main" aria-label="Trivia question ${qIndex + 1}">
      <div class="trivia-header">
        <span class="trivia-progress">${qIndex + 1} / ${totalQ}</span>
        <span class="trivia-score-badge">⭐ ${score} pts</span>
      </div>

      <div class="trivia-emoji" aria-hidden="true">${q.emoji}</div>
      <p class="trivia-question">${q.question}</p>

      <div class="trivia-options" id="trivia-options" role="group" aria-label="Answer options">
        ${q.options.map((opt, i) => `
          <button class="btn trivia-option" data-idx="${i}" aria-label="${opt}">${opt}</button>
        `).join('')}
      </div>

      <div class="trivia-feedback" id="trivia-feedback" aria-live="polite"></div>
    </div>
  `;

  document.querySelectorAll('.trivia-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen    = parseInt(btn.dataset.idx, 10);
      const isCorrect = chosen === q.correct;

      // Lock all buttons
      document.querySelectorAll('.trivia-option').forEach(b => { b.disabled = true; });

      // Highlight correct / wrong
      document.querySelectorAll('.trivia-option').forEach((b, i) => {
        if (i === q.correct)                b.classList.add('trivia-correct');
        else if (i === chosen && !isCorrect) b.classList.add('trivia-wrong');
      });

      const newScore = score + (isCorrect ? 1 : 0);
      const feedback = document.getElementById('trivia-feedback');

      if (isCorrect) {
        feedback.innerHTML = '<span class="feedback-icon">🎉</span> ¡MUY BIEN KETZY! <span class="feedback-icon">🎉</span>';
        feedback.className  = 'trivia-feedback trivia-feedback-correct';
        playCelebrate();
        burstSparkle();
        speakEnglish('Very good Ketzy!');
      } else {
        feedback.innerHTML = '<span class="feedback-icon">💪</span> ¡Casi! Sigue intentando.';
        feedback.className  = 'trivia-feedback trivia-feedback-wrong';
        playError();
      }

      setTimeout(() => {
        const nextIndex  = qIndex + 1;
        const actionBtn  = document.createElement('button');
        actionBtn.className = 'btn btn-next';
        if (nextIndex < totalQ) {
          actionBtn.textContent = 'Siguiente pregunta ➜';
          actionBtn.addEventListener('click', () => {
            playAdvance();
            renderTrivia(nextIndex, newScore);
          });
        } else {
          actionBtn.textContent = '🏆 Ver resultado';
          actionBtn.addEventListener('click', () => {
            playAdvance();
            showTriviaResult(newScore, totalQ);
          });
        }
        feedback.appendChild(actionBtn);
      }, 900);
    });
  });
}

// ── Trivia result screen ──────────────────────────────────────────────────────
function showTriviaResult(score, total) {
  stageView.classList.add('hidden');
  finalView.classList.remove('hidden');

  const pct    = Math.round((score / total) * 100);
  const trophy = pct >= 80 ? '🏆' : pct >= 50 ? '🌟' : '💪';
  const msgEn  = pct >= 80 ? 'Excellent!' : pct >= 50 ? 'Well done!' : 'Keep practicing!';
  const msgEs  = pct >= 80 ? '¡Excelente!' : pct >= 50 ? '¡Bien hecho!' : '¡Sigue practicando!';

  playCelebrate();
  setTimeout(spawnConfetti, 300);

  finalView.innerHTML = `
    <div class="final-screen fade-in" role="main">
      <span class="final-trophy" aria-hidden="true">${trophy}</span>
      <h2 class="final-title">¡MUY BIEN KETZY! 🎉</h2>
      <p class="trivia-result-score">${score} / ${total} correctas</p>
      <p class="final-subtitle-en">${msgEn}</p>
      <p class="final-subtitle-es">${msgEs}</p>
      <div class="btn-row">
        <button class="btn btn-trivia" id="btn-play-again-trivia">🎮 Trivia de Nuevo</button>
        <button class="btn btn-restart" id="btn-restart-from-trivia">↺ Jugar de Nuevo</button>
      </div>
    </div>
  `;

  document.getElementById('btn-play-again-trivia').addEventListener('click', () => {
    playClick();
    renderTrivia(0, 0);
  });
  document.getElementById('btn-restart-from-trivia').addEventListener('click', () => {
    playClick();
    burstSparkle();
    currentStage = 0;
    renderStage(0, 'next');
  });
}

// ── Background decorations ────────────────────────────────────────────────────
function buildBgDecorations() {
  const bg = document.querySelector('.bg-decorations');
  const leafEmojis  = ['🍃','🌿','🍀','🌱'];
  const cloudEmojis = ['☁️','🌤️'];

  for (let i = 0; i < 10; i++) {
    const el = document.createElement('span');
    el.className = 'leaf';
    el.textContent = leafEmojis[i % leafEmojis.length];
    el.style.left    = (5 + Math.random() * 90) + '%';
    el.style.top     = (5 + Math.random() * 90) + '%';
    el.style.animationDuration   = (4 + Math.random() * 5) + 's';
    el.style.animationDelay      = (-Math.random() * 5) + 's';
    el.setAttribute('aria-hidden', 'true');
    bg.appendChild(el);
  }

  for (let i = 0; i < 4; i++) {
    const el = document.createElement('span');
    el.className = 'cloud';
    el.textContent = cloudEmojis[i % cloudEmojis.length];
    el.style.left    = (5 + Math.random() * 85) + '%';
    el.style.top     = (2 + Math.random() * 25) + '%';
    el.style.animationDuration   = (6 + Math.random() * 7) + 's';
    el.style.animationDelay      = (-Math.random() * 6) + 's';
    el.setAttribute('aria-hidden', 'true');
    bg.appendChild(el);
  }
}

// ── Words Spelling — data ────────────────────────────────────────────────────
const WORDS_DATA = [
  { en: 'DESK',    es: 'escritorio', emoji: '🪑' },
  { en: 'RULER',   es: 'regla',      emoji: '📏' },
  { en: 'TABLET',  es: 'tableta',    emoji: '📱' },
  { en: 'SPEAK',   es: 'hablar',     emoji: '🗣️' },
  { en: 'READ',    es: 'leer',       emoji: '📖' },
  { en: 'CIRCLE',  es: 'círculo',    emoji: '⭕' },
  { en: 'HEART',   es: 'corazón',    emoji: '❤️' },
  { en: 'STAR',    es: 'estrella',   emoji: '⭐' },
  { en: 'BIRD',    es: 'pájaro',     emoji: '🐦' },
  { en: 'FISH',    es: 'pez',        emoji: '🐟' },
  { en: 'SUNSET',  es: 'atardecer',  emoji: '🌅' },
  { en: 'NIGHT',   es: 'noche',      emoji: '🌙' },
  { en: 'ORANGE',  es: 'naranja',    emoji: '🍊' },
  { en: 'BROWN',   es: 'marrón',     emoji: '🟤' },
  { en: 'SQUARE',  es: 'cuadrado',   emoji: '🟦' },
  { en: 'SHEEP',   es: 'oveja',      emoji: '🐑' },
  { en: 'HONEY',   es: 'miel',       emoji: '🍯' },
  { en: 'MILK',    es: 'leche',      emoji: '🥛' },
  { en: 'PUPPY',   es: 'cachorro',   emoji: '🐶' },
  { en: 'LAMB',    es: 'cordero',    emoji: '🐏' },
  { en: 'NEST',    es: 'nido',       emoji: '🐣' },
  { en: 'GRANDMA', es: 'abuela',     emoji: '👵' },
  { en: 'UNCLE',   es: 'tío',        emoji: '👨' },
  { en: 'PARENTS', es: 'padres',     emoji: '👪' },
  { en: 'SHARE',   es: 'compartir',  emoji: '🤝' },
  { en: 'HELP',    es: 'ayudar',     emoji: '🙏' },
  { en: 'NOISY',   es: 'ruidoso',    emoji: '🔔' },
  { en: 'FINGER',  es: 'dedo',       emoji: '☝️' },
  { en: 'SHORT',   es: 'corto',      emoji: '🔻' },
  { en: 'BLOND',   es: 'rubio',      emoji: '👱' },
  { en: 'SNAP',    es: 'chasquido',  emoji: '🫰' },
  { en: 'WAVE',    es: 'ola',        emoji: '🌊' },
  { en: 'CLIMB',   es: 'trepar',     emoji: '🧗' },
  { en: 'CODE',    es: 'código',     emoji: '💻' },
  { en: 'PHONE',   es: 'teléfono',   emoji: '📞' },
  { en: 'GAME',    es: 'juego',      emoji: '🎮' },
  { en: 'GRAPES',  es: 'uvas',       emoji: '🍇' },
  { en: 'LEMON',   es: 'limón',      emoji: '🍋' },
  { en: 'BEANS',   es: 'frijoles',   emoji: '🫘' },
  { en: 'PASTA',   es: 'pasta',      emoji: '🍝' },
  { en: 'WRITE',   es: 'escribir',   emoji: '✏️' },
  { en: 'PINK',    es: 'rosado',     emoji: '🌸' },
  { en: 'NOON',    es: 'mediodía',   emoji: '☀️' },
  { en: 'GOOSE',   es: 'ganso',      emoji: '🦢' },
  { en: 'BARN',    es: 'granero',    emoji: '🏡' },
  { en: 'SISTER',  es: 'hermana',    emoji: '👧' },
  { en: 'ROUND',   es: 'redondo',    emoji: '🔵' },
  { en: 'SWIM',    es: 'nadar',      emoji: '🏊' },
  { en: 'SOCCER',  es: 'fútbol',     emoji: '⚽' },
  { en: 'YOGURT',  es: 'yogur',      emoji: '🫙' }
];

// Pastel background gradients — cycles every 6 cards
const CARD_GRADIENTS = [
  'linear-gradient(145deg,#fff0f5,#ffd6e8)',
  'linear-gradient(145deg,#e8f4ff,#cce5ff)',
  'linear-gradient(145deg,#f0fff0,#ccf5cc)',
  'linear-gradient(145deg,#fffbe0,#fff0a0)',
  'linear-gradient(145deg,#f5f0ff,#e4d0ff)',
  'linear-gradient(145deg,#fff5eb,#ffdcb3)'
];

// ── Section switching helpers ────────────────────────────────────────────────
const wordsApp = document.getElementById('words-app');
const homeBtn  = document.getElementById('home-btn');

function showOnlySection(id) {
  ['selection-view', 'app', 'words-app'].forEach(sid => {
    document.getElementById(sid).classList.toggle('hidden', sid !== id);
  });
  homeBtn.classList.toggle('hidden', id === 'selection-view');
}

function showSelection() {
  showOnlySection('selection-view');
  window.speechSynthesis && window.speechSynthesis.cancel();
}

function showButterflyGame() {
  showOnlySection('app');
  currentStage = 0;
  renderStage(0, 'next');
}

// ── Selection screen setup ───────────────────────────────────────────────────
document.getElementById('btn-butterfly').addEventListener('click', () => {
  playClick();
  burstSparkle();
  showButterflyGame();
});

document.getElementById('btn-words').addEventListener('click', () => {
  playClick();
  burstSparkle();
  showWordsApp('study');
});

homeBtn.addEventListener('click', () => {
  playClick();
  showSelection();
});

// ── Words Spelling App ────────────────────────────────────────────────────────
let wordsMode    = 'study';  // 'study' | 'exam'
let revealedSet  = new Set();

function resetWordCards() {
  playClick();
  revealedSet = new Set();
  renderWordsSection();
}

function showWordsApp(mode) {
  wordsMode   = mode || 'study';
  revealedSet = new Set();
  showOnlySection('words-app');
  renderWordsSection();
}

function renderWordsSection() {
  const isStudy  = wordsMode === 'study';
  const revealed = revealedSet.size;

  wordsApp.innerHTML = `
    <div class="words-header">
      <h1>📝 Words Spelling</h1>
      <p class="subtitle">50 English words / 50 palabras en inglés</p>
    </div>

    <div class="words-mode-row" role="group" aria-label="Select study mode">
      <button class="btn btn-mode btn-mode-study${isStudy ? ' btn-active' : ''}" id="wbtn-study" aria-pressed="${isStudy}">
        📚 Study / Estudiar
      </button>
      <button class="btn btn-mode btn-mode-exam${!isStudy ? ' btn-active' : ''}" id="wbtn-exam" aria-pressed="${!isStudy}">
        📝 Exam / Examen
      </button>
    </div>

    <div class="words-count-bar">
      <span class="words-count-text" id="words-count-text">
        ${isStudy
          ? `🔊 ${revealed} / ${WORDS_DATA.length} heard`
          : `✅ ${revealed} / ${WORDS_DATA.length} checked`}
      </span>
      ${revealed > 0
        ? `<button class="btn-reset-cards" id="btn-reset-cards">↺ Reset</button>`
        : ''}
    </div>

    <div class="words-grid" id="words-grid" role="list" aria-label="Vocabulary cards">
      ${WORDS_DATA.map((w, i) => buildWordCardHTML(w, i, isStudy)).join('')}
    </div>
  `;

  // Mode toggle buttons
  document.getElementById('wbtn-study').addEventListener('click', () => {
    if (wordsMode === 'study') return;
    playClick();
    wordsMode   = 'study';
    revealedSet = new Set();
    renderWordsSection();
  });

  document.getElementById('wbtn-exam').addEventListener('click', () => {
    if (wordsMode === 'exam') return;
    playClick();
    wordsMode   = 'exam';
    revealedSet = new Set();
    renderWordsSection();
  });

  // Reset button
  const resetBtn = document.getElementById('btn-reset-cards');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetWordCards);
  }

  // Wire up each word card
  document.querySelectorAll('.word-card').forEach(card => {
    card.addEventListener('click', () => onWordCardClick(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onWordCardClick(card); }
    });
  });
}

function buildWordCardHTML(word, index, isStudy) {
  const bg    = CARD_GRADIENTS[index % CARD_GRADIENTS.length];
  const extra = isStudy ? '' : ' exam-card';
  const hint  = isStudy ? '🔊 tap to hear' : '👁️ tap to check';
  return `
    <div
      class="word-card${extra}"
      data-index="${index}"
      role="listitem"
      tabindex="0"
      aria-label="${word.en} — tap to ${isStudy ? 'hear and see meaning' : 'check meaning'}"
      style="background:${bg}"
    >
      <span class="word-card-num">${index + 1}</span>
      <span class="word-card-emoji" aria-hidden="true">${word.emoji}</span>
      <span class="word-card-en">${word.en}</span>
      <span class="word-card-hint">${hint}</span>
    </div>
  `;
}

function onWordCardClick(card) {
  const index = parseInt(card.dataset.index, 10);
  const word  = WORDS_DATA[index];

  if (card.classList.contains('revealed')) {
    // Already revealed — just replay pronunciation in study mode
    if (wordsMode === 'study') speakEnglish(word.en);
    return;
  }

  // Reveal the card
  card.classList.add('revealed');
  revealedSet.add(index);
  playClick();

  // Remove hint text
  const hint = card.querySelector('.word-card-hint');
  if (hint) hint.remove();

  // Append Spanish translation
  const esSpan = document.createElement('span');
  esSpan.className   = 'word-card-es';
  esSpan.textContent = word.es;
  card.appendChild(esSpan);

  // In study mode: speak the English word
  if (wordsMode === 'study') {
    speakEnglish(word.en);
    burstSparkle();
  }

  // In exam mode: show emoji too (already handled by CSS class removal)
  if (wordsMode === 'exam') {
    const emojiSpan = card.querySelector('.word-card-emoji');
    if (emojiSpan) emojiSpan.style.display = 'block';
  }

  // Update counter
  const countEl = document.getElementById('words-count-text');
  if (countEl) {
    countEl.textContent = wordsMode === 'study'
      ? `🔊 ${revealedSet.size} / ${WORDS_DATA.length} heard`
      : `✅ ${revealedSet.size} / ${WORDS_DATA.length} checked`;
  }

  // Show reset button once first card is revealed
  if (revealedSet.size === 1) {
    const bar = document.querySelector('.words-count-bar');
    if (bar && !document.getElementById('btn-reset-cards')) {
      const rb = document.createElement('button');
      rb.className = 'btn-reset-cards';
      rb.id        = 'btn-reset-cards';
      rb.textContent = '↺ Reset';
      rb.addEventListener('click', resetWordCards);
      bar.appendChild(rb);
    }
  }

  // Celebrate when all revealed
  if (revealedSet.size === WORDS_DATA.length) {
    playCelebrate();
    setTimeout(spawnConfetti, 200);
    burstSparkle();
  }
}

// ── Boot ──────────────────────────────────────────────────────────────────────
buildBgDecorations();
showSelection();
