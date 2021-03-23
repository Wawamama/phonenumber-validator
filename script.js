import {checkTelephoneNumber} from "./assets/functions.js" ;

const result = document.getElementById('result');
const phonenumber = document.getElementById('phonenumber');
let errors = document.getElementById('errors');

let error = 'Invalid number'

console.log(checkTelephoneNumber('111-555-7655'));

document.getElementById('form').addEventListener("submit", function(e) {
    e.preventDefault();
    console.log('button is calling scriptJS');
    if (checkTelephoneNumber(phonenumber.value)) {
        result.textContent = 'Thank you, I will call you'
        errors.style.display = 'none'
    } else {
        result.textContent = error;
        errors.style.display = 'block';
    }
});



