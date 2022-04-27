var container = document.querySelector('.pagedois');
var card = document.querySelector('.main'); 

function clickmouse(letra) {
    n1 = letra
}

function submeter() {
    if(container.style.display === 'none') {
        container.style.display = 'flex';
        
    } else {
        container.style.display = 'flex';
        card.style.display = 'none';
    }


    console.log(n1)
    document.getElementById("numb").innerHTML=(n1);
}