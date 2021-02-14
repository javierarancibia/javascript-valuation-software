


// Funcion Cotizar Casa

function cotizarCasa() {
    // Generacion del titulo
    let element = document.createElement("h3")
    element.setAttribute("class", "my-4")
    let textNode = document.createTextNode("Caracteristicas de la propiedad")

    element.appendChild(textNode)
    document.getElementById("formularioCasa").appendChild(element)

    // Generacion de los inputs

    // Input Nombre Usuario
    element = document.createElement("input")

    document.getElementById("formularioCasa").appendChild(element)

    element.setAttribute("class", "container ml-5 mb-5 form-control form-control-lg")
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Nombre del solicitante")
    element.setAttribute("id", "nombreUsuario")

    // Input Superficie de Email
    element = document.createElement("input")

    document.getElementById("formularioCasa").appendChild(element)

    element.setAttribute("class", "container ml-5 mb-5 form-control form-control-lg")
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Correo electronico")
    element.setAttribute("id", "emailUsuario")


    // Input Superficie de Terreno
    element = document.createElement("input")

    document.getElementById("formularioCasa").appendChild(element)

    element.setAttribute("class", "container ml-5 mb-5 form-control form-control-lg")
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Superficie de terreno aproximado")
    element.setAttribute("id", "superficieTerreno")


    // Input Superficie de Casa
    element = document.createElement("input")

    document.getElementById("formularioCasa").appendChild(element)

    element.setAttribute("class", "container ml-5 mb-5 form-control form-control-lg")
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Superficie construida aproximada")
    element.setAttribute("id", "superficieCasa")


    // Input Numero de Habitaciones
    element = document.createElement("input")

    document.getElementById("formularioCasa").appendChild(element)

    element.setAttribute("class", "container ml-5 mb-5 form-control form-control-lg")
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Numero de habitaciones")
    element.setAttribute("id", "numeroHabitaciones")

    // Input Numero de Baños
    element = document.createElement("input")

    document.getElementById("formularioCasa").appendChild(element)

    element.setAttribute("class", "container ml-5 mb-5 form-control form-control-lg")
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Numero de baños")
    element.setAttribute("id", "numeroBanos")



    // Boton
    let botonFormulario = document.createElement("button");
    let textButton = document.createTextNode("Cotizar")

    botonFormulario.appendChild(textButton)
    botonFormulario.setAttribute("type", "button");
    botonFormulario.setAttribute("class", "btn btn-primary btn-lg btn-block");
    botonFormulario.setAttribute("id", "botonFormulario");
    document.getElementById("formularioCasa").appendChild(botonFormulario)

    document.getElementById("botonFormulario").addEventListener("click", getData)
    
    
    // Funcion obtener datos
    
    function getData() {
        let nombreUsuario = document.getElementById("nombreUsuario").value;
        let emailUsuario = document.getElementById("emailUsuario").value;
        let superficieTerreno = parseInt(document.getElementById("superficieTerreno").value);
        let superficieCasa = parseInt(document.getElementById("superficieCasa").value);
        let numeroHabitaciones = parseInt(document.getElementById("numeroHabitaciones").value);
        let numeroBanos = parseInt(document.getElementById("numeroBanos").value);

        if (nombreUsuario == "" || nombreUsuario == null){
            alert("Debes ingresar tu nombre")
            return false
        }
        if (emailUsuario == "" || emailUsuario == null){
            alert("Debes ingresar tu correo")
            return false
        }
        if (isNaN(superficieTerreno) || superficieTerreno == null){
            alert("Debes ingresar una superficie de terreno")
            return false
        }
        if (isNaN(superficieCasa) || superficieCasa == null){
            alert("Debes ingresar una superficie de casa")
            return false
        }
        if (isNaN(numeroHabitaciones) || numeroHabitaciones == null){
            alert("Debes ingresar una cantidad de habitaciones")
            return false
        }
        if (isNaN(numeroBanos) || numeroBanos == null){
            alert("Debes ingresar una cantidad de baños")
            return false
        } 
            
        

        function Usuario(nombre, correo) {
            this.nombre = nombre
            this.correo = correo
        }

        let usuario = new Usuario(nombreUsuario, emailUsuario)

        function Propiedad(terreno, casa, habitaciones, banos){
            this.terreno = terreno
            this.casa = casa
            this.habitaciones = habitaciones
            this.banos = banos
        }
        
        let propiedad = new Propiedad(superficieTerreno, superficieCasa, numeroHabitaciones, numeroBanos)
        
        if (propiedad.habitaciones > 5){
            element = document.createElement("p")
            element.setAttribute("class", "container ml-5 my-5 py-5")
            textNode = document.createTextNode("Para vivienda unifamiliar con " + propiedad.habitaciones + " habitaciones, " + propiedad.banos + " baños, superficie aproximada de terreno de " + propiedad.terreno + " y superficie aproximada de casa " + propiedad.casa + " el servicio de tasacion tiene un valor de 4,5 UF");
            element.appendChild(textNode)
            document.getElementById("formularioCasa").appendChild(element)
        } else {
            element = document.createElement("p")
            element.setAttribute("class", "container ml-5 my-5 py-5")
            textNode = document.createTextNode("Para vivienda unifamiliar con " + propiedad.habitaciones + " habitaciones, " + propiedad.banos + " baños, superficie aproximada de terreno de " + propiedad.terreno + " m² y superficie aproximada de casa " + propiedad.casa + " m², el servicio de tasacion tiene un valor de 3 UF");
            element.appendChild(textNode)
            document.getElementById("formularioCasa").appendChild(element)
        }
    }
}