var n = parseInt(prompt("Digite um valor"))
function ePrimo(k){
    var qdiv=0;
        for(var a=1;a<=k;a++){
            if(k%a==0){
                qdiv++;
            }
        }
        if(qdiv==2){
            return true;
        }
            return false
        
}
sair=false
for(a=2;a<n/2;a++){
    if(ePrimo(a) && ePrimo(n-a)){
        console.log(a)
        console.log(n-a)
        break;
    }
}
   

