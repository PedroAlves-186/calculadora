var numero1 = 0
var operador
var numero2 = 0



function calcular(numero1, operador, numero2) {
    switch (operador) {
        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "/": return numero1 / numero2
        case "%": return numero1 % numero2
    }
}

function setarNumeros(numero) {
    var texto = document.getElementById("Visor").innerText
    if (!operador) {
        numero1 = texto + numero
    }
    else {
        numero2 = numero2 + "" + numero
    }
    document.getElementById("Visor").innerHTML += numero
}

function setarOperadores(operador2) {
    if (!operador) {
        operador = operador2
    }
    else {
        setarResultado()
        operador = operador2
    }
    document.getElementById("Visor").innerHTML += operador2
}

function setarResultado() {
    var resultado
    if (operador) {
        resultado = calcular(parseFloat(numero1), operador,parseFloat(numero2))
    }
    document.getElementById("Visor").innerHTML = resultado
    operador = ""
    numero2 = 0
    numero1 = resultado
}
function limpar() {
    numero1 = 0
    numero2 = 0
    operador = ""
    document.getElementById("Visor").innerHTML = ''
}