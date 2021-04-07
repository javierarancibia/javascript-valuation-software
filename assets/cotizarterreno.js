function cotizarTerreno() {
    
    // Vacia div del formulario
    $('#formularioCasa').empty();

    // Scroll al div del formulario
    $('html, body').animate({
        scrollTop: $('#formularioCasa').offset().top
    }, 10);

    //Margenes a div con JQuery
    // $("#formularioCasa").css("margin-top", "50px")
    $("#formularioCasa").css("padding-bottom", "100px")

    // Inhabilita los otros botones
    // let botonTerreno = document.getElementById("boton1")
    // botonTerreno.disabled = true
    // botonTerreno = document.getElementById("boton3")
    // botonTerreno.disabled = true
    // botonTerreno = document.getElementById("boton4")
    // botonTerreno.disabled = true
    
        
    // Generacion del titulo
    let element = document.createElement("h3")
    element.setAttribute("class", "my-4 text-white")
    element.setAttribute("style", "font-family: 'Lato', sans-serif; font-weight: bold")
    let textNode = document.createTextNode("Caracteristicas del terreno")

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
   


    // Input Superficie de Terreno
    element = document.createElement("div")
    element.setAttribute("id", "superficieTerreno")
    element.setAttribute("style", "padding-right: 0px; padding-left: 0px; font-family: 'Lato', sans-serif;")
    document.getElementById("formularioCasa").appendChild(element)

    select = $("<select></select>");
    let supTerreno = ["Selecciona superficie de terreno estimada", "5 m² - 500 m²", "501 m² - 1.000 m²", "1.001 m² - 5.000 m²", "5.001 m² - 10.000 m²", "10.001 m² - 20.000 m²"]

    for(let i=0; i < supTerreno.length; i++){
    let option = $("<option></option>");
    select.addClass("container ml-5 mb-5 form-control form-control-lg")
    select.attr("id", "landVal")
    $(option).html(supTerreno[i]);
    $(select).append(option);
    }

    $("#superficieTerreno").append(select);


    
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
        let superficieTerreno = document.getElementById("landVal").value

        if (direccionPropiedad == "" || direccionPropiedad == null){
            swal("Error!", "Debes ingresar una direccion valida", "error");
            return false
        }
        if (ciudadPropiedad == "Selecciona una ciudad"){
            swal("Error!", "Debes ingresar una ciudad", "error");
            return false
        }
        if (superficieTerreno == "Selecciona superficie de terreno estimada"){
            swal("Error!", "Debes ingresar una superficie de terreno", "error");
            return false
        }
               

        // Inhabilita los otros botones
        let botonForm = document.getElementById("botonFormulario")
        botonForm.disabled = true

        function Propiedad(terreno, direccion, ciudad, ){
            this.terreno = terreno
            this.direccion = direccion
            this.ciudad = ciudad
        }

        let priceimg = document.getElementById("priceimg");
        priceimg.setAttribute("src", "assets/img/land2.png")
        
        let propiedad = new Propiedad(superficieTerreno, direccionPropiedad, ciudadPropiedad)
        $('.cartaPrecios').fadeIn(3500)
       
        // Vacia div del mapa
        $('#mapa').empty();
        let mapa = document.createElement("iframe")
        mapa.setAttribute("width", "1100")
        mapa.setAttribute("height", "450")
        mapa.setAttribute("frameborder", "0")
        mapa.setAttribute("style", "border: 0; padding-top: 1rem;")
        mapa.setAttribute("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyCX9VNRtLubMN2d0Ku3DBqBB_42U9g5oDk&q=" + direccionPropiedad + "," + ciudadPropiedad)
        document.getElementById("mapa").appendChild(mapa)

        // Vacia div del precio
        $('#precioCotizacion').empty();        
        if (propiedad.ciudad === 'Valparaiso' || propiedad.ciudad === 'Viña del Mar' || propiedad.ciudad === 'Quilpué'){
            let precio = document.createTextNode('Precio Final: $88.000');
            let nodoPrecio = document.getElementById('precioCotizacion');
            nodoPrecio.appendChild(precio)


        } else{
            let precio = document.createTextNode('Precio Final: $95.000');
            let nodoPrecio = document.getElementById('precioCotizacion');
            nodoPrecio.appendChild(precio)
            
        }

        document.getElementById("contactbutton").addEventListener("click", getContact)

        function getContact(){
            $('#contactbutton').fadeIn(4000)
            $('html, body').animate({
                scrollTop: $('#form').offset().top
            }, 10);

        }
        

        // Scroll al div del formulario
        $('html, body').animate({
            scrollTop: $('#cartaPrecios').offset().top
        }, 10);

        //Margenes a div con JQuery
        $("#cartaPrecios").css("margin-top", "13rem")
        $("#cartaPrecios").css("margin-bottom", "600px")



    }
}