var num = document.querySelector('input#num')
var info = document.querySelector('select#info')
var vet = []

function adicionar() {
    if (0 == num.value.length) {
        alert('[ERRO] É necessário adiconar um valor.')
    } else if (Number(num.value) <= 0 || Number(num.value) > 100) {
        alert('[ERRO] Valor incompatível. Por favor, digite um número válido.')
    } else {
        var numero = Number(num.value)
        var item = document.createElement('option')
        item.text = (`Valor ${numero} adicionado.`)
        info.appendChild(item)
        vet.push(numero)
    }
}

function finalizar() {
    var res = document.querySelector('div#res')
    var tot = vet.length
    var maior = vet[0]
    var menor = vet[0]
    var soma = 0
    var media = 0
    for (var pos in vet) {
        soma += vet[pos]
        if (vet[pos] > maior) {
            maior = vet[pos]
        } else if (vet[pos] < menor) {
            menor = vet[pos]
        }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += (`<p>Ao todo, foram adicionados ${vet.length} valores.</p>`)
    res.innerHTML += (`<p>O maior valor informado foi ${maior}.</p>`)
    res.innerHTML += (`O menor valor informado foi ${menor}.`)
    res.innerHTML += (`<p>Somando todos os valores, o resultado é: ${soma}.</p>`)
    res.innerHTML += (`<p>A média total dos valores adicionados é: ${media}.</p>`)
}