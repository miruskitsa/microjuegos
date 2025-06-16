document.getElementById('boton-club').addEventListener('click', iniciarSimulador);

function iniciarSimulador() {
  alert("Estás por intentar entrar al boliche...");
  const nombre = prompt("¿Cómo te llamás?");
  const edad = parseInt(prompt("¿Cuántos años tenés?"));

  if (!nombre || isNaN(edad)) {
    alert("Datos inválidos. No podés entrar. Al pato no se le miente eh...");
    console.log("Entrada cancelada por datos inválidos.");
    return;
  }

  console.log(`Usuario: ${nombre}, Edad: ${edad}`);

  if (edad < 18) {
    alert("😬 Sos menor de edad. ¡No pasas y te vas a ver pocoyo!");
    return;
  }
}
const ropa = prompt("¿Qué estás usando para salir?");
  const permitidas = ["camisa", "remera", "vestido", "pantalón", "jean", "tanga", "short"];
  let aprobado = false;

  for (let prenda of permitidas) {
    if (ropa.toLowerCase().includes(prenda)) {
      aprobado = true;
      break;
    }
  }

  if (!aprobado) {
    alert( "El patovica no te deja pasar con esa ropa... cambiate y proba de vuelta");
    return;
  } 
    const entradaConfirmada = confirm("¿Pagás la entrada de $8500?");
  if (!entradaConfirmada) {
    alert("💸 Raton... el patovica no te deja ser rata");
    return;
  }
  