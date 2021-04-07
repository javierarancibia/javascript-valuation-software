//Siempre cargarse desde arriba
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};


let arrow = document.getElementById("arrow");
arrow.addEventListener("click", subir)

let arrow2 = document.getElementById("arrow2");
arrow2.addEventListener("click", subir)

let arrow3 = document.getElementById("arrow3");
arrow3.addEventListener("click", subir)


function subir() {
    window.scrollTo(0,0);
}



// Boton cotizar informe casa
// document.getElementById("boton1").addEventListener("click", cotizarCasa, {once:true})    -- {once:true} es para ejecutar funcion solo una vez
document.getElementById("boton1").addEventListener("click", cotizarCasa)

// Boton cotizar informe terreno
document.getElementById("boton2").addEventListener("click", cotizarTerreno)

// Boton cotizar informe Depto
document.getElementById("boton3").addEventListener("click", cotizarDepto)

// Boton cotizar informe oficina
document.getElementById("boton4").addEventListener("click", cotizarOficina)


let el3 = document.getElementById("ptasar");
el3.addEventListener("click", tasar);

function tasar() {
    closeNav()
    $('html, body').animate({
        scrollTop: $('#tasar').offset().top
    }, 10);

}


let el2 = document.getElementById("cotizador");
el2.addEventListener("click", cotizacion);

function cotizacion() {
    closeNav()
    $('html, body').animate({
        scrollTop: $('#cotizacion').offset().top
    }, 10);
    
}


let el = document.getElementById("contacto");
el.addEventListener("click", contacto);

function contacto() {
    closeNav()
    $('html, body').animate({
        scrollTop: $('#form').offset().top
    }, 10);

}



// Ajax de la UF
let valorUf = 0
$(document).ready(function() {
    $.ajax({
        url: 'https://mindicador.cl/api', 
        type: 'GET',
        dataType: 'json'
    })
    .done(function(data) {
        $('#ufInfo').append('El valor de la UF de hoy es $' + data.uf.valor)
             
    })
    .fail(function(xhr, status, error) {
        console.log(error)
    })
})



$('#btn2').click(function() {
    $('body').load('/');
})


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}




