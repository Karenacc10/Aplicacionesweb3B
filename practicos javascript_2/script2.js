function validarPalindromo() {
    let palabraOriginal = document.getElementById("inputPalabra").value;
    let palabraLimpia = palabraOriginal.replace(/\s/g, "").toLowerCase();
    let palabraInvertida = invertirPalabra(palabraLimpia);

    if (palabraLimpia === palabraInvertida) {
        document.getElementById("resultado").textContent = "Es un palíndromo.";
    } else {
        document.getElementById("resultado").textContent = "No es un palíndromo.";
    }
}

function invertirPalabra(palabra) {
    return palabra.split("").reverse().join("");
}
