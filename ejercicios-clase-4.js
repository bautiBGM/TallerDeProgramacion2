// . Ejercicios Prácticos

// 1)Ejercicio de slice:
// Dado el array [10, 20, 30, 40, 50], usa slice para crear un nuevo array que contenga solo los elementos [20, 30].

const numeros = [10,20,30,40,50];
const numerosEspecificos = numeros.slice(1,3);

console.log(numeros);
console.log(numerosEspecificos);

// 2)Ejercicio de splice:
// Dado el array ['a', 'b', 'c', 'd'], usa splice para eliminar la 'c' y agregar 'x' y 'y' en su lugar.

const letras = ['a','b','c','d']
letras.splice(2,1)
console.log(letras);

letras.splice(2,0,'x', 'y')
console.log(letras);

// 3)Ejercicio de map:
// Tienes un array de objetos [{id: 1, nombre: 'Ana'}, {id: 2, nombre: 'Luis'}].
//  Usa map para crear un nuevo array que contenga solo los nombres: ['Ana', 'Luis'].

const objetos = [
    { 
        id: 1,
        nombre: 'ana'
    },
    {
        id: 2,
        nombre: 'luis'
    }
]

const nombres = objetos.map(personas => personas.nombre);
console.log(nombres);


// 4)Ejercicio de reduce:
// Tienes un array de números [5, 10, 15, 20]. Usa reduce para calcular el producto de todos los elementos.

const numeros2 = [5,10,15,20];
const producto = numeros2.reduce((acumulador, numeroActual) => {
    return acumulador * numeroActual;
});
console.log(producto);


// 5)Ejercicio de Promise.all:
// Define un array con 3 URLs de la API de JSONPlaceholder que apunten a diferentes usuarios (ej: /users/6, /users/7, /users/8).
// Usa Promise.all y fetch para obtener los datos de los tres usuarios en paralelo.
// Imprime en la consola el nombre de cada uno de los usuarios.

const urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3'
];

const usuariosEnParalelo = async () => {
    try{
    const promesa = urls.map(url => fetch(url).then(res => res.json()));
    const usuario = await Promise.all(promesa);
    usuario.forEach(user => console.log(user.name));
    }catch(error){
        console.error('una de las promesas fallo ', error);     
    } 
}

usuariosEnParalelo();
