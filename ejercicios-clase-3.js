// 1)Control de Flujo: Crea una función que reciba una puntuación (0-100) y devuelva una calificación usando

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


// 2) Operador Ternario: Crea una función esPar que use el operador ternario para devolver "Es par" o "Es impar" según el número recibido.

const esPar = (n) => n % 2 === 0 ? "es par" : "es impar";
console.log(esPar(7));


// 3) Calculadora con switch: Crea una función calcular que reciba dos números y un operador ("+", "-", "*" o "/")
// y devuelva el resultado usando una sentencia switch.

function calculadora (n1,n2,operador){
    let calcular;
    switch(operador){
        case '+':
            calcular = n1 + n2;
            break;
        case '-':
            calcular = n1 - n2;
            break;
        case '*':
            calcular = n1 * n2;
            break;
        case '/':
            if (n2 === 0 ){
                calcular = "No se puede dividir por 0";
            }else{
                calcular = n1 / n2;
            }
            break;
        default:
            calcular = "Operador no valido";
    }
    return calcular
}

console.log("calcular: ",calculadora(10,5,'+'));


// 4) Objeto "Libro": Crea un objeto libro con propiedades titulo, autor, año y un método resumen que imprima "El libro [titulo] 
// fue escrito por [autor] en el año [año]".

// 5) Contador con Closure: Crea una función crearJuego que use un closure para mantener un puntaje privado.
// Debe devolver un objeto con dos métodos: sumarPunto() y mostrarPuntaje().

// 6) Iterar Objeto: Crea una función mostrarPropiedades que reciba un objeto e imprima cada una de sus propiedades y valores en la consola.