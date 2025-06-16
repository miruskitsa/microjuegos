window.addEventListener('DOMContentLoaded', () => {
  let contador = 0;
  const boton = document.getElementById('boton-clic');
  const texto = document.getElementById('contador');

  boton.addEventListener('click', () => {
    contador++;
    texto.textContent = `Clics: ${contador}`;
  });
});
