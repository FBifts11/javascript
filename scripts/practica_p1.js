/* var miVar = 'Texto de miVar'

function imprimirVar() {
    console.log('Imprimiendo miVar desde dentro de la funcion, el valor de miVar es: ', miVar);
    
    var miVar2 = 'Texto de miVar2'
    console.log('Imprimiendo miVar2 desde dentro de la funcion, el valor de miVar2 es: ', miVar2);
    
}

console.log('Imprimiendo miVar desde fuera de la funcion, el valor de miVar es: ', miVar);
//console.log('Imprimiendo miVar2 desde dentro de la funcion, el valor de miVar2 es: ', miVar2);

imprimirVar()



let miLet = 'Texto de miLet'
//console.log(miLet)

function imprimirLet() {
    console.log('Imprimiendo miLet desde dentro de la funcion, el valor de miLet es: ', miLet)
    
    let miLet2 = 'Texto de miLet2'
    console.log('Imprimiendo miLet2 desde dentro de la funcion, el valor de miLet2 es: ', miLet2)
    
    if (miLet2) {
        let miLet3 = 'Texto de miLet3'
        console.log('Imprimiendo miLet3 desde dentro del condicional, el valor de miLet3 es, ', miLet3)
        console.log('Imprimiendo miLet2 desde dentro del condicional, el valor de miLet2 es: ', miLet2)
        
    }

    //console.log('Imprimiendo miLet3 desde fuera del condicional y dentro de la funcion, el valor de miLet3 es, ', miLet3)
    
}
//console.log('Imprimiendo miLet2 desde dentro de la funcion, el valor de miLet2 es: ', miLet2)
//console.log('Imprimiendo miLet3 desde fuera de la funcion, el valor de miLet3 es, ', miLet3)

imprimirLet()



const miConst= 'Texto de miConst'
console.log(miConst)
// miConst = 'Texto nuevo de miConst' No funciona
// console.log(miConst)

//const miConst = 86 No funciona


let vendedor = {
    nombre: 'Carlos',
    apellido: 'Carles',
    empresa: 'Vendetuti S.A.',
    habilidadesBlandas: ['carisma', 'empatia', 'puntualidad'],
    vender: function () {
        return 'Carlos vendió un auto'
    },
    obtenerNombreCompleto: function () {
        return `El nombre completo de este vendedor es ${this.nombre} ${this.apellido}`
    }
}

console.log(vendedor)

console.log(vendedor.nombre)

console.log(vendedor.vender())

console.log(vendedor.obtenerNombreCompleto())

console.log(typeof vendedor)



vendedor.apellido = 'Sanchez'
console.log(vendedor)

vendedor.edad = 56
console.log(vendedor)

 


//Funciones
let numero = 10
function sumar(numero) {
    return numero + 2
}

//Arrow function
let sumarConArrow = (numero) => {
    return numero + 2
}

let sumarConArrowPower = numero => numero + 2;

console.log(`Sumo desde sumar, el resultado es ${sumar(numero)}`)
console.log(`Sumo desde sumarConArrow, el resultado es ${sumarConArrow(numero)}`)
console.log(`Sumo desde sumarConArrowPower, el resultado es ${sumarConArrowPower(numero)}`)


//CALLBACKS

function saludar(param1) {
    console.log(`Hola ${param1}`)
}

let nombre = 'Gus'

function procesarSaludo(param2, callback) {
    console.log(`La funcion 'procesarSaludo' recibió como argumentos a ${param2} y a la funcion saludar, pues bien, saludemos entonces a ${param2} utilizando la callback`)
    callback(param2)
}

procesarSaludo(nombre, saludar)


let numero1 = 1

function potenciar(num1) {
    numero1 = num1 ** 2
    return numero1
}

function sumar(num2, num3, callback) {
    let numero2 = num3 ** 3;

    setTimeout(callback, 3000, num2);

    console.log(`Numero1 vale ${numero1} y aún no se ejecutó el callback, entonces el resultado es ${numero1 + numero2}`)
    
    setTimeout(() => {
        console.log(`Numero1 vale ${numero1} y ya se ejecutó el callback, entonces el resultado es ${numero1 + numero2}`)
    }, 5000);
}

sumar(2,3,potenciar)

*/


//ARRAYS

//const array = ['HTML', 'CSS', 'JS']

const array = new Array(5)
array[0] = 'HTML'
array[1] = 'CSS'
array[2] = 'JS'

//console.log(array)

//const arrayNumeros = [3, 9, 8, 5, 6, 4, 7, 2, 1]

// console.log(arrayNumeros.length)

// console.log(arrayNumeros[arrayNumeros.length -1])


const temasFront = ['HTML', 'CSS', 'JS']

temasFront[temasFront.length] = 'ANGULAR'
//console.log(temasFront)


let frutas = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja', 'Banana', 'Pera', 'Tomate']

//FILTER

let filter = frutas.filter((param) => {
    return param === 'Manzana'
})

//console.log(filter)

let filter2 = frutas.filter(param => param === 'Naranja')
//console.log(filter2)

const temas = [
    { tema: 'HTML', materia: 'Frontend' },
    { tema: 'CSS', materia: 'Frontend' },
    { tema: 'JS', materia: 'Frontend' },
    { tema: 'JS', materia: 'Backend' },
    { tema: 'NodeJS', materia: 'Backend' },
    { tema: 'MongoDB', materia: 'Backend' }
]

//console.log(temas)

let temasFiltrados = temas.filter(param => param.materia == 'Backend')
//console.log(temasFiltrados)


//MAP
let arrayManzanas = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana',]

let arrayNaranjas = arrayManzanas.map(param => {
    if (param == 'Manzana') {
        return 'Naranja'
    }
})

//console.log(arrayManzanas)
//console.log(arrayNaranjas)

//FILL

let resultadoFill = arrayManzanas.fill('Naranja', 2, 5)

//console.log(resultadoFill)

//FIND

let resultadoFind = frutas.find(param => param == 'Pera')
//console.log(resultadoFind)


//FINDINDEX

let resultadoIndex = frutas.findIndex(param => param == 'Naranja')
//console.log(resultadoIndex)

//SOME
let resultadoSome = frutas.some(param => param == 'Ciruela')
//console.log(resultadoSome)

//EVERY

let resultadoEvery = arrayNaranjas.every(param => param == 'Naranja')
//console.log(resultadoEvery)

//POP

//console.log(frutas)
let resultadoPop = frutas.pop()
//console.log(frutas)

//SHIFT

let resultadoShift = frutas.shift()
//console.log(frutas)

//PUSH
frutas.push('Sandia')
//console.log(frutas)

//UNSHIFT

frutas.unshift('Pomelo')
//console.log(frutas)


//SPLICE

frutas.splice(2, 1, 'Melon', 'Anana')
//console.log(frutas)

//SLICE

let resultadoSlice = frutas.slice(2, 5)
//console.log(frutas)
//console.log(resultadoSlice)

//CONCAT

let verduras = ['Lechuga', 'Cebolla', 'Zapallo', 'Remolacha']

//console.log(frutas.concat(verduras))

const arrayNumeros = [3, 9, 8, 5, 6, 4, 7, 2, 1]

//console.log(arrayNumeros.sort())

const arrayNumeros2 = [3, 9, 8, 5, 6, 4, 7, 2, 1, 12, 25, 10, 30]

//console.log(arrayNumeros2.sort())

//console.log(arrayNumeros2.sort((a,b) => a-b))
//console.log(arrayNumeros2.sort((a,b) => b-a))


//MANEJO DE ERRORES

//console.log(undefinedVariable)

try {
    console.log('Intento ejecutar el codigo')
    
    console.log('Sale con fritas')
} catch (error) {
    console.log('algo salio mal,' , error)
}

console.log('********************************************')

try {
    console.log('Segundo intento de ejecutar el codigo')
    throw('hay un error en el codigo')
    console.log('Sale con fritas')
} catch (error) {
    console.log('algo salio mal,' , error)
}

console.log('********************************************')

try {
    console.log('Tercer intento de ejecutar el codigo')
    console.log('Sale con fritas')
} catch (error) {
    console.log('algo salio mal,' , error)
} finally {
    console.log('El bloque try catch terminó')
}

console.log('********************************************')