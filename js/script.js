// creazione delle variabili necessarie
const countdown = document.getElementById('countdown');
const randomList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const message = document.getElementById('message');
// creo variabile per prendere gli imput nel div
const inputGroup = document.querySelectorAll('#input-group input');

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

    if (hasDuplicates(userNumbers) === true) {
        console.log('ci sono numeri che si ripetono');
        message.innerText = 'ERRORE: ci sono numeri che si ripetono';
        message.classList.remove('text-success');
        message.classList.add('text-danger');

    } else {
        message.classList.add('text-success');
        message.classList.remove('text-danger');
        // ciclo per contare i numeri giusti
        let guessed = [];
        let count = 0;
        for (i = 0; i < randomNumbers.length; i++) {

            if (randomNumbers.includes(userNumbers[i])) {
                count++;
                guessed.push(userNumbers[i]);
            } 
        }

        console.log(`hai indovinato ${count} numeri!  (${guessed.join(', ')})`);
        message.innerText = `hai indovinato ${count} numeri! (${guessed.join(', ')})`;

    }

})

// FUNZIONI:

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

// Funzione per vedere se ci sono doppioni
function hasDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) !== index).length > 0;
}