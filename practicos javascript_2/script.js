function encontrarNumeroMasGrande() {
  let listaNumeros = document.getElementById("numeroLista").value;
  let numeros = listaNumeros.split(',').map(Number);

  if (numeros.length === 0 || listaNumeros.trim() === "") {
      document.getElementById("resultado").textContent = "Por favor, ingrese una lista de números válida.";
      return;
  }

  let numeroMaximo = Math.max(...numeros);
  document.getElementById("resultado").textContent = "El número más grande es: " + numeroMaximo;
}
