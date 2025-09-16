const fs = require("fs").promises

// EJERCICIO 1
async function crearDirectorio(nombreCarpeta){
    try {
        await fs.mkdir(nombreCarpeta)
        console.log(`directorio creado en: ${nombreCarpeta}`);
    } catch (error) {
        if(error.code === "EEXIST"){
            console.log("el directorio ya existe. ");
        }else{
            console.error("error al crear directorio: ", error)
        }
    }
}

crearDirectorio("Ejercicios/EjercicioPractico")

// EJERCICIO 2
async function crearArchivo(archivoNuevo, mensajeInicial) {
    try {
        await fs.writeFile(archivoNuevo, mensajeInicial)
        console.log(`archivo creado en ${archivoNuevo}`);
    } catch (error) {
        if(error.code === "ENOET"){
            console.log("el archivo ya existe. ");
        }else{
            console.error("error al crear el archivo", error)
        }
    }
    
}

crearArchivo("./Ejercicios/EjercicioPractico/archivo.txt", "hola mundo, aca mirando el madrid en champions mientras practico estas cositas...\n")
crearArchivo("./Ejercicios/EjercicioPractico/archivo2.txt", "hola mundo 2")

// EJERCICIO 3

async function leerArchivo(archivoLeer) {
    try {
        const leido = await fs.readFile(archivoLeer, "utf8")
        console.log(`leer archivo: ${leido}`);
    } catch (error) {
        console.log("error al intenar leer el archivo, ", error);
        
    }
    
}

leerArchivo("./Ejercicios/EjercicioPractico/archivo.txt")
leerArchivo("./Ejercicios/EjercicioPractico/archivo2.txt")

// EJERCICIO 4

async function agregarContenido(rutaArchivo, mensaje) {
    try {
        await fs.appendFile(rutaArchivo ,mensaje ,"utf8")
        await leerArchivo(rutaArchivo)
    } catch (error) {
        console.log("error al intentar agregar texto al archivo: ", error)
    }
    
}

agregarContenido("./Ejercicios/EjercicioPractico/archivo.txt", 
    "Ahora estoy probando otros metodos, mientras termina el partido del madrid y salio mastantuono \n")

// EJERCICIO 5

async function listarArchivos(rutaListar) {
    try {
        const listado = await fs.readdir(rutaListar)
        console.log("contenido del directorio: ", listado);
    } catch (error) {
        console.log("error al leer el dirctorio: ", error);
        
    }
}
listarArchivos("./Ejercicios/EjercicioPractico")

//  EJERCICIO 6 

async function eliminarArchivo(archivoEliminar) {
    try {
        await fs.unlink(archivoEliminar)
        console.log("se elimino el archivo correctamente. ");
    } catch (error) {
        console.log("Error al intentar eliminar un archivo. ", error);
    }
}

eliminarArchivo("./Ejercicios/EjercicioPractico/archivo2.txt")
