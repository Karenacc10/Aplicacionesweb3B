let suma = 0;

function sumarDigitos() {
    let numero = parseFloat(document.getElementById("numeroInput").value);

    if (!isNaN(numero)) {
        suma += numero;
        document.getElementById("resultado").textContent = "La suma total es: " + suma;
        document.getElementById("numeroInput").value = "";
    } else {
        document.getElementById("resultado").textContent = "Por favor, ingrese un dígito válido.";
    }
}
