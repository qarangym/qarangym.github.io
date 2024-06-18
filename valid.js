const submit = document;
const storage = localStorage;

function validateName(name) {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateUIN(uin) {
    const numberRegex = /^\d+$/;
    return numberRegex.test(uin) && uin.length <= 16;
}

function checkCVV(cvv) {
    const numberRegex = /^\d+$/;
    return numberRegex.test(cvv) && cvv.length === 3;
}

function checkPassword(password) {
    return password.length >= 5;
}

function validateForm() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value; 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('surnameError').textContent = ''; 
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validate each field and display error messages
    if (!validateName(name)) {
        document.getElementById('nameError').textContent = 'Invalid name format';
    }

    if (!validateName(surname)) {
        document.getElementById('surnameError').textContent = 'Invalid surname format';
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
    }
    if (!checkPassword(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least \n 5 characters long';
    }
}

function validatePay() {
    const name = document.getElementById('name').value;
    const uin = document.getElementById('uin').value;
    const cvv = document.getElementById('cvv').value;

    document.getElementById('nameError').textContent = '';
    document.getElementById('uinError').textContent = '';
    document.getElementById('cvvError').textContent = '';

    if (!validateName(name)) {
        document.getElementById('nameError').textContent = 'Invalid name format';
    }

    if (!validateUIN(uin)) {
        document.getElementById('uinError').textContent = 'Please enter only numbers (max 16 characters)';
    }

    if (!checkCVV(cvv)) {
        document.getElementById('cvvError').textContent = 'Please enter 3-digit CVV';
    }
}

submit.getElementById('submitup').addEventListener('click', function(event) {
    event.preventDefault();

    // Validate form before submission
    validateForm();

    // If there are validation errors, prevent form submission
    if (
        document.getElementById('nameError').textContent ||
        document.getElementById('surnameError').textContent ||
        document.getElementById('emailError').textContent ||
        document.getElementById('passwordError').textContent
    ) {
        return;
    }

    const id = 'user' + Date.now();

    var data = {
        name: submit.getElementById('name').value,
        surname: submit.getElementById('surname').value,
        password: submit.getElementById('password').value,
        email: submit.getElementById('email').value,
    };

    if (!check(data.email)) {
        document.getElementById('emailError').textContent = 'Email already exists';
    }

    var jsonData = JSON.stringify(data);
    storage.setItem(id, jsonData);

    var url = 'cab.html?' + new URLSearchParams(data);
    window.location.href = url;
});
