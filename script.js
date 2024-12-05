const popupOverlay = document.getElementById('popup-overlay');
const closePopupBtn = document.getElementById('close-popup');
const clearBtn = document.getElementById('clear-button');
const registerForm = document.getElementById('register-form');


function register(){
    popupOverlay.classList.add('active');
}

closePopupBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
});

clearBtn.addEventListener('click', () => {
    registerForm.reset();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    popupOverlay.classList.remove('active');
});

const checkbox = document.getElementById('sidebar-active');


const scrollToRegister = document.getElementById('scroll-to-register');
const registerButton = document.getElementById('register-button');

scrollToRegister.addEventListener('click', (e) => {
    e.preventDefault();


    scrollToRegister.addEventListener('click', () => {
        checkbox.checked = false;
    });

    const buttonPosition = registerButton.getBoundingClientRect().top + window.pageYOffset;

    const offset = window.innerHeight / 2 - registerButton.offsetHeight / 2;

    window.scrollTo({
        top: buttonPosition - offset,
        behavior: 'smooth', 
    });
});


const scrollTodomine = document.getElementById('scroll-to-domine');
const workid = document.getElementById('topic');

scrollTodomine.addEventListener('click', (e) => {
    e.preventDefault();

    scrollTodomine.addEventListener('click', () => {
        checkbox.checked = false;
    });

    const work = workid.getBoundingClientRect().top + window.pageYOffset;

    const offset = window.innerHeight / 5.2 - workid.offsetHeight / 1.5;

    window.scrollTo({
        top: work - offset,
        behavior: 'smooth', 
    });
});


const scrollTocontact = document.getElementById('scroll-to-contact');
const contact = document.getElementById('contact-section');

scrollTocontact.addEventListener('click', (e) => {
    e.preventDefault();

    scrollTocontact.addEventListener('click', () => {
        checkbox.checked = false;
    });


    const con = contact.getBoundingClientRect().top + window.pageYOffset;

    const offset = window.innerHeight / 2 - contact.offsetHeight / 2.5;

    window.scrollTo({
        top: con - offset,
        behavior: 'smooth', 
    });
});


document.getElementById('register-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        domain: document.getElementById('domain').value
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxgWI7KXeBuSxr2j9wgqwDlFaQbPX99foEp-rEC0ANCQMEsHUjbiWkVAQXYf0Z4pppf/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        const toast = document.getElementById('toast');
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);

        this.reset();

    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});
