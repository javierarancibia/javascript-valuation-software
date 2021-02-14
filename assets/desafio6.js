
let element = document.createElement("p")
let node = document.createTextNode("Terreno")
element.appendChild(node)
document.getElementById("texto").appendChild(element)

document.getElementById("myImg").src = "assets/img/land.jpg";
// Funcion Imagen Propiedad
if (property1.type == "CASA"){
    document.getElementById("myImg").src = "assets/img/house.jpg";
} else if 
    (property1.type == "TERRENO") {
        document.getElementById("myImg").src = "assets/img/land.jpg";
    } else {
    document.getElementById("myImg").src = "assets/img/apartment.jpg";
}



element.appendChild(node)
document.getElementById("texto").appendChild(element)

















// Parte 1
const property = prompt('Ingresa el tipo de propiedad: Departamento, Casa o Terreno'); 
let propertyType1 = obligProp(property); // Funcion para obligar un resultado que no sea vacio ni nulo
let finalProperty = obligatePropertyType(propertyType1) // Funcion para obligar que sea un tipo solicitado

// Parte 2
const area = parseFloat(prompt('Ingresa la superficie de la propiedad'));
let finalArea= 0
let rooms = " ";
let finalRooms = 0
let bathRooms = " ";
let finalBathrooms = 0

if (finalProperty === "TERRENO"){  
    finalArea = obligLand(area)
} else {
    finalArea = obligArea(area);
    finalRooms = obligRooms();
    finalBathrooms = obligBathrooms();
}





// Funciones

// funciones parte 1
function obligProp(prop){
    while (prop == '' || prop == null){ // Funcion para obligar el ingreso de datos en el tipo de propiedad
        prop = prompt('Debes ingresar un tipo de propiedad valido')
    }
    
    return prop.toUpperCase()
}

function obligatePropertyType(obligProp) { // Funcion para obligar a que sea una de las tres opciones

    while (obligProp !== "CASA" && obligProp !== "TERRENO" && obligProp !== "DEPARTAMENTO"){
        obligProp = prompt("Ingresa un tipo valido").toUpperCase()
        
    }

    return obligProp

}

// funciones parte 2
function obligArea(squareMt) { //Funcion en caso sea casa o departamento, para tener valor menor a 250 metros cuadrados
    while (isNaN(squareMt) || squareMt >= 250) {
        squareMt = parseFloat(prompt("Debes ingresar un valor para superficie de la propiedad (No mas de 250 m2)"))
    }
    console.log(squareMt)
    return squareMt
}

function obligLand(squareMt) { //Funcion en caso sea terreno, para tener valor mayor a 250 metros cuadrados
    while (isNaN(squareMt)) {
        squareMt = parseFloat(prompt("Debes ingresar un valor para superficie de la propiedad valido"))
    }
    console.log(squareMt)
    return squareMt
}


// funcion parte 3 para obligar el ingreso de datos. No pueden ser mas de 5 habitaciones
function obligRooms() {
    rooms = parseInt(prompt('Ingresa el numero de habitaciones'));
    while (isNaN(rooms) || rooms > 5) {
        rooms = parseInt(prompt("Debes ingresar un numero de habitaciones valido (No mas de 5)."))
    }
    console.log(rooms)
    return rooms
}

// funcion parte 4 para obligar el ingreso de datos. No pueden ser mas de 5 baños
function obligBathrooms() {
    bathrooms = parseInt(prompt('Ingresa el numero de baños'));
    while (isNaN(bathrooms) || bathrooms > 5) {
        bathrooms = parseInt(prompt("Debes ingresar un numero de habitaciones valido (No mas de 5)."))
    }
    console.log(bathrooms)
    return bathrooms
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
        let finalValue = ""
        if (this.type == "CASA" || this.type == "DEPARTAMENTO") {
            finalValue = "3 UF"
            console.log(`La propiedad es de tipo ${this.type}, con una superficie de ${this.area} m², ${this.rooms} habitaciones, ${this.bathrooms} baños y el informe de tasacion tiene un valor de ${finalValue}`)
        } else {
            finalValue = "4 UF"
           console.log(`La propiedad es de tipo ${this.type}, con una superficie de ${this.area} m² y el informe de tasacion tiene un valor de ${finalValue}`)
        }
        return finalValue

    }
}

const property1 = new Property(finalProperty, finalArea, finalRooms, finalBathrooms)
console.log(property1)
property1.valuateProperty()



// Funcion array Desafio 6
let array = []

array.push(finalProperty, finalArea, finalRooms, finalBathrooms)
console.log(array)



// Funciones DOM
// Funcion Texto Valor Tasacion
let element = document.createElement("p")
let node = document.createTextNode("La propiedad es de tipo " + property1.type + ", con una superficie de " + property1.area + " m² y el informe de tasacion tiene un valor de " + property1.valuateProperty())
element.appendChild(node)
document.getElementById("texto").appendChild(element)


// Funcion Imagen Propiedad
if (property1.type == "CASA"){
    document.getElementById("myImg").src = "assets/img/house.jpg";
} else if 
    (property1.type == "TERRENO") {
        document.getElementById("myImg").src = "assets/img/land.jpg";
    } else {
    document.getElementById("myImg").src = "assets/img/apartment.jpg";
}



element.appendChild(node)
document.getElementById("texto").appendChild(element)




