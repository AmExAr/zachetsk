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

export function validateUniversity(university) {
    return university.trim().length > 0; 
}

export function validateFaculty(faculty) {
    return faculty.trim().length > 0;
}

export function validateCourse(course) {
    return Number.isInteger(Number(course)) && Number(course) > 0; 
}

export function validateSpecialty(specialty) {
    return specialty.trim().length > 0; 
}
