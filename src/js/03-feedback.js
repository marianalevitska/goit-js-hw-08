import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormComplete, 500));

onFormShow();
    function onObjectSet() {
     return {
        email: form.elements.email.value,
        message: form.elements.message.value,
        };
    }
function onFormComplete() {
    const fields = onObjectSet();
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fields));
}

function onFormSubmit(e) {
    e.preventDefault();
    if (form.elements.email.value && form.elements.message.value) {
        console.log(onObjectSet())
        e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    } 
}

function onFormShow() {
    const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY)
    if (savedMessage) {
        const inputFill = JSON.parse(savedMessage);
        form.elements.email.value = inputFill.email;
        form.elements.message.value = inputFill.message;
 }
    
}