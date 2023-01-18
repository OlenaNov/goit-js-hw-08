
import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');
// const emailInput = document.querySelector('input[name="email"]');
// const messageTextarea = document.querySelector('textarea[name="message"]');
const LOCAL_STOREGE_KEY = 'feedback-form-state';
const formData = {};

formFeedback.addEventListener('input', throttle(onFormFeedbackSave, 500));

function onFormFeedbackSave(e) {
    // localStorage.setItem(JSON.stringify(FORM_DATA[e.target.name], e.target.value));
    // localStorage.setItem(FORM_DATA, JSON.stringify({${e.target.name}: ${e.target.value}}));
    // const name = e.target.name;
    // const value = e.target.value;
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCAL_STOREGE_KEY, JSON.stringify(formData));
    // localStorage.setItem(FORM_DATA, JSON.stringify({name: value}));
};

formFeedback.addEventListener('submit', onFormFeedbackSubmit);

function onFormFeedbackSubmit(e) {
    e.preventDefault();
    // if(!emailInput.value || !messageTextarea.value) {
    //     return;
    // }
    const feedbackFormObj = JSON.parse(localStorage.getItem(LOCAL_STOREGE_KEY));
    console.log(feedbackFormObj);
    localStorage.removeItem(LOCAL_STOREGE_KEY);
    formFeedback.reset()
};

window.addEventListener('load', onFormFeedbackGet);

function onFormFeedbackGet() {

    const feedbackFormState = JSON.parse(localStorage.getItem(LOCAL_STOREGE_KEY)) || "";
console.log(formFeedback.elements);
// console.log(formFeedback.children[0]);
// console.dir(formFeedback.children[0]);
// console.log(feedbackFormState);
// console.log(feedbackFormState[0]);
    
    // if(feedbackFormState) {
        // formFeedback.input[email].value = feedbackFormState.email;
        // formFeedback.textarea[message].value = feedbackFormState.message;
// console.log(feedbackFormState);
//     };
// }


try{

} catch(e) {

    }
    finally{
        
        }
    
