//"use strict";
/* let Nota=["Do","Re","Mi","Fa","Sol","La","Si"]
console.log( Nota[1])
console.log("hola mundo desde arreglos")
alert( Nota[1])

fibo=[4]
fibo[0]=0
fibo[1]=1
if (){
    
} */
let salida=document.getElementById("salida")
let entrda0= document.getElementById("entrada0")
idEntrada0=0

entrada0.addEventListener("input", (evento) => {
    idEntrada0 = evento.target.value
    console.log(idEntrada0)
})
function funcionFibo(idEntrada0){
    let fibonacci =[0,1]
    if(idEntrada0==2){
        return fibonacci
    }else if(idEntrada0==1){
        return [0]
    }else{
        for (let p = 2; p < idEntrada0; p++) {
            fibonacci[p]= fibonacci[p-1]+fibonacci[p-2]
            console.log(p)            
        }
        return fibonacci
    }
                   
 }
 btnCalcular.addEventListener("click", () =>{ //cuando se presiona el boton se ejecutan las 
    let resultado= funcionFibo(idEntrada0)     //instrucciones dentro
    let hijo = document.createElement("h4")
    hijo.innerHTML = "los primeros "+ idEntrada0 +" numeros de la serie fibonacci son:"+ resultado + " " 
    salida.appendChild(hijo) 

})
 console.log(funcionFibo(idEntrada0))