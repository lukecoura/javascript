function gerar() {
    var resul = document.querySelector('div#tabela')
    var n1 = document.querySelector('input#numero')
    var numero = Number(n1.value)
    resul.innerHTML = (numero + numero * 5)
}