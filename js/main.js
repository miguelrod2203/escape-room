alert("Bienvenido a Esc-Room, podras salir a tiempo?");

const precio12 = 16;
const precio34 = 14;
const precio56 = 12;


function rooms(nombre){
    
    let room = false;

    do {
        let opcionRoom = prompt(`${nombre} selecciona una de nuestras salas: 
        1- El tren. 
        2- El minero. 
        3- El avion. 
        4- La casa embujada. 
        `).toLowerCase();

        if(opcionRoom == 1 || opcionRoom == "el tren" ){
            room = 'el tren';
        }
        else if(opcionRoom == 2 || opcionRoom == "el minero"){
            room = 'el minero';
        } 
        else if(opcionRoom == 3 || opcionRoom == "el avion"){
            room = 'el avion';
        }
        else if(opcionRoom == 4 || opcionRoom == "la casa embrujada"){
            room = 'la casa embrujada';
        } else {
            alert(`${nombre}, la habitacion seleccionada no esta habilitada`);
        }  

    }
    while(!room)
    return room;

}

function horarios(nombre, room){
    let horario = false;

    do {
        let opcionHorario = prompt(`${nombre} usted ha elegido la habitacion ${room},
        ¿en que horario deseas intentarlo ( 1, 2, 3 o 4)?
        Recuerda llegar 15 min antes con tu equipo.
        1- 2:00 pm
        2- 4:00 pm
        3- 6:00 pm
        4- 8:00 pm
        `);
  
        if (opcionHorario == 1){
            horario = '2:00pm';
        }
        else if (opcionHorario == 2){
            horario = '4:00pm';
        }
        else if (opcionHorario == 3){
            horario = '6:00pm';
        }
        else if (opcionHorario == 4){
            horario = '8:00pm';
        } else {
            alert(`${nombre}, el horario, seleccionado no esta habilitado`);
        }   
        
    }
    while(!horario);
    return horario;
}

function participantes(nombre){
    let cantidadParticipantes = false;

    do {
        let cantidadParticipantes =  prompt(`${nombre} ahora por favor indicame cuantos participantes son?
        1 a 2 personas pagan 16 $ c/u
        3 a 4 personas pagan 14 $ c/u
        5 a 6 personas pagan 12 $ c/u               
        `);
     
        if (cantidadParticipantes >= 1 && cantidadParticipantes <= 6){
            return cantidadParticipantes;
        
        } else {
            alert(`${nombre}, ustedes son ${cantidadParticipantes} participantes, la cantidad maxima es de 6`);
        }   
    }
    while(!false);
    return cantidadParticipantes;
}

function precio(cantidadParticipantes) {
    let precio = 0;
    if (cantidadParticipantes == 1 || cantidadParticipantes <= 2){
        precio = precio12 * cantidadParticipantes;
    }
    else if (cantidadParticipantes > 2 || cantidadParticipantes <= 4){
        precio = precio34 * cantidadParticipantes;
    }
    else if (cantidadParticipantes > 4 || cantidadParticipantes <= 6){
        precio = precio56 * cantidadParticipantes;
    } 
    return precio;
}


function reserva() {
    let nombre = prompt("A nombre de quien hacemos la reserva?");
    let edad = prompt(`¿que edad tienes ${nombre}?`);

    if (edad >= 18){
        let room = rooms(nombre);
        let horario = horarios(nombre, room);
        let cantidadParticipantes = participantes(nombre);
        let totalPrecio = precio(cantidadParticipantes);

        alert("su reserva ha sido tomada exitosamente");

        document.write(`El resumen de tu reserva es la siguiente: <br><br>
                        Reserva a nombre de: ${nombre} <br>
                        Habitacion seleccionada: ${room} <br>
                        Horario seleccionado: ${horario} <br>
                        Cantidad de participantes: ${cantidadParticipantes} <br>
                        Total a pagar: ${totalPrecio} <br>
                        `);   
    } else {
        alert(`lo siento ${nombre}, este juego es para mayores de edad`);
        return;
    }
 
}
reserva();
