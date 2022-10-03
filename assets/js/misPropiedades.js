/* ---------------------------------- FUNCION PARA BORRAR CON EL BOTON ---------------------------------- */

// let div = document.querySelector('#contenidoMain');

// div.addEventListener('click', (event) =>{
//     if(event.target.tagName === 'BUTTON'){
//         let button = event.target;
//         let div1 = button.parentNode;
//         let div2 = div1.parentNode;
//         let div3 = div2.parentNode;
//         let div4 = div3.parentNode;
//         let div = div4.parentNode;
//         if(button.textContent === 'Eliminar'){
//             div.removeChild(div4);
//         }
//     }
// });

/* ---------------------------------- FUNCION PARA ABRIR VENTANA EMERGENE DE CONFIRMACION DE BORRADO ---------------------------------- */

// document.querySelector('#btnsubmit2').addEventListener('click', function(){
//     document.querySelector('.confirmation').classList.add('active'),
//     document.getElementById('btnsubmit2').style.zIndex = "-1";
// });

function closeCont(){
    document.querySelector('.container_popup').style.display = "none";
    document.querySelector('.confirmation').classList.remove('active'),
    document.getElementById('btnsubmit2').style.zIndex = "1";
}


/* ---------------------------------- FUNCION COMBINADA ---------------------------------- */

let div = document.querySelector('#contenidoMain');

div.addEventListener('click', (event) =>{
    if(event.target.tagName === 'BUTTON'){
        let button = event.target;
        let div1 = button.parentNode;
        let div2 = div1.parentNode;
        let div3 = div2.parentNode;
        let div4 = div3.parentNode;
        let div = div4.parentNode;
        document.querySelector('.container_popup').style.display = "flex";
        document.querySelector('.confirmation').classList.add('active'),
        document.getElementById('btnsubmit2').style.zIndex = "-1";

        document.querySelector('#yes-delete').addEventListener('click',function(){
            if(button.textContent === 'Eliminar'){
                div.removeChild(div4);
                closeCont();
                // document.getElementsByClassName('main').style.
            }
        })
    }
});