let numeroFlor = document.getElementById("numeroUsuario")
let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let numero3 = document.getElementById("numero3")
let numero4 = document.getElementById("numero4")
let btnCalcular = document.getElementById("btnCalcular")
let salidaDescuento = document.getElementById("salidaDescuento")
let entrada = 0
let n1 = 0
let n2 = 0
let n3 = 0
let n4 = 0

/* if (numero1==null){numero1==6}
if (numero2== null){numero2==7}
if (numero3== null){numero3==5}
if (numero4== null){numero4==3} */

/* ############################################# */
numero1.addEventListener("input", (evento) => {
    console.log("evento disparo1")
    n1 = evento.target.value
    console.log(n1)
})

numero2.addEventListener("input", (evento) => {
    n2 = evento.target.value
    console.log(n2)
})

numero3.addEventListener("input", (evento) => {
    n3 = evento.target.value
    console.log(n3)
})
numero4.addEventListener("input", (evento) => {
    n4 = evento.target.value
    console.log(n4)
})

/* ############################################# */

numeroFlor.addEventListener("input", (evento) => {
    entrada = evento.target.value
    console.log(entrada)
})


function entradaDatos( entradaUsuario){
    console.log(numero1, n1,n2,n3,n4,entrada,entradaUsuario)
if ((entradaUsuario % n1/* 6 */ == 0 && entradaUsuario % n2 /* 7 */ == 0) && (entradaUsuario % n3/* 5 */ == 0 && entradaUsuario %  n4/* 3 */ == 0)) {
    console.log("violeta")
    return "violeta"

} else if (entradaUsuario % numero3/* 5 */ == 0 && entradaUsuario %  numero4 /* 3 */ == 0) {
    console.log("margarita")
    return "margarita"
} else if (entradaUsuario % numero1 /* 6 */ == 0 && entradaUsuario %  numero2/* 7 */ == 0) {
    console.log(entradaDatos("Rosa"))
    return "Rosa"
} else {
    return "El numero no es valido"
}
}

btnCalcular.addEventListener("click", () =>{
    let resultado= entradaDatos(entrada)
    let hijo = document.createElement("h4")
    hijo.innerHTML = resultado + " " + resultado
    salidaDescuento.appendChild(hijo) 

})

/* console.log(entradaDatos(20))
 */

