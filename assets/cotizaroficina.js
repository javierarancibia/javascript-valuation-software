function cotizarOficina() {
    

    // Scroll al div del formulario
    $('html, body').animate({
        scrollTop: $('#formularioCasa').offset().top
    }, 10);

    //Margenes a div con JQuery
    // $("#formularioCasa").css("margin-top", "50px")
    $("#formularioCasa").css("padding-bottom", "100px")

    // Inhabilita los otros botones
    let botonTerreno = document.getElementById("boton1")
    botonTerreno.disabled = true
    botonTerreno = document.getElementById("boton2")
    botonTerreno.disabled = true
    botonTerreno = document.getElementById("boton3")
    botonTerreno.disabled = true
    
        
    // Generacion del titulo
    let element = document.createElement("h3")
    element.setAttribute("class", "my-4 text-white")
    element.setAttribute("style", "font-family: 'Lato', sans-serif; font-weight: bold")
    let textNode = document.createTextNode("Caracteristicas de la propiedad")

    element.appendChild(textNode)
    document.getElementById("formularioCasa").appendChild(element)

    // Generacion de los inputs

    // Input de Direccion de la propiedad 
    element = document.createElement("input")

    document.getElementById("formularioCasa").appendChild(element)

    element.setAttribute("class", "mb-5 form-control form-control-lg")
    element.setAttribute("style", "font-family: 'Lato', sans-serif;")
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Direccion de la propiedad")
    element.setAttribute("id", "direccionPropiedad")


    // Input de ciudad
    element = document.createElement("div")
    element.setAttribute("id", "ciudadPropiedad")
    element.setAttribute("style", "padding-right: 0px; padding-left: 0px; font-family: 'Lato', sans-serif;")

    document.getElementById("formularioCasa").appendChild(element)

    let select = $("<select></select>");
    let cities = ["Selecciona una ciudad", "Valparaíso", "Viña del Mar","Algarrobo", "Cabildo", "Calera", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas", "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Villa Alemana", "Zapallar" ]

    for(let i=0; i < cities.length; i++){
    let option = $("<option></option>");
    select.addClass("container ml-5 mb-5 form-control form-control-lg")
    select.attr("id", "cityVal")
    $(option).html(cities[i]);
    $(select).append(option);
    }

    $("#ciudadPropiedad").append(select);
   

    // Input Superficie de Casa
    element = document.createElement("div")
    element.setAttribute("id", "superficieCasa")
    element.setAttribute("style", "padding-right: 0px; padding-left: 0px; font-family: 'Lato', sans-serif;")
    document.getElementById("formularioCasa").appendChild(element)

    select = $("<select></select>");
    let supCasa = ["Selecciona superficie construida estimada", "5 m² - 50 m²", "51 m² - 100 m²", "101 m² - 150 m²", "151 m² - 200 m²", "201 m² - 250 m²", "251 m² - 300 m²", "301 m² - 350 m²"]

    for(let i=0; i < supCasa.length; i++){
    let option = $("<option></option>");
    select.addClass("container ml-5 mb-5 form-control form-control-lg")
    select.attr("id", "interiorVal")
    $(option).html(supCasa[i]);
    $(select).append(option);
    }

    $("#superficieCasa").append(select);


    element = document.createElement("div")
    element.setAttribute("id", "numHabitaciones")
    element.setAttribute("style", "padding-right: 0px; padding-left: 0px; font-family: 'Lato', sans-serif;")
    document.getElementById("formularioCasa").appendChild(element)

    select = $("<select></select>");
    let numHabitaciones = ["Selecciona un numero de oficinas privadas (si existen)", "1", "2", "3", "4", "5 o mas"]

    for(let i=0; i < numHabitaciones.length; i++){
    let option = $("<option></option>");
    select.addClass("container ml-5 mb-5 form-control form-control-lg")
    select.attr("id", "habitacionesVal")
    $(option).html(numHabitaciones[i]);
    $(select).append(option);
    }

    $("#numHabitaciones").append(select);

    
    // Boton
    let botonFormulario = document.createElement("button");
    let textButton = document.createTextNode("Cotizar")

    botonFormulario.appendChild(textButton)
    botonFormulario.setAttribute("type", "button");
    botonFormulario.setAttribute("class", "btn btn-outline-light btn-lg btn-block px-5 py-1 text-center");
    botonFormulario.setAttribute("style", "font-family: 'Lato', sans-serif; font-weight: bold");
    botonFormulario.setAttribute("id", "botonFormulario");
    document.getElementById("formularioCasa").appendChild(botonFormulario)

    document.getElementById("botonFormulario").addEventListener("click", getData)
    



    // Funcion obtener datos
    
    function getData() {
        let direccionPropiedad = document.getElementById("direccionPropiedad").value;
        let ciudadPropiedad = document.getElementById("cityVal").value;
        let superficieCasa = document.getElementById("interiorVal").value;
        let numeroHabitaciones = document.getElementById("habitacionesVal").value;

        if (direccionPropiedad == "" || direccionPropiedad == null){
            swal("Error!", "Debes ingresar una direccion valida", "error");
            return false
        }
        if (ciudadPropiedad == "Selecciona una ciudad"){
            swal("Error!", "Debes ingresar una ciudad", "error");
            return false
        }
        if (superficieCasa == "Selecciona superficie construida estimada"){
            swal("Error!", "Debes ingresar una superficie de casa valido", "error");
            return false
        }
        if (numeroHabitaciones == "Selecciona un numero de oficinas privadas (si existen)"){
            swal("Error!", "Debes ingresar un numero de oficinas", "error");
            return false
        }
               

        // Inhabilita los otros botones
        let botonForm = document.getElementById("botonFormulario")
        botonForm.disabled = true

        function Propiedad(casa, direccion, ciudad, habitaciones){
            this.casa = casa
            this.direccion = direccion
            this.ciudad = ciudad
            this.habitaciones = habitaciones
        }

        let priceimg = document.getElementById("priceimg");
        priceimg.setAttribute("src", "assets/img/office2.png")
        
        let propiedad = new Propiedad(superficieCasa, direccionPropiedad, ciudadPropiedad, numeroHabitaciones)
        $('.cartaPrecios').fadeIn(3500)
       
        

        
        if (propiedad.ciudad === 'Valparaiso' || propiedad.ciudad === 'Viña del Mar' || propiedad.ciudad === 'Quilpué'){
            let precio = document.createTextNode('Precio Final: $105.000');
            let nodoPrecio = document.getElementById('precioCotizacion');
            nodoPrecio.appendChild(precio)


        } else{
            let precio = document.createTextNode('Precio Final: $125.000');
            let nodoPrecio = document.getElementById('precioCotizacion');
            nodoPrecio.appendChild(precio)
            
        }

        document.getElementById("contactbutton").addEventListener("click", getContact)

        function getContact(){
            $('#typeForm').fadeIn(4000)
            $('html, body').animate({
                scrollTop: $('#typeForm').offset().top
            }, 10);

        }
        

        // Scroll al div del formulario
        $('html, body').animate({
            scrollTop: $('#cartaPrecios').offset().top
        }, 10);

        //Margenes a div con JQuery
        // $("#cartaPrecios").css("margin-top", "450px")
        $("#cartaPrecios").css("margin-bottom", "600px")



    }
}