document.getElementById('boton-club').addEventListener('click', iniciarSimulador);

function iniciarSimulador() {
  alert("Estás por intentar entrar al boliche...");
  const nombre = prompt("¿Cómo te llamás?");
  const edad = parseInt(prompt("¿Cuántos años tenés?"));

  if (!nombre || isNaN(edad)) {
    alert("Datos inválidos. No podés entrar.");
    console.log("Entrada cancelada por datos inválidos.");
    return;
  }

  console.log(`Usuario: ${nombre}, Edad: ${edad}`);

  if (edad < 18) {
    alert("😬 Sos menor de edad. ¡No podés pasar!");
    return;
  }
}