$(window).ready(function(){

    
    $('#formulario-login').on('submit', function(e){
        e.preventDefault();

        let usuario = $('#txt_usuario').val();
        let pass = $('#txt_contrasena').val();

        $.post('config/controlador.php', {usuario, pass}, function(data){
            console.log(data);
        });
    })
    
});