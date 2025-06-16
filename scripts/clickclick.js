window.addEventListener('DOMContentLoaded', () => {
  let contador = 0;
  const historial = []; 
  const boton = document.getElementById('boton-clic');
  const texto = document.getElementById('contador');

  boton.addEventListener('click', () => {
    if (contador >= 100) {
      const reiniciar = confirm("¿Pensaste que era infinito? Pues no. Mejor volve a empezar.");
      if (reiniciar) {
        console.log("Historial de clics:");
        console.log(historial); 
        contador = 0;
        historial.length = 0; 
        texto.textContent = `Clics: ${contador}`;
        return;
      } else {
        boton.disabled = true;
        return;
      }
    }

    contador++;
    texto.textContent = `Clics: ${contador}`;
    historial.push(`Clic número ${contador}`); 
  });
});

