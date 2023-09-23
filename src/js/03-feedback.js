import throttle from 'lodash/throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const formStateKey = 'feedback-form-state';

const saveFormStateToLocalStorage = () => {
    const formState = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem(formStateKey, JSON.stringify(formState));
};

const loadFormStateFromLocalStorage = () => {
    const storedState = localStorage.getItem(formStateKey);
    if (storedState) {
        const formState = JSON.parse(storedState);
        emailInput.value = formState.email || '';
        messageTextarea.value = formState.message || '';
    }
};

const throttledSaveFormState = throttle(saveFormStateToLocalStorage, 500);

emailInput.addEventListener('input', throttledSaveFormState);
messageTextarea.addEventListener('input', throttledSaveFormState);

loadFormStateFromLocalStorage();

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageTextarea.value,
    };

    console.log(formData);

    emailInput.value = '';
    messageTextarea.value = '';

    localStorage.removeItem(formStateKey);
});

