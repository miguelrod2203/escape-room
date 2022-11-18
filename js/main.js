

// declaraciones
// aqui vamos a declarar las variables constantes y de mas



// Query de elementos
// tods los llamados de los nodos

const nuestrasHabitaciones = document.querySelector('#nuestrasHabitaciones')


// Funciones
// todas las funciones que necesito declarar

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


/*

*/


// EventListener
// 





// ejecuciones
// los llamados a las funciones

renderizarNuestrasHabitaciones();















