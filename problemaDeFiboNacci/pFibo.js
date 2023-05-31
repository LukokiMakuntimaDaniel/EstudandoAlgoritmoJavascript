var numero = parseInt(prompt("digite um valor"))
var a=0,b=1;
var c=0;
if(numero==1){
    console.log(a)
}else{
    console.log(a)
    console.log(b)
    c=a+b
    for(cont=2;cont<numero;cont++){
        console.log(c)
        a=b
        b=c
        c=a+b
    }
}
