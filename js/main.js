console.log ("Bienvenido a Esc-Room, podras salir a tiempo?");

// mis servicios de entretencion

class Habitacion {
    constructor (tematica, dificultad, duracion, descripcion ) {
        this.tematica = tematica;
        this.dificultad = dificultad;
        this.duracion = duracion;
        this.descripcion = descripcion;
    }
}

const habitacion1 = new Habitacion ("Bajo presion", "8/10", "60 min", "Un espia aleman y un submarino con poco oxigeno... puedes escapar para contarlo?");
const habitacion2 = new Habitacion ("La cabaña embrujada", "9/10", "60 min", "Unas vacaciones de infarto, alquilaste una cabaña, con tus amigos y maldicion incluida... ¿podran volver a tener paz?");
const habitacion3 = new Habitacion ("El minero", "9/10", "60 min", "Atrapado al fondo de una mina... ¿puedes encontrar la forma de escapar?");
const habitacion4 = new Habitacion ("El tren", "7/10", "60 min", "Un crimen y seis sospechosos a bordo... ¿puedes identificar al culpable antes de llegar a la estacion");
const habitacion5 = new Habitacion ("Antidoto", "8/10", "60 min", "Un virus mortal contamina todo el laboratorio... ¿puedes encontrar el antídoto y escapar?");
const habitacion6 = new Habitacion ("Alquimago", "10/10", "60 min", "El necesita un poco de tu magia y un sacrificio puede ser necesario... ¿quien del equipo sera?");

const todas_habitaciones = {
    1:habitacion1,
    2:habitacion2,
    3:habitacion3,
    4:habitacion4,
    5:habitacion5,
    6:habitacion6,
};

function rooms(nombre){
    
    let room = false;

    do {
        let opcionRoom = prompt(`${nombre} selecciona una de nuestras salas: 
        1- Bajo presion. 
        2- La cabaña embrujada. 
        3- El minero. 
        4- El tren.
        5- Antidoto.
        6- Alquimago. 
        `);

        if(opcionRoom in todas_habitaciones){
            room = todas_habitaciones.hasOwnProperty(opcionRoom);
            console.log(opcionRoom = todas_habitaciones[opcionRoom]);
        } else {
            alert(`${nombre}, la habitacion seleccionada no esta habilitada`);
        }  

    }
    while(!room)
    return room; 
}

// horarios de mi servicio de entretencion

const habitacionHorario = ["2:00 Pm", "4:00 Pm", "6:00 Pm", "8:00 Pm"];

function horarios(nombre, room){
    let horario = false;

    do {
        let opcionHorario = prompt(`${nombre} usted ha elegido la habitacion ${room},
        ¿en que horario deseas intentarlo ( 1, 2, 3 o 4)?
        1- 2:00 pm
        2- 4:00 pm
        3- 6:00 pm
        4- 8:00 pm
        `);
        
        if (opcionHorario <= habitacionHorario.length) {
            for (horario of opcionHorario){
            console.log(`horario seleccionado : ${habitacionHorario[horario -1]}`);
        }
        }else {
            alert(`${nombre}, el horario, seleccionado no esta habilitado`);
        }
        
        
    }
    while(!horario);
    return horario;
}

// precio del servico por cantidad de participantes

const precioHabitacion = {
    1 : 16000, 
    2 : 32000, 
    3 : 42000,
    4 : 56000,
    5 : 60000,
    6 : 72000,
    7 : 84000,
};

function precioParticipantes(nombre) {

    let precios = false;

    do {
        let precioGrupo = prompt(`${nombre} selecciona la cantidad de participantes:  
        1- Personas.
        2- Personas. 
        3- Personas. 
        4- Personas.
        5- Personas.
        6- Personas. 
        7- Personas.
        `);

        precios = precioHabitacion.hasOwnProperty(precioGrupo);

        if(precios){
            console.log(`cantidad de participantes : ${precioGrupo} Personas`);
            console.log(`total a pagar : $ ${ precioHabitacion[precioGrupo]}`);
        } else {
            alert(`${nombre}, la habitacion no tiene capacidad para la cantidad señalada`);
        }  

    }
    while(!precios)
    return precios; 
}

// funcion reserva para mostrar la seleccion de la reserva

function reserva() {
    let nombre = prompt("A nombre de quien hacemos la reserva?");
    let edad = prompt(`¿que edad tienes ${nombre}?`);

    if (edad >= 18){
        let room = rooms(nombre);
        let horario = horarios(nombre, room);
        let totalPrecio = precioParticipantes(nombre);

        console.log("su reserva ha sido tomada exitosamente");  
    } else {
        console.log(`lo siento ${nombre}, este juego es para mayores de edad`);
        return;
    }
}
reserva();
