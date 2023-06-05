var numeros=prompt().split("\r\n")
function quadradoPerfeito(valor){
    for(cont=1;cont<valor;cont++){
        if(valor%cont==0 && cont*cont==valor){
            return true
        }
    }
    return false;
}
var qtd=0
for(contar=0;contar<numeros.length-1;contar++){
    if(quadradoPerfeito(numeros[contar])){
        qtd++;
    }
}
console.log(qtd)