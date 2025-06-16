window.addEventListener('DOMContentLoaded', () => {
  let contador = 0;
  const boton = document.getElementById('boton-clic');
  const texto = document.getElementById('contador');

  boton.addEventListener('click', () => {
    if (contador >= 100) {
      const reiniciar = confirm("¿Pensaste que era infinito? Pues no. Mejor empeza de vuelta");
      if (reiniciar) {
        contador = 0;
        texto.textContent = `Clics: ${contador}`;
        return;
      } else {
        boton.disabled = true;
        return;
      }
    }

    contador++;
    texto.textContent = `Clics: ${contador}`;
  });
});

