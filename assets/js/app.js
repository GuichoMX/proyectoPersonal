$(window).ready(function(){

    
    $('#formulario-login').on('submit', function(e){
        e.preventDefault();

        let usuario = $('#txt_usuario').val();
        let pass = $('#txt_contrasena').val();

        $.post('assets/config/controlador.php', {usuario, pass}, function(data){
            data = JSON.parse(data);
            console.log(data);
        });
    })
    
});