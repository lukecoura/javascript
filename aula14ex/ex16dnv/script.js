var ini = document.querySelector('input#txti')
var fi = document.querySelector('input#txtf')
var pas = document.querySelector('input#txtp')
var res = document.querySelector('div#res')

function contar() {
    res.innerHTML = ('Contando: <br>')
    inicio = Number(ini.value)
    fim = Number(fi.value)
    passo = Number(pas.value)

    if (ini.value.length <= 0 || fi.value.length <= 0 || pas.value.length <= 0) {
        alert('[ERRO] Existem campos sem informação adicionada.')
    } 

    if (passo <= 0) {
        alert('[ERRO] Impossível passar 0. Acrescentando 1')
        passo++
    }

    if (inicio < fim) {
        for (c = inicio; c <= fim; c += passo) {
            res.innerHTML += (`${c} 👉 `)
        }
    } else {
        for (c = inicio; c >= fim; c -= passo) {
            res.innerHTML += (`${c} 👉 `)
        }
    }
    res.innerHTML += ('🏁')
}