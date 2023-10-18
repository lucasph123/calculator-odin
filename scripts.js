
const btn = document.querySelector('button');
const display = document.querySelector('.display');

//só ta pegando o 1 pq nao colocquei query selector all, mas nao funcionas
    btn.addEventListener('click', function(e)
    {''
        display.textContent = e.textContent;
    } );