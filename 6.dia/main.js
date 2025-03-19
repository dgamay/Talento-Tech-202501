
//con este bloque definimos la variables de elementos en html
let numeroFlor = document.getElementById("numeroUsuario")
let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2") 
let numero3 = document.getElementById("numero3")
let numero4 = document.getElementById("numero4")
let btnCalcular = document.getElementById("btnCalcular")
let salidaDescuento = document.getElementById("salidaDescuento")

/* en este bloque se crea las variables para guardar los datos traidos del html */
/* ############################################################# */
let entrada = 0
let n1 = 6
let n2 = 7
let n3 = 3
let n4 = 5

/* ############################################# */
/* Valida los datos escritos en el html y los guarda en cada una de las variables n1,n2,n3,n4 */
numero1.addEventListener("input", (evento) => {
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
if ((entradaUsuario % n1/* 6 */ == 0 && entradaUsuario % n2 /* 7 */ == 0) && (entradaUsuario % n3/* 5 */ == 0 && entradaUsuario %  n4/* 3 */ == 0)) {
    return "violeta"
} else if (entradaUsuario % n3/* 5 */ == 0 && entradaUsuario %  n4 /* 3 */ == 0) {
    return "margarita"
} else if (entradaUsuario % n1 /* 6 */ == 0 && entradaUsuario %  n2/* 7 */ == 0) {
    return "Rosa"
} else {
    return "El numero no es valido"
}
}

btnCalcular.addEventListener("click", () =>{ //cuando se presiona el boton se ejecutan las 
    let resultado= entradaDatos(entrada)     //instrucciones dentro
    let hijo = document.createElement("h4")
    hijo.innerHTML = resultado + " " 
    salidaDescuento.appendChild(hijo) 

})

/* console.log(entradaDatos(20))
 */

