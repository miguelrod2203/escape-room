// datos de la habitacion

class Habitacion {
    constructor (id, titulo, tematica, dificultad, duracion, descripcion ) {
        this.id = id;
        this.titulo = titulo;
        this.tematica = tematica;
        this.dificultad = dificultad;
        this.duracion = duracion;
        this.descripcion = descripcion;
    }
}

const habitacion1 = new Habitacion ("01", "Bajo presion", "Submarino", "8/10", "60 min", "Un espia aleman y un submarino con poco oxigeno... puedes escapar para contarlo?");
const habitacion2 = new Habitacion ("02", "La cabaña embrujada", "Cabaña", "9/10", "60 min", "Unas vacaciones de infarto, alquilaste una cabaña, con tus amigos y maldicion incluida... ¿podran volver a tener paz?");
const habitacion3 = new Habitacion ("03", "El minero", "Mina", "9/10", "60 min", "Atrapado al fondo de una mina... ¿puedes encontrar la forma de escapar?");
const habitacion4 = new Habitacion ("04", "El tren", "Tren", "7/10", "60 min", "Un crimen y seis sospechosos a bordo... ¿puedes identificar al culpable antes de llegar a la estacion");
const habitacion5 = new Habitacion ("05", "Antidoto", "Laboratorio", "8/10", "60 min", "Un virus mortal contamina todo el laboratorio... ¿puedes encontrar el antídoto y escapar?");
const habitacion6 = new Habitacion ("06", "Alquimago", "Magia", "10/10", "60 min", "El necesita un poco de tu magia y un sacrificio puede ser necesario... ¿quien del equipo sera?");

const todas_habitaciones = {
    1:habitacion1,
    2:habitacion2,
    3:habitacion3,
    4:habitacion4,
    5:habitacion5,
    6:habitacion6,
};

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