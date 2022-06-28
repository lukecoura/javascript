function gerar() {
    var resul = document.querySelector('div#tabela')
    var n1 = document.querySelector('input#numero')
    var numero = Number(n1.value)
    resul.innerHTML = (`${numero} x 1 = ${numero * 1}<br>`)
    resul.innerHTML += (`${numero} x 2 = ${numero * 2}<br>`)
    resul.innerHTML += (`${numero} x 3 = ${numero * 3}<br>`)
    resul.innerHTML += (`${numero} x 4 = ${numero * 4}<br>`)
    resul.innerHTML += (`${numero} x 5 = ${numero * 5}<br>`)
    resul.innerHTML += (`${numero} x 6 = ${numero * 6}<br>`)
    resul.innerHTML += (`${numero} x 7 = ${numero * 7}<br>`)
    resul.innerHTML += (`${numero} x 8 = ${numero * 8}<br>`)
    resul.innerHTML += (`${numero} x 9 = ${numero * 9}<br>`)
    resul.innerHTML += (`${numero} x 10 = ${numero * 10}`)

}