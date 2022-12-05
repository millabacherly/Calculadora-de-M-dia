let inputPrimeiraNota = document.querySelector("#primeira_Nota");

let inputSegundaNota = document.querySelector("#segunda_Nota");

let inputTerceiraNota = document.querySelector("#terceira_Nota");

let inputQuartaNota = document.querySelector("#quarta_Nota");

document.getElementById("calculo").addEventListener("click", validarNota);

function validarNota() {
  let notaFinal =
    (parseFloat(inputPrimeiraNota.value) +
      parseFloat(inputSegundaNota.value) +
      parseFloat(inputTerceiraNota.value) +
      parseFloat(inputQuartaNota.value)) /
    4;
  document.getElementById("resultado").innerHTML =
    "A média de notas é " + notaFinal.toFixed(1);
  if (notaFinal > "6") {
    alert("Parabéns, você foi aprovade!");
  }
}
