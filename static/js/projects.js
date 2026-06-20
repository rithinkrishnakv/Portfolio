// ═══════════════════════════════════════════════════════
// PROJECTS CONFIG & RENDERING
// ═══════════════════════════════════════════════════════

function renderProjects() {
  const projGrid = document.getElementById('projGrid');
  if (!projGrid || !PROJECTS) return;
  
  projGrid.innerHTML = PROJECTS.map(proj => {
    const isCTF = proj.category.includes('CTF');
    const iconStyle = isCTF 
      ? 'style="background:linear-gradient(155deg, rgba(155,135,255,0.18), rgba(155,135,255,0.04)); border-color:rgba(155,135,255,0.22); color:var(--violet);"'
      : '';
    
    return `
      <div class="glass proj-card tilt reveal" data-cat="${proj.category}">
        <div class="proj-top">
          <div class="proj-icon" ${iconStyle}><i class="${proj.icon}"></i></div>
          <a class="proj-link" href="${proj.url}" target="_blank" rel="noopener noreferrer"><i class="fas fa-arrow-up-right-from-square"></i></a>
        </div>
        <div class="proj-cat">${proj.category}</div>
        <div class="proj-title">${proj.name}</div>
        <p class="proj-desc">${proj.description}</p>
        <div class="proj-tags">
          ${proj.tags.map(tag => `<span class="mini-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
  
  attachTiltListeners();
  document.querySelectorAll('.proj-card').forEach(el => revealObs.observe(el));
}

// Render on page load
window.addEventListener('load', renderProjects);
