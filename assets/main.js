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

// Ajax de la UF
let valorUf = 0
$(document).ready(function() {
    $.ajax({
        url: 'https://mindicador.cl/api', 
        type: 'GET',
        dataTyoe: 'json'
    })
    .done(function(data) {
        $('#ufInfo').append('El valor de la UF de hoy es $' + data.uf.valor)
        valorUf = data.uf.valor
        $('#btn').one('click', function() {
            let valorEnt = $('#ufQuestion').val()
            let resultado = valorEnt * valorUf
            resultado = resultado.toFixed(1)
            let resultadoFinal = document.createTextNode(resultado);
            let valorSalida = document.getElementById('ufAnswer')
            valorSalida.appendChild(resultadoFinal);
        })

        
    })
    .fail(function(xhr, status, error) {
        console.log(error)
    })
})



$('#btn2').click(function() {
    $('body').load('/');
})





