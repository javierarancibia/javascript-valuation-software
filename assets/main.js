//Siempre cargarse desde arriba
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};


// Boton cotizar informe casa
document.getElementById("boton1").addEventListener("click", cotizarCasa, {once:true})

// Boton cotizar informe terreno
document.getElementById("boton2").addEventListener("click", cotizarTerreno, {once:true})

// Boton cotizar informe Depto
document.getElementById("boton3").addEventListener("click", cotizarDepto, {once:true})

// Boton cotizar informe oficina
document.getElementById("boton4").addEventListener("click", cotizarOficina, {once:true})


let el3 = document.getElementById("ptasar");
el3.addEventListener("click", tasar);

function tasar() {
    $('html, body').animate({
        scrollTop: $('#tasar').offset().top
    }, 10);

}


let el2 = document.getElementById("cotizador");
el2.addEventListener("click", cotizacion);

function cotizacion() {
    $('html, body').animate({
        scrollTop: $('#cotizacion').offset().top
    }, 10);
    
}


let el = document.getElementById("contacto");
el.addEventListener("click", contacto);

function contacto() {
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





