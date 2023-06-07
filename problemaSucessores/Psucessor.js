var numeros=prompt().split("\r\n")
if(numeros[numeros.length-1]==0){
    for(cont=0;cont<numeros.length -1 ; cont++){
        console.log(parseInt(numeros[cont])+1)
    }
}