import {html, css, javascript} from './lenguajes.js'

//Obtener los objetos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//console.log(enlaces)

//Agregamos el evento addEventListener a cada enlace

enlaces.forEach((enlace) => {
    enlace.addEventListener('click', () => {
        enlaces.forEach((param) => {
            param.classList.remove('activo')
        })
        
        //Agregar la clase "activo" al elemento clickeado
        enlace.classList.add('activo')

        //Obtener el contenido que corresponde segun el elemento clickeado
        let contenido = obtenerInfo(enlace.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    })
})

function obtenerInfo(enlace) {
    let contenido = {
        "HTML": html,
        "CSS": css,
        "JAVASCRIPT": javascript
    }
    return contenido[enlace]
}










