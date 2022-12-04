function selecHabitacion(){
    let habitacionId =document.getElementById('habitacionId');
    let habitacion = habitacionId.value;

    document.getElementById('escElejido').innerText = ` ${habitacion}`
}

function selecHorario(){
    let horarioId =document.getElementById('horarioId');
    let horario = horarioId.value;

    document.getElementById('horarioElejido').innerText = ` ${horario}`
}

function selecParticipantes(){
    let precioParticipantesId =document.getElementById('precioParticipantesId');
    let participantes = precioParticipantesId.value;

    document.getElementById('participanteElejido').innerText = ` ${participantes}`

    document.getElementById('totalPagar').innerText = ` ${precioPorGrupo[participantes]}`

    document.getElementById('porParticipante').innerText = ` ${precioPorPersona[participantes]}`

}


