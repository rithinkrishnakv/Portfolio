// ═══════════════════════════════════════════════════════
// PAGE ROUTING & NAVIGATION
// ═══════════════════════════════════════════════════════

function goTo(id) {
  const pages = document.querySelectorAll('.page');
  const links = document.querySelectorAll('#navLinks a');
  
  pages.forEach(p => p.classList.remove('active'));
  links.forEach(a => a.classList.remove('active'));
  
  document.getElementById('page-' + id).classList.add('active');
  document.querySelector(`[data-page="${id}"]`).classList.add('active');
  
  moveIndicator();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
}

document.querySelectorAll('[data-page]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    goTo(a.dataset.page);
  });
});

function moveIndicator() {
  const active = document.querySelector('#navLinks a.active');
  const ind = document.getElementById('navIndicator');
  if (!active) return;
  ind.style.left = active.offsetLeft + 'px';
  ind.style.width = active.offsetWidth + 'px';
}

window.addEventListener('load', moveIndicator);
window.addEventListener('resize', moveIndicator);

// ═══════════════════════════════════════════════════════
// THEME TOGGLE
// ═══════════════════════════════════════════════════════

let isDark = true;
document.getElementById('themeBtn').addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.classList.toggle('light', !isDark);
  document.getElementById('themeBtn').querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  isDark = false;
  document.documentElement.classList.add('light');
  document.getElementById('themeBtn').querySelector('i').className = 'fas fa-sun';
}

// ═══════════════════════════════════════════════════════
// GLASS SPECULAR TRACKING
// ═══════════════════════════════════════════════════════

document.querySelectorAll('.glass').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

// ═══════════════════════════════════════════════════════
// TILT PHYSICS
// ═══════════════════════════════════════════════════════

function attachTiltListeners() {
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ═══════════════════════════════════════════════════════
// PROJECT FILTERING
// ═══════════════════════════════════════════════════════

document.querySelectorAll('.f-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.f-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.f;
    document.querySelectorAll('#projGrid .proj-card').forEach(card => {
      const isHidden = !(f === 'all' || card.dataset.cat === f);
      card.classList.toggle('hidden', isHidden);
    });
  });
});

// ═══════════════════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════════════════

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      revealObs.unobserve(en.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ═══════════════════════════════════════════════════════
// BACK TO TOP
// ═══════════════════════════════════════════════════════

const btt = document.getElementById('btt');
window.addEventListener('scroll', () => {
  btt.classList.toggle('vis', window.scrollY > 400);
}, { passive: true });

btt.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ═══════════════════════════════════════════════════════
// IMAGE LAZY LOAD
// ═══════════════════════════════════════════════════════

document.querySelectorAll('img').forEach(img => {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => img.classList.add('loaded'));
  }
  img.addEventListener('error', () => {
    img.style.display = 'none';
    if (img.parentElement.querySelector('.profile-pic-placeholder')) {
      img.parentElement.querySelector('.profile-pic-placeholder').style.display = 'flex';
    }
  });
});

// ═══════════════════════════════════════════════════════
// COPY TO CLIPBOARD
// ═══════════════════════════════════════════════════════

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = '✓ Copied to clipboard';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  });
}

// ═══════════════════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════════════════

function handleForm(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  
  const mailto = `mailto:rithinkrishnakv@gmail.com?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(`From: ${data.get('name')} <${data.get('email')}>\n\n${data.get('message')}`)}`;
  
  window.location.href = mailto;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = '✓ Opening email client...';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
  
  form.reset();
}

// ═══════════════════════════════════════════════════════
// PARTICLE CANVAS
// ═══════════════════════════════════════════════════════

const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');
let W, H, pts = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

function rnd(a, b) {
  return a + Math.random() * (b - a);
}

function mk() {
  return {
    x: rnd(0, W),
    y: rnd(0, H),
    vx: rnd(-0.06, 0.06),
    vy: rnd(-0.1, -0.02),
    r: rnd(0.6, 1.6),
    a: rnd(0.08, 0.3)
  };
}

function init() {
  resize();
  pts = Array.from({ length: 55 }, mk);
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  pts.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.y < -5) {
      p.y = H + 5;
      p.x = rnd(0, W);
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(94, 228, 255, ${p.a})`;
    ctx.fill();
  });
  requestAnimationFrame(draw);
}

init();
draw();
window.addEventListener('resize', resize);
