function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtAno')
        var res = document.getElementById('res')

        if(Number(fano.value).length == 0 || Number(fano.value) > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gen =''

            // craindo uma imagem dinâmicamente
            var img = document.createElement('img')
            //atribuindo um ID = 'foto'
            img.setAttribute('id', 'foto')

            if(fsex[0].checked){
                gen = 'Homem'

                if(idade>=0 && idade < 10 ){
                    //Criança
                    img.setAttribute('src', 'homem-bebe.png')
                } else if (idade<=21){
                    //jovem
                    img.setAttribute('src', 'homem-jovem.png')
                }else if(idade<=50){
                    //Adulto
                    img.setAttribute('src','homem-adulto.png')
                }else{
                    //Idoso
                    img.setAttribute('src','homem-idoso.png')
                }

            }else if (fsex[1].checked){
                gen = 'Mulher'

                if(idade>=0 && idade < 10 ){
                    //Criança
                    img.setAttribute('src', 'mulher-bebe.png')
                } else if (idade<=21){
                    //jovem
                    img.setAttribute('src', 'mulher-jovem.png')
                }else if(idade<=50){
                    //Adulto
                    img.setAttribute('src', 'mulher-adulta.png')
                }else{
                    //Idoso
                    img.setAttribute('src', 'mulher-idosa.png')
                    
                }
            }

            //alinhando res ao centro por JS
            res.style.textAlign = 'center'
            
            res.innerHTML = `Detectamos: ${gen} de ${idade} anos.`
            
            //Adicionando o elemento imagem     
            res.appendChild(img)
        }

}