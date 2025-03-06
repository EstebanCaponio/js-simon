// creazione delle variabili necessarie
const countdown = document.getElementById('countdown');
const randomList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
// creo variabile per prendere gli imput nel div
const inputGroup = document.querySelectorAll('#input-group input');

// ul.innertext=''
// ul.innertext =ul.innertext + `<li>${numerorandom}</li>`

// programmaz. countdown
countdown.innerText = '10';

const Count30 = setInterval(CountdownNumb, 1000);

let numb = 10;

function CountdownNumb() {
    console.log(numb);
    numb--;
    countdown.innerText = numb;

    if (numb === 0) {
        clearInterval(Count30);
        randomList.classList.add("d-none");
        form.classList.remove("d-none");
    }
}

// creo array che mi serve per confrontare i numeri che non devono essere uguali
const randomNumbers = [];

// generazione numeri random
for (i = 0; i < 5; i++) {
    // creo <li>
    const liNumb = document.createElement('li');
    // verifica che i numeri non si ripetano
    let number
    do {
        number = Random50();
    } while (randomNumbers.includes(number));

    randomNumbers.push(number);

    liNumb.innerText = randomNumbers[i];
    randomList.append(liNumb);

}
console.log(randomNumbers);


form.addEventListener('submit', function (event) {
    // annullo refresh pagina
    event.preventDefault();
    console.log('sto clicckando');

    // evoco la funzione per creare array input con una variabile
    let userNumbers = getUserNumbers();
    console.log(userNumbers);


    let count = 0;
    for (i = 0; i < randomNumbers.length; i++) {

        if (randomNumbers.includes()) {

        } else {
            count++
            console.log(count);
        }
    }









})


// funzione nmeri random 1-50
function Random50() {
    return Math.floor(Math.random() * 50) + 1;
}


// Funzione per ottenere i valori inseriti
function getUserNumbers() {
    let Numbers = [];

    inputGroup.forEach(input => {
        // Converti il valore in numero intero
        let value = parseInt(input.value, 10);
        // Assicura che il valore sia un numero valido 
        if (!isNaN(value)) {
            Numbers.push(value);
        }
    });

    return Numbers;
}