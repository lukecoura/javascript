var num = document.querySelector('input#num')
var res = document.querySelector('select#sel')
var vet = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, vet)) {
        vet.push(Number(num.value))
    } else {
        alert('erro')
    }
}