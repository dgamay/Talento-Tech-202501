/* alert("hola mundo");
let suma
suma = 3 + 5
console.log("Esta es la suma de 3+5" + suma)
let resta
console.log(resta)

console.log(3 + 5); */

/* numero = prompt( "por favor ingresa un numero")
if (numero%2==0) {
    alert("el numero "+ numero +" es par")
    console.log("el numero "+ numero +" es par")
}else{
    alert("el numero "+ numero +" es impar")
    console.log("el numero "+ numero +" es impar")
} */


/* if (numero%5==0 & mumero%3==0) {
    alert("Mascota")
    
}if (numero%6==0 & mumero%7 ==0) {
    alert("rosa")
}if (numero%5 & mumero%3) {
    alert("Mascota")
} */

/* DEFINICION DE LAS PRIMERAS VARIABLES */

let entradaUsuarioPar =document.getElementById("entradaUsuarioPar") //Toma
let btnPar = document.getElementById("btnPar")
let salidaPar = document.getElementById("salidaPar")
let numeroEjercicioEsPar = 0


/* ETSE BLOQUE TOMA EL VALOR DEL NUMERO INGRESADO AL INPUT EN EL HTML*/

entradaUsuarioPar.addEventListener("input",(evento)=>{
    numeroEjercicioEsPar = evento.target.value
    console.log(numeroEjercicioEsPar)
})

function esPar(entradaFuncion  ) {
    if (entradaFuncion  % 2 == 0) {
        return "es par"
    }else{
        return " no es par"  
    }
}

btnPar.addEventListener("click",()=>{
    let resultado= esPar(numeroEjercicioEsPar)
    let hijo = document.createElement("h4")
    hijo.innerHTML = numeroEjercicioEsPar + " " + resultado
    salidaPar.appendChild(hijo)
})
