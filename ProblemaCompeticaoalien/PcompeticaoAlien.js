var n= parseInt(prompt())
var string= prompt();
var somaString=""
var contar=0;
string+=" ";
for(cont=0;cont<string.length;cont++){
    if(string.charAt(cont)<'a' || string.charAt(cont)>'z'){
        if(somaString.length==n){
            contar++
        }
        somaString=""
    }else{
        somaString+=string.charAt(cont)
    }
}
console.log(contar)