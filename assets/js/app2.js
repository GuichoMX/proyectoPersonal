let correctEmail = 'escobedotrenado@gmail.com'
let correctPwd = 'test123'

let emailInput = document.getElementById('txt_usuario')
let pwdInput = document.getElementById('txt_contrasena')

let button = document.getElementById('btnSubmit')

const logIn = function(e){
    console.log(usuario);
    console.log(pass);
    e.preventDefault();
    if (correctEmail === emailInput.value && correctPwd === pwdInput.value){
        location.href = 'mainAdmin.html';
        button.disabled = true
        button.removeEventListener('click', logIn)
    } else{
        swal.fire({
            title: 'Error',
            icon: 'error',
            text: 'Usuario o contraseña incorrecta, intenta nuevamente!'
        });
    }
}

button.addEventListener('click', logIn)

