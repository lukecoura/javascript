function contar() {
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var passo = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ('Impossível contar!')
        alert('ERRO - Faltam dados!')
    } else {
        res.innerHTML = ('Contando: <br>')
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Acrescentando 1')
            p++
        }

        if (i < f) { //contagem crescente
        for (var c = i; c <= f; c += p) {
            res.innerHTML += (`${c} 👉 `)
        }
        } else { //contagem decrescente
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += (`${c} 👉 `)
        }
        }
        res.innerHTML += ('🏁')
    }
}