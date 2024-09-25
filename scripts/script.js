//EVENTOS

function cambiarDemo() {
    document.getElementById('demo').innerHTML = 'Texto cambiado con JS'
}

function mostrar() {
    document.getElementById('seleccionable').innerHTML = Date()
}

function cambiarEstilo() {
    let cambiaEstilo = document.getElementById('escribime')
    // cambiaEstilo.style.color = 'red'
    // cambiaEstilo.style.backgroundColor = 'black'
    // cambiaEstilo.style.fontWeight = 'bold'
    cambiaEstilo.style.cssText = "color:red; background-color:black; font-weight: bold"
}

function cambiarColor() {
    let label = document.getElementById('label')

    switch (document.getElementById('select').value) {
        case 'rojo':
            label.style.cssText = "color:red; font-weight:bold"
            break;
        case 'azul':
            label.style.cssText = "color:blue; font-weight:bold"

            break;
        case 'verde':
            label.style.cssText = "color:green; font-weight:bold"

            break;
    }
}

// Lista de eventos https://www.w3schools.com/jsref/dom_obj_event.asp todos van precedidos de "on"

const arrayLista = ['Carne', 'Ensalada', 'Bebida', 'Postre', 'Carbón', 'Picada']

let items=''

for (let index = 0; index < arrayLista.length; index++) {
    items += '<li>' + arrayLista[index] + '</li>'    
}

//console.log(items)
document.getElementById('lista').innerHTML = items