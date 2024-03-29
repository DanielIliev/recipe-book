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
    
}