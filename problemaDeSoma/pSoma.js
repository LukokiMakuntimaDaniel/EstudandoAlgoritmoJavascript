var numeros=prompt("Copia todos os dados de entrada").split("\r\n")
var somaD=somaHp=somaOimP=0;
var i=1;
if(numeros[0]==numeros.length-1){
    for(cont=1;cont<numeros.length;cont++){
        somaD+=parseInt(numeros[cont]);
        if(parseInt(numeros[cont])%2==0){
            somaHp+=parseInt(numeros[cont])
        }else{
            somaOimP+=parseInt(numeros[cont])
        }
    }
}
console.log(somaD)
console.log(somaHp.toString(16))
console.log(somaOimP.toString(8))