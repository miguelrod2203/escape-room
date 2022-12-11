// funciones para  tomar los valores seleccionados en los inputs

function selecHabitacion(){
    let habitacionId =document.getElementById('habitacionId');
    let habitacion = habitacionId.value;

    document.getElementById('escElejido').innerText = ` ${habitacion}`
}


function selecFecha(){
    let fechaId =document.getElementById('fechaId');
    let fecha = fechaId.value;

    document.getElementById('fechaElejido').innerText = ` ${fecha}`
}


function selecHorario(){
    let horarioId =document.getElementById('horarioId');
    let horario = horarioId.value;

    document.getElementById('horarioElejido').innerText = ` ${habitacionHorario[horario]}`
}


function selecParticipantes(){
    let precioParticipantesId =document.getElementById('precioParticipantesId');
    let participantes = precioParticipantesId.value;

    document.getElementById('participanteElejido').innerText = ` ${participantes}`
    document.getElementById('totalPagar').innerText = ` ${precioPorGrupo[participantes]}`
    document.getElementById('porParticipante').innerText = ` ${precioPorPersona[participantes]}`

}
// habilitamos el boton solo si selecciona una opcion en cada input

function habilitarContinuar() {
    habitacionId = document.getElementById("habitacionId").value;
    fechaId = document.getElementById("fechaId").value;
    horarioId = document.getElementById("horarioId").value;
    precioParticipantesId = document.getElementById("precioParticipantesId").value;

    val = 0;

    if(habitacionId == ""){
        val++;
    }
    if(fechaId == ""){
        val++;
    }
    if(horarioId == ""){
        val++;
    }
    if(precioParticipantesId == ""){
        val++;
    }
    if(val == 0){
        document.getElementById("continuar").disabled = false;
    }else{
        document.getElementById("continuar").disabled = true;
    }
}
document.getElementById("habitacionId").addEventListener("change", habilitarContinuar);
document.getElementById("fechaId").addEventListener("change", habilitarContinuar);
document.getElementById("horarioId").addEventListener("change", habilitarContinuar);
document.getElementById("precioParticipantesId").addEventListener("change", habilitarContinuar);

document.getElementById("continuar").addEventListener("click", () =>{
    alert("si se pudo");
});
