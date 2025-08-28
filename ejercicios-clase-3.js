//Control de Flujo: Crea una función que reciba una puntuación (0-100) y devuelva una calificación usando if/else:
// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// <70: "F"

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
