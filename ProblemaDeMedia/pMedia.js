var numeros=prompt("Copia todos os dados de entrada").split("\r\n")
var qtd=0,soma=0
if(numeros[0]==numeros.length-1){
    for(cont=1;cont<numeros.length;cont++){
        var vs=parseInt(numeros[cont]);
        if(vs>=-1000 && vs<=1000){
            soma+=vs;
            qtd++;
        }
    }
}
if(qtd!=0){
    console.log((soma/qtd).toFixed(1))
}
