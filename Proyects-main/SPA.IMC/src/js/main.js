function calculo() {
  // Limpiar todos los colores
  let ids = ["bp", "ds", "dm", "da", "n", "sp", "o"];
  ids.forEach(id => {
    document.getElementById(id).style.backgroundColor = "white";
  });
  

  let alt = parseFloat(document.getElementById("m").value);
  let peso = parseFloat(document.getElementById("kg").value);

  if (isNaN(alt) || isNaN(peso) || alt <= 0) {
    alert("Por favor, ingresa valores válidos.");
    return;
  }

  let imc = peso / (alt * alt);
  document.getElementById("imc").innerText = imc.toFixed(2);

  if (imc < 16.00) {
    document.getElementById("ds").style.backgroundColor = "red";
  } else if (imc >= 16.00 && imc <= 16.99) {
    document.getElementById("dm").style.backgroundColor = "red";
  } else if (imc >= 17.00 && imc <= 18.49) {
    document.getElementById("da").style.backgroundColor = "red";
  } else if (imc >= 18.50 && imc <= 24.99) {
    document.getElementById("n").style.backgroundColor = "red";
  } else if (imc >= 25.00 && imc <= 29.99) {
    document.getElementById("sp").style.backgroundColor = "red";
  } else if (imc >= 30.00) {
    document.getElementById("o").style.backgroundColor = "red";
  }
}
