let valores = [8,3,4,5,2,7]

console.log(valores)
/*
for(let i = 0; i < valores.length; i++){
    console.log(valores[i]) 

}
*/

for(let pos in valores){
    console.log(valores[pos])
}
//Para cada posição(pos) em valores(vetor), exiba(console.log) valores[pos]