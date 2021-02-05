function contar(){
   var inicio = document.querySelector('input#inicio')
   var fim = document.querySelector('input#fim')
   var passo = document.querySelector('input#passo')
   var res = document.querySelector('div#res')


  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      window.alert('Falta de dados !')
  } else{

    res.innerHTML='Contando: </br>'

    var start = Number(inicio.value)
    var end = Number(fim.value)
    var step = Number(passo.value)

    if(step <= 0){
        //Validando o encremento do "for"
        alert('Passo inválido! Considerando Passo = 1')
        step = 1
    }

    if(start < end){
        //Contagem Crescente
        for(var i = start; i <= end; i+= step){
            res.innerHTML += ` ${i} \u{1F449}`
        }
        
    }else{
        //Contagem Regressiva
        for (var i = start; i>=end; i-=step){
            res.innerHTML += ` ${i} \u{1F449}`
        }
    }
    
    res.innerHTML += ` \u{1F3C1}`
   
  }
} 