// datos de la habitacion

class Habitacion {
    constructor (id, titulo, tematica, img, dificultad, duracion, numJugadores, descripcion ) {
        this.id = id;
        this.titulo = titulo;
        this.tematica = tematica;
        this.img = img;
        this.dificultad = dificultad;
        this.duracion = duracion;
        this.numJugadores = numJugadores;
        this.descripcion = descripcion;
    }
}

const habitacion1 = new Habitacion ("01", "Bajo presion", "Submarino", "/imagenes/room-submarino.jpg","8/10", "60 min", "2 a 7 Personas", "Un espia aleman y un submarino con poco oxigeno... puedes escapar para contarlo?");
const habitacion2 = new Habitacion ("02", "La cabaña embrujada", "Cabaña", "/imagenes/room-casa-embrujada.png", "9/10", "60 min", "2 a 7 Personas", "Unas vacaciones de infarto, alquilaste una cabaña, con tus amigos y maldicion incluida... ¿podran volver a tener paz?");
const habitacion3 = new Habitacion ("03", "El minero", "Mina", "/imagenes/room-minero.jpg", "9/10", "60 min", "2 a 7 Personas", "Atrapado al fondo de una mina... ¿puedes encontrar la forma de escapar?");
const habitacion4 = new Habitacion ("04", "El tren", "Tren", "/imagenes/room-tren.jpg", "7/10", "60 min", "2 a 7 Personas", "Un crimen y seis sospechosos a bordo... ¿puedes identificar al culpable antes de llegar a la estacion");
const habitacion5 = new Habitacion ("05", "Antidoto", "Laboratorio", "/imagenes/room-laboratorio.jpg", "8/10", "60 min", "2 a 7 Personas", "Un virus mortal contamina todo el laboratorio... ¿puedes encontrar el antídoto y escapar?");
const habitacion6 = new Habitacion ("06", "Alquimago", "Magia", "/imagenes/room-alquimago.jpg", "10/10", "60 min", "2 a 7 Personas", "El necesita un poco de tu magia y un sacrificio puede ser necesario... ¿quien del equipo sera?");
 
const todasHabitaciones = [habitacion1, habitacion2, habitacion3, habitacion4, habitacion5, habitacion6]



// horarios de las habitaciones

const habitacionHorario = {
    1 : "2:00 Pm a 3:00 Pm",
    2 : "3:30 Pm a 4:30 Pm",
    3 : "5:00 Pm a 6:00 Pm",
    4 : "6:30 Pm a 7:30 Pm",
    5 : "8:00 Pm a 9:00 Pm", 
}


// precio del servicio por persona

const precioPorPersona = {
    1 : 16000, 
    2 : 16000, 
    3 : 14000,
    4 : 14000,
    5 : 12000,
    6 : 12000,
    7 : 12000,
};
// console.log(precioPorPersona[3])

// precio del servicio por grupo

const precioPorGrupo = {
    1 : 16000, 
    2 : 32000, 
    3 : 42000,
    4 : 56000,
    5 : 60000,
    6 : 72000,
    7 : 84000,
};
// console.log(precioPorGrupo[3])
