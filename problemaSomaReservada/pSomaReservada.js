var n1= prompt();
var n2 = prompt();
function reverter(valor){
    var reverter="";
    for(var cont=valor.length-1; cont>=0;cont--){
        reverter+=valor.charAt(cont);
    }
    return reverter;
}
var rever1=(reverter(n1));
var rever2=(reverter(n2));
var rever3=(parseInt(rever1)+parseInt(rever2));
rever3= rever3.toString();
rever3=reverter(rever3)
console.log(rever3)
