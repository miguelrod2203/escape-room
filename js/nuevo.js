const updateData = (e) => {
    let idHabitacion = localStorage.getItem("habitacionElegida");
    idHabitacion =JSON.parse(idHabitacion);

    let habitacionElegida = todasHabitaciones.find((habitacion) => habitacion.id == idHabitacion)
    let imagenes = document.querySelector('.imagenes')
    let titulo = document.querySelector('.titulo')
    let tematica = document.querySelector('.tematica')
    let duracion = document.querySelector('.duracion')
    let numJugadores = document.querySelector('.numJugadores')
    let dificultad = document.querySelector('.dificultad')
    let descripcion = document.querySelector('.descripcion')

    console.log(habitacionElegida.img)

    imagenes.textContent = habitacionElegida.img
    titulo.textContent = habitacionElegida.titulo
    tematica.textContent = habitacionElegida.tematica
    duracion.textContent = habitacionElegida.duracion
    numJugadores.textContent = habitacionElegida.numJugadores
    dificultad.textContent = habitacionElegida.dificultad
    descripcion.textContent = habitacionElegida.descripcion
}
updateData();
