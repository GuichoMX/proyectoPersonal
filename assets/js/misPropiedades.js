let div = document.querySelector('#contenidoMain');

div.addEventListener('click', (event) =>{
    if(event.target.tagName === 'BUTTON'){
        let button = event.target;
        let div1 = button.parentNode;
        let div2 = div1.parentNode;
        let div3 = div2.parentNode;
        let div4 = div3.parentNode;
        let div = div4.parentNode;
        if(button.textContent === 'Borrar'){
            div.removeChild(div4);
        }
    }
});