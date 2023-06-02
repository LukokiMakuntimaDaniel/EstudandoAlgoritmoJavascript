var n= parseInt(prompt());
var cartoes= prompt().split(" ");
function casais(ns,cartoess){
    if(cartoes.length==n){
        cont=0;
        while(cont<cartoes.length){
            var primeiro= parseInt(cartoes[cont])
            var segundo=parseInt(cartoes[cont+1])
            if((primeiro%2==0 && segundo%2==0) || (primeiro%2!=0 && segundo%2!=0)){
                return "N"
            }
            cont+=2
        }
        return "S"
    }
}

console.log(casais(n,cartoes))
