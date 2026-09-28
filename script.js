function calcularFactorial() {
  let entrada;
  let numero;

  while (true) {
    entrada = prompt("Ingresa un número para calcular su factorial:");
    numero = Number(entrada);

    if (
      entrada !== null &&
      entrada.trim() !== "" &&
      !isNaN(numero) &&
      Number.isInteger(numero) &&
      numero >= 0
    ) {
      break;
    }

    alert("Error: Debes ingresar un número entero válido (mayor o igual a 0).");
  }

  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  console.log(`El factorial de ${numero} es: ${factorial}`);

  const resultadoDiv = document.getElementById("resultado");
  if (resultadoDiv) {
    resultadoDiv.textContent = `El factorial de ${numero} es: ${factorial}`;
  }
}

calcularFactorial();