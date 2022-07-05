var tab = document.querySelector('input#tabuada')
var res = document.querySelector('select#seltab')

function calcular() {
    if (tab.value.length <= 0) {
        alert('[ERRO] Por favor, digite um número para que a tabuada seja somada.')
    } else {
        tabuada = Number(tab.value)
        res.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text += (`${tabuada} x ${c} = ${tabuada*c}`)
            res.appendChild(item)
    }
    }
}