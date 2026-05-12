const desktop = document.querySelector('.desktop');

if (desktop) {
  let box = null, startX, startY;

  desktop.addEventListener('mousedown', (e) => {
    startX = e.offsetX;
    startY = e.offsetY;
    box = document.createElement('div');
    box.className = 'select-box';
    box.style.left = startX + 'px';
    box.style.top = startY + 'px';
    desktop.appendChild(box);
  });

  desktop.addEventListener('mousemove', (e) => {
    if (!box) return;
    box.style.width = Math.abs(e.offsetX - startX) + 'px';
    box.style.height = Math.abs(e.offsetY - startY) + 'px';
    box.style.left = Math.min(e.offsetX, startX) + 'px';
    box.style.top = Math.min(e.offsetY, startY) + 'px';
  });

  desktop.addEventListener('mouseup', () => {
    if (box) box.remove();
    box = null;
  });
}