var numero = parseInt(prompt("digite o numero em hexaDecimal"),16)
var letra="";
for(cont=numero.toString().length-1;cont>=0;cont--){
    letra+=numero.toString().charAt(cont)
}
if(numero.toString()==letra){
    console.log("S")
}else{
    console.log("N")
}