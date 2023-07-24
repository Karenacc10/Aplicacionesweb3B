function generarSecuenciaFibonacci() {
    let numero = parseInt(document.getElementById("numeroInput").value);

    if (!isNaN(numero)) {
        let secuencia = [];
        let num1 = 0;
        let num2 = 1;

        while (num1 <= numero) {
            secuencia.push(num1);
            let siguiente = num1 + num2;
            num1 = num2;
            num2 = siguiente;
        }

        document.getElementById("resultado").textContent = "Secuencia de Fibonacci: " + secuencia.join(", ");
    } else {
        document.getElementById("resultado").textContent = "Por favor, ingrese un número válido.";
    }
}
