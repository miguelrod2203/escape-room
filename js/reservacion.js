function selecHabitacion(){
    let habitacionId =document.getElementById('habitacionId');
    let habitacion = habitacionId.value;
    console.log(habitacion);

    document.getElementById('escElejido').innerText = `${habitacion}`

}

function selecHorario(){
    let horarioId =document.getElementById('horarioId');
    let horario = horarioId.value;
    console.log(horario);

    document.getElementById('horarioElejido').innerText = `${horario}`

}
