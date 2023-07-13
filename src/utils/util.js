export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        callback(data, form);
    }
}

export function navTrigger() {
    const nav = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const content = document.querySelector('section');

    nav.classList.toggle('show');
    hamburger.classList.toggle('show');
    content.classList.toggle('show');
}