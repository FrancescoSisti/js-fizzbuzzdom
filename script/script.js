console.log(`JS OK`);


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    // Seleziona il contenitore principale nel DOM dove verranno aggiunti gli elementi


    // Loop attraverso i numeri da 1 a 100
    for (let i = 1; i <= 100; i++) {
        let element = document.createElement('div');
        element.classList.add('col-1', 'd-flex', 'align-items-center', 'justify-content-center');


        // Controlla se il numero è multiplo di 3 e 5
        if (i % 3 === 0 && i % 5 === 0) {
            element.textContent = 'FizzBuzz';
            element.classList.add('fizzbuzz');

            // Controlla se il numero è multiplo di 3
        } else if (i % 3 === 0) {
            element.textContent = 'Fizz';
            element.classList.add('fizz');

            // Controlla se il numero è multiplo di 5
        } else if (i % 5 === 0) {
            element.textContent = 'Buzz';
            element.classList.add('buzz');

            // Se il numero non è multiplo di 3 o 5
        } else {
            element.textContent = i;
            element.classList.add('number');
        }

        container.appendChild(element);
    }

    validateFizzBuzz();
});

// Parte di validazione
function validateFizzBuzz() {
    const elements = document.querySelectorAll('#container > div');
    let isValid = true;

    elements.forEach((element, index) => {
        const number = index + 1;
        const text = element.textContent;
        const classes = element.classList;

        if (number % 3 === 0 && number % 5 === 0) {
            if (text !== 'FizzBuzz' || !classes.contains('fizzbuzz')) {
                isValid = false;
                console.error(`Valore errato per ${number}`)
            }
        } else if (number % 3 === 0) {
            if (text !== 'Fizz' || !classes.contains('fizz')) {
                isValid = false;
                console.error(`Valore errato per ${number} `)
            }
        } else if (number % 5 === 0) {
            if (text !== 'Buzz' || !classes.contains('buzz')) {
                isValid = false;
                console.error(`Valore errato per ${number} `)
            }
        }
    });

    if (isValid) {
        console.log('Tutti gli elementi sono inseriti correttamente.');
    } else {
        console.error('Elementi in pagina errati.');
    }
}
