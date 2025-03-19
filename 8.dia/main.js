let entradaUser = document.getElementById("numeroUsuario");
let salida = document.getElementById("salidaNumeros");
let btnCalcular = document.getElementById("btnCalcular");


entradaUser.addEventListener("input", (evento) => {//Se agrega un manejador de eventos al input del usuario. Este escucha cuando el usuario escribe en el campo.
    limit = evento.target.value; // Convertir a número,Obtiene el valor actual que el usuario escribe en el input.
    console.log(limit);
});

function fizzBuzz(limit) {
    salida.innerHTML = ""; // Limpiar el contenido previo en el contenedor

    for (let i = 1; i <= limit; i++) {
        let resultado;
        if (i % 3 === 0 && i % 5 === 0) {
            resultado = "FizzBuzz";
        } else if (i % 3 === 0) {
            resultado = "Fizz";
        } else if (i % 5 === 0) {
            resultado = "Buzz";
        } else {
            resultado = i;
        }

        // Crear un elemento para mostrar el resultado en el HTML
        let hijo = document.createElement("h4");
        hijo.textContent = resultado;
        salida.appendChild(hijo);
    }
}

btnCalcular.addEventListener("click", () => {
    salida.innerHTML = ""; 
    fizzBuzz(limit); // Llamar la función con el límite especificado
});
