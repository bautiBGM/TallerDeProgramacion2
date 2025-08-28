//CONTROL DE FLUJO

function controlFlujo(puntuacion){
    let calificacion = ""
    if(puntuacion >= 90 && puntuacion <= 100){
        calificacion = "A"
    }else if(puntuacion >= 80 && puntuacion < 90){
        calificacion = "B"
    }else if(puntuacion >= 70 && puntuacion < 80){
        calificacion = "C"
    }else{
        calificacion = "F"
    }
    return console.log("Calificacion: ", calificacion);
}

controlFlujo(80)
