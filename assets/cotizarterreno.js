// Funcion Cotizar Casa

function cotizarTerreno() {
    // Generacion del titulo
    let element = document.createElement("h3")
    element.setAttribute("class", "my-4 text-white")
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


    
    // Boton
    let botonFormulario = document.createElement("button");
    let textButton = document.createTextNode("Cotizar")

    botonFormulario.appendChild(textButton)
    botonFormulario.setAttribute("type", "button");
    botonFormulario.setAttribute("class", "btn btn-outline-light btn-lg btn-block px-5 py-1 text-center");
    botonFormulario.setAttribute("id", "botonFormulario");
    document.getElementById("formularioCasa").appendChild(botonFormulario)

    document.getElementById("botonFormulario").addEventListener("click", getData)
    
    
    // Funcion obtener datos
    
    function getData() {
        let nombreUsuario = document.getElementById("nombreUsuario").value;
        let emailUsuario = document.getElementById("emailUsuario").value;
        let superficieTerreno = parseInt(document.getElementById("superficieTerreno").value);

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
           
        

        function Usuario(nombre, correo) {
            this.nombre = nombre
            this.correo = correo
        }

        let usuario = new Usuario(nombreUsuario, emailUsuario)

        function Propiedad(terreno, casa, habitaciones, banos){
            this.terreno = terreno
        }
        
        let propiedad = new Propiedad(superficieTerreno)
        
        if (propiedad.terreno > 15000){
            element = document.createElement("p")
            element.setAttribute("class", "container ml-5 my-5 py-5")
            textNode = document.createTextNode("Para terrenos con superficie aproximada de " + propiedad.terreno + " el servicio de tasacion tiene un valor de 4 UF");
            element.appendChild(textNode)
            document.getElementById("formularioCasa").appendChild(element)
        } else {
            element = document.createElement("p")
            element.setAttribute("class", "container ml-5 my-5 py-5")
            textNode = document.createTextNode("Para terrenos con superficie aproximada de " + propiedad.terreno + " el servicio de tasacion tiene un valor de 3 UF");
            element.appendChild(textNode)
            document.getElementById("formularioCasa").appendChild(element)
        }
    }
}