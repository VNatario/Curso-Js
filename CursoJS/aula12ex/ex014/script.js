function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()   


    if(hora >= 0 && hora < 12 ){
        msg.innerHTML= `Agora são ${hora}h. Bom Dia`
        foto.src = 'manha.png'
        document.body.style.background = '#f8c38f'

    } else if(hora >= 12 && hora <= 18){    
        msg.innerHTML= `Agora são${hora}h. Boa tarde`
        foto.src = 'tarde.png'
        document.body.style.background = '#3c6980'

    }else{
        msg.innerHTML=`Agora são ${hora}h. Boa Noite`
        foto.src = 'noite.png'
        document.body.style.background = '#28383e'
    }
}