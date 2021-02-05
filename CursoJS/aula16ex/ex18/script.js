let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#numlista')
let res = document.querySelector('div#res')
let valores = []

function numValido(n){
    if(Number(n.value)>=1 && Number(n.value)<=100){
        return true
    }else{
        return false
    }
}

function numLista(n,l){
    if(l.indexOf(Number(n.value))!=-1){
        return true
    }else{
        return false
    }
}

function add(){
    if(numValido(num) && !numLista(num, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text =`Valor ${num.value} adicionado.`
        lista.appendChild(item)
        
        res.innerHTML=''
    }else{
        alert('Digite um número valido que não esteja na lista')
    }
    num.value = ''
    num.focus() //Mantem o cursor focado no input txtnum
}

function finalizar(){
    if(valores.length==0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let min = Math.min(...valores)
        let max = Math.max.apply(null,valores)
        let soma = 0
        let media = 0 

        for (i in valores){
            soma+=valores[i]
        }

        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} valores</p>`
        res.innerHTML += `<p>Menor valor cadastrado: ${min}</p>`
        res.innerHTML += `<p>Maior valor cadastrado: ${max}</p>`
        res.innerHTML += `<p>A soma dos valores cadastrados: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores cadastrados: ${media}</p>`
    }
}