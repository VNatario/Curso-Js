let num = [2,9,4,6]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(6)
if(pos == -1){
    console.log('O valor 6 não foi encontrado !')
}else{
    console.log(`O valor 6 está na posição ${pos}`)
}