
import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');

const LOCAL_STOREGE_KEY = 'feedback-form-state';
let formData = {};

formFeedback.addEventListener('input', throttle(onFormFeedbackSave, 500));

function onFormFeedbackSave(e) {
    formData[e.target.name] = e.target.value;

    try{
        localStorage.setItem(LOCAL_STOREGE_KEY, JSON.stringify(formData));
    } catch(err) {
    console.log(err);
        }
};

formFeedback.addEventListener('submit', onFormFeedbackSubmit);

function onFormFeedbackSubmit(e) {
    e.preventDefault();

    const formData = JSON.parse(localStorage.getItem(LOCAL_STOREGE_KEY));
    console.log(formData);
    localStorage.removeItem(LOCAL_STOREGE_KEY);
    formFeedback.reset()
};

window.addEventListener('load', onFormFeedbackGet);

function onFormFeedbackGet() {

    const feedbackFormState = localStorage.getItem(LOCAL_STOREGE_KEY);

    if(!localStorage.getItem(LOCAL_STOREGE_KEY)) {
        return;
    };
    try {
        formData = JSON.parse(feedbackFormState);
    } catch(err) {
        console.log(err);
    };

    returnValueForm();
};

function returnValueForm() {
    const objValues = Object.values(formData);

    objValues.forEach((value, idx) => {
        formFeedback.elements[idx].value = value;
    })
};
