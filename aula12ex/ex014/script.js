function carregar () {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha250.png'
        document.body.style.background = '#AEDFFD'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde250.png'
        document.body.style.background = '#F97E0C'
    } else {
        img.src = "imagens/noite250.png"
        document.body.style.background = '#3F5259'
    }
}