

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

 







renderizarNuestrasHabitaciones();

