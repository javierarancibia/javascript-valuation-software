
// Parte 1
const property = prompt('Ingresa el tipo de propiedad: Departamento, Casa o Terreno'); 
let propertyType1 = obligProp(property); // Funcion para obligar un resultado que no sea vacio ni nulo
let finalProperty = obligatePropertyType(propertyType1) // Funcion para obligar que sea un tipo solicitado

// Parte 2
const area = parseFloat(prompt('Ingresa la superficie de la propiedad'));
let finalArea= 0
if (finalProperty === "TERRENO"){
    finalArea = obligLand(area)
} else {
    finalArea = obligArea(area);
}

// Parte 3
const rooms = parseInt(prompt('Ingresa el numero de habitaciones'));
let finalRooms = obligRooms(rooms);
// Parte 4
const bathrooms = parseInt(prompt('Ingresa el numero de baños'));
let finalBathrooms = obligBathrooms(bathrooms);


// Funciones

// funciones parte 1
function obligProp(prop){
    while (prop == '' || prop == null){
        prop = prompt('Debes ingresar un tipo de propiedad valido')
    }
    
    return prop.toUpperCase()
}

function obligatePropertyType(obligProp) {

    while (obligProp !== "CASA" && obligProp !== "TERRENO" && obligProp !== "DEPARTAMENTO"){
        obligProp = prompt("Ingresa un tipo validoooo").toUpperCase()
        
    }
    alert("Tipo de propiedad valido")
    return obligProp;

}

// funciones parte 2
function obligArea(squareMt) {
    while (isNaN(squareMt) || squareMt >= 250) {
        squareMt = parseFloat(prompt("Debes ingresar un valor para superficie de la propiedad (No mas de 250 m2)"))
    }
    console.log(squareMt)
    return squareMt
}

function obligLand(squareMt) {
    while (isNaN(squareMt)) {
        squareMt = parseFloat(prompt("Debes ingresar un valor para superficie de la propiedad valido"))
    }
    console.log(squareMt)
    return squareMt
}


// funcion parte 3
function obligRooms(numberOfRooms) {
    while (isNaN(numberOfRooms) || numberOfRooms > 5) {
        numberOfRooms = parseInt(prompt("Debes ingresar un numero de habitaciones valido (No mas de 5)."))
    }
    console.log(numberOfRooms)
    return numberOfRooms
}

// funcion parte 4
function obligBathrooms(numberOfBathrooms) {
    while (isNaN(numberOfBathrooms) || numberOfBathrooms > 5) {
        numberOfBathrooms = parseInt(prompt("Debes ingresar un numero de habitaciones valido (No mas de 5)."))
    }
    console.log(numberOfBathrooms)
    return numberOfBathrooms
}




// Objeto Propiedad

class Property {
    constructor(type, area, rooms, bathrooms){
        this.type = type;
        this.area = area; 
        this.rooms = rooms;
        this.bathrooms = bathrooms;
    }

    valuateProperty() {
        let finalValue = finalArea * 45.5
        alert(`La propiedad es de tipo ${this.type}, con una superficie de ${this.area}, ${this.rooms} habitaciones, ${this.bathrooms} baños y tiene un valor de ${finalValue}`)
    }
}

const property1 = new Property(finalProperty, finalArea, finalRooms, finalBathrooms)
console.log(property1)
property1.valuateProperty()








