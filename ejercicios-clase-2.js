//CALCULADORA DE AREA DE RECTANGULO 
let ancho = 10;
let alto = 30; 

const resultado = ancho * alto;

console.log("Resultado: ",resultado);


// CONVERSOR DE TEMPERATURA 

let gradosCelsius = 35;
let gradosFahrenheit = (gradosCelsius * 9/5) +32;

console.log("gradosFahrenheit: ",gradosFahrenheit);

// VERIFICADOR DE CONTRASENIA

const contrasenaCorrecta = "ss";
let intentoDeUsuario = "nn";
let escontraseniaValida = false;

if(contrasenaCorrecta === intentoDeUsuario){
    esContraseniaValida = true;
}
console.log("esContraseniaValida: ", escontraseniaValida);

// PERFIL DE USUARIO 

const usuario ={
    nombre: "Bautista",
    edad: 23,
    estaRestringido: false,
    cursos: ["Node.js","Git","GitHub","javascript"]
};
console.log(usuario.nombre);
console.log(usuario.cursos[0]);

