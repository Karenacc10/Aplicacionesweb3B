function generarAleatorio() {
    let minimo = parseFloat(document.getElementById("minimo").value);
    let maximo = parseFloat(document.getElementById("maximo").value);

    if (!isNaN(minimo) && !isNaN(maximo)) {
        if (minimo >= maximo) {
            document.getElementById("resultado").textContent = "El mínimo debe ser menor que el máximo.";
        } else {
            let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
            document.getElementById("resultado").textContent = "El número aleatorio generado es: " + numeroAleatorio;
        }
    } else {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores numéricos válidos.";
    }
}
