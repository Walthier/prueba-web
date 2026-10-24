// Script interactivo para el Portafolio y páginas de prueba
console.log('¡Proyecto Vite cargado exitosamente!');

document.addEventListener('DOMContentLoaded', () => {
  // Manejo de contador interactivo si existe en la página
  const countDisplay = document.getElementById('count-display');
  const btnIncrement = document.getElementById('btn-increment');
  const btnReset = document.getElementById('btn-reset');

  let count = 0;

  if (btnIncrement && countDisplay) {
    btnIncrement.addEventListener('click', () => {
      count++;
      countDisplay.textContent = count;
      countDisplay.style.transform = 'scale(1.15)';
      setTimeout(() => {
        countDisplay.style.transform = 'scale(1)';
      }, 150);
    });
  }

  if (btnReset && countDisplay) {
    btnReset.addEventListener('click', () => {
      count = 0;
      countDisplay.textContent = count;
    });
  }

  // Actualizar año actual en footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
