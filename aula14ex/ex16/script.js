var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')
var resul = document.querySelector('div#resul')

function contar() {
    var inicio02 = Number(inicio.value)
    var fim02 = Number(fim.value)
    var passo02 = Number(passo.value)
    resul.innerHTML = ('Contando:<br>')
    if (inicio02 == ('')) {
        resul.innerHTML('Impossível contar!')
    }

    if (passo02 == 0) {
        alert('Passo inválido! Considerando PASSO: 1')
        passo02++
    }
    while (inicio02 <= fim02) {
        resul.innerHTML += (`${inicio02} 👉 `)
        inicio02 += passo02
    }
    resul.innerHTML += ('🏁')
}