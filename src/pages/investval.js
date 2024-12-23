// validation.js
export function validateName(name) {
    const regex = /^[A-Za-zА-Яа-яЁё]+$/; 
    return regex.test(name.trim());
}

export function validateSurname(surname) {
    const regex = /^[A-Za-zА-Яа-яЁё]+$/; 
    return regex.test(surname.trim());
}

export function validatePhone(phone) {
    const regex = /^\+?[0-9]{9,11}$/; 
    return regex.test(phone);
}

export function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
