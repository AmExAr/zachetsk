export function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function outputData(email) {
    if (email !== "") {
        alert('Почта: ' + email);
    } else {
        alert("Пожалуйста, корректно заполните все поля");
    }
}
