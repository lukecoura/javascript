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
        var lista = document.createElement('option')
        lista.text = (`Valor ${num.value} adicionado.`)
        res.appendChild(lista)
    } else if (!isNumero(num.value)) {
        alert('[ERRO] Número não se encaixa entre 1 e 100.')
    } else if (inLista(num.value, vet)) {
        alert('[ERRO] Número já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    contas.innerHTML = ''
}

function finalizar() {
    contas = document.querySelector('div#contas')
    tot = vet.length
    soma = 0
    maior = vet[0]
    menor = vet[0]
    for (pos in vet) {
        soma += vet[pos]
        if (vet[pos] > maior) {
            maior = vet[pos]
        } else if (vet[pos] < menor) {
            menor = vet[pos]
        }
    }
    if (vet == 0) {
        alert('[ERRO] É necessário adicionar valores antes de finalizar.')
    } else {
        divisao = soma / tot
        contas.innerHTML = (`<p>Ao todo, foram adicionados ${tot} valores.</p>`)
        contas.innerHTML += (`<p>O maior valor digitado é ${maior}.</p>`)
        contas.innerHTML += (`<p>O menor valor digitado é ${menor}.</p>`)
        contas.innerHTML += (`<p>Ao todo, a soma de todos os valores é: ${soma}.</p>`)
        contas.innerHTML += (`<p>O resultado da divisão de todos os valores é: ${divisao}</p>`)
    }
}