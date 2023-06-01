var n= prompt("Digite o numero");
function isGemia(n){
    for(let a=0;a<n.length;a++){
        let primeiraMetade= n.substring(0,a+1);
        let segundaParte= n.substring(a+1,n.length);
        let soma=parseInt(primeiraMetade)+parseInt(segundaParte)
        if(soma*soma == parseInt(n)){
            return 1;
        }
    }
    return 0;
}
console.log(isGemia(n));
