let btnJoke = document.getElementById("btnJoke")
let joke = document.getElementById("joke")

btnJoke.addEventListener("click", getJoke) //Esta es una funcion que se dispara con el click ejecutando la funcion asincrona  getjoke

async function getJoke(){
    try {
        const res =await fetch ("https://icanhazdadjoke.com/",{
            headers:{
                "Accept": "application/json"
    
            }
        })
        const data = await res.json()
        console.log(res)
        console.log (data)
        let chiste = document.createElement("h4");
        chiste.textContent = data.joke;
        joke.appendChild(chiste);

    } catch (error) {
        console.error("Error in call")
    }
    
    
}
