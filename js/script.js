// creazione delle variabili necessarie
const countdown = document.getElementById('countdown');

countdown.innerText = '10';

const Count30 = setInterval(CountdownNumb, 1000);

let numb = 10;

function CountdownNumb() {
    console.log(numb);
        numb--;
        countdown.innerText = numb;

    if(numb===0){
        clearInterval(Count30);
    }
}