var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')

function contar() {
    var inicio02 = Number(inicio.value)
    var fim02 = Number(fim.value)
    var passo02 = Number(passo.value)
    var resul = document.querySelector('div#resul')
    for (var c = 1; c <= 8; c++) {
        resul.innerHTML = (c)
    }
}