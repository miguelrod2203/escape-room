

// declaraciones
// aqui vamos a declarar las variables constantes y de mas


// Query de elementos
// tods los llamados de los nodos


// Funciones
// todas las funciones que necesito declarar


// EventListener
//


// ejecuciones
// los llamados a las funciones siempre al final del archivo

//-----------------------------------------------------------------------

// funcion para mostrar las habitaciones

const nuestrasHabitaciones = document.querySelector('#nuestrasHabitaciones')

const detallesHabitacion = (e) => {
    const idHabitacion = e.target.closest('.rooms').getAttribute('data-id')

    const idJason = JSON.stringify(idHabitacion);
    localStorage.setItem("habitacionElegida", idJason);

}

const renderizarNuestrasHabitaciones = ()=> {
    todasHabitaciones.forEach((habitacion) => {
        const cardHabitaciones = document.createElement('div')
        cardHabitaciones.classList.add('rooms')
        cardHabitaciones.setAttribute('data-id', habitacion.id)
        cardHabitaciones.innerHTML = `                    
            <div class="room-texto">
                <a href="./html/habitaciones.html"><h3>${habitacion.titulo}</h3></a>               
            </div>
            <img src="${habitacion.img}" alt="${habitacion.tematica}" title="${habitacion.tematica}">
        `
        nuestrasHabitaciones.append(cardHabitaciones)
    })
    const verMasHabitacion = document.querySelectorAll('.rooms')
    verMasHabitacion.forEach((verMas) => {
        verMas.addEventListener('click', detallesHabitacion)
    })
}



// funcion para usar scroll suave desde el header

window.onload = () =>{
    let links = document.querySelectorAll('.link')

    let primero = links[0]
    primero.addEventListener('click', () => {
        scrollSuave('#primero', 500, 81)
    })

    let segundo = links[1]
    segundo.addEventListener('click', () => {
        scrollSuave('#segundo', 500, 81)
    })

    let tercero = links[2]
    tercero.addEventListener('click', () => {
        scrollSuave('#tercero', 500, 81)
    })

    let cuarto = links[3]
    cuarto.addEventListener('click', () => {
        scrollSuave('#cuarto', 500, 81)
    })

    let quinto = links[4]
    quinto.addEventListener('click', () => {
        scrollSuave('#quinto', 500, 81)
    })
}

const scrollSuave =(objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null

    const animacion = tiempoAhora => {
        if (tiempoInicial === null) tiempoInicial = tiempoAhora
        let tiempoPasado = tiempoAhora - tiempoInicial
        let auxAnimacion = easeInOutQuard(tiempoPasado, posInicial, elemPos, duracion)
        window.scrollTo(0, auxAnimacion)
        if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
}

const easeInOutQuard = (t, b, c, d) => {
    t /= d/2;
    if (t < 1) return c/2*t*t +b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
}

// validacion de formulario de seccion de contacto

const nombre = document.getElementById('nombreId');
const correo = document.getElementById('correoId');
const asunto = document.getElementById('asuntoId');
const mensaje = document.getElementById('mensajeId');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

    if(nombre.value.length <3){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }

    if(!regexEmail.test(correo.value)){
        warnings += `El correo no es valido <br>`
        entrar = true
    }

    if(asunto.value === ""){
        warnings += `Debe indica el asunto <br>`
        entrar = true
    }

    if(mensaje.value.length <8){
        warnings += `El mensaje es muy corto <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }
})

// https://www.youtube.com/watch?v=36S19D6kZkc




renderizarNuestrasHabitaciones();

