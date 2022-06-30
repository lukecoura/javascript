function tabuada() {
    var numero = document.querySelector('input#txt1')
    var tab = document.querySelector('select#select')
    
    if (numero.value.length == 0) {
        alert('Por favor, adicione um número válido!')
    } else {
        var num = Number(numero.value)
        for (contador = 1; contador <= 10; contador = contador + 1) {
            var opt = document.createElement('option')
            opt.text = (contador)
        }
    }
}