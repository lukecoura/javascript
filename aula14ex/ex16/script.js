var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')

function contar() {
    var inicio02 = Number(inicio.value)
    var fim02 = Number(fim.value)
    var passo02 = Number(passo.value)
    var resul = document.querySelector('div#resul')
    while (inicio02 <= fim02) {
        resul.innerHTML += (`teste ${inicio02}`)
        inicio02 += passo02
    }
}