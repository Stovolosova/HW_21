const form = document.getElementById('Registration-form');
const firstNameElement = form.elements['first-name'];
const lastNameElement = form.elements['last-name'];
const dateOfBirthElement = form.elements['Date-of-birth'];
const genderElement = form.elements['gender'];
const cityElement = form.elements['city'];
const addressElement = form.elements['address'];
const checkboxElements = form.elements['language'];

const NAME_ERROR = 'Please enter a name';
const LAST_NAME_ERROR = 'Please enter a last name';
const DATE_OF_BIRTH_ERROR = 'Please enter date of birth';
const GENDER_ERROR = 'Please select a value';
const CITY_ERROR = 'Please select a value';
const ADDRESS_ERROR = 'Please enter the address';
const LANGUAGE_ERROR = 'Please select a value';

const tableBody = document.createElement('tbody');
const table = document.getElementById('Userdat');
table.appendChild(tableBody); 

function showError(el, message) {
    const errorPlaceholder = el.parentNode.querySelector('small');
    errorPlaceholder.textContent = message;
    el.classList.add('error');
    el.classList.remove('success');
}

function showSuccess(el) {
    const errorPlaceholder = el.parentNode.querySelector('small');
    errorPlaceholder.textContent = '';
    el.classList.add('success');
    el.classList.remove('error');
}


function validateFirstName(el, message) {
    const name = el.value.trim();
    if (name !== '') {
        showSuccess(el, message);
        return true;
    } else {

        showError(el, message);
        return false;
    }
}

function validateLastName(el, message) {
    const name = el.value.trim();
    if (name !== '') {
        showSuccess(el, message);
        return true;
    } else {

        showError(el, message);
        return false;
    }
}

function validateDateOfBirth(el, message) {
    const dateOfBirth = el.value.trim();
    if (dateOfBirth  !== '') {
        showSuccess(el);
        return true;
    } else {

        showError(el, message);
        return false;
    }
}

function validateGender (el, message) {
    const isChecked = Array.from(el).some((radio) => radio.checked);
    if (isChecked) {
        showSuccess(el);
    } else {
        showError(el[0], message);
        return false;
    }
}

function validateCity(el, message) {
    const selectedCity = el.value;
    if (selectedCity !== '') {
        showSuccess (el);
        return true;
    } else {
        showError(el, message);
    return false;
    }
}

function validateAddress (el, message) {
    const address = el.value.trim();
    if (address !== '') {
        showSuccess (el);
        return true;
    } else {
        showError(el, message);
        return false;
    }
}

function validateCheckbox (el, message) {
    
    if (!isChecked) {
        showError (el, message);
        return false;
    } else {
        showSuccess (el);
        return true;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validation
    const isFirstNameValid = validateFirstName(firstNameElement, NAME_ERROR);
    const isLastNameValid = validateLastName(lastNameElement, LAST_NAME_ERROR);
    const isDateOfBirthValid = validateDateOfBirth(dateOfBirthElement, DATE_OF_BIRTH_ERROR);
    const isGenderValid = validateGender(genderElement, GENDER_ERROR);
    const isCityValid = validateCity(cityElement, CITY_ERROR);
    const isAddressValid = validateAddress(addressElement, ADDRESS_ERROR);
    const isCheckboxValid = validateCheckbox(checkboxElements, LANGUAGE_ERROR);

    if (isFirstNameValid && isLastNameValid && isCheckboxValid && isGenderValid && isDateOfBirthValid && isCityValid && isAddressValid) {
        console.log('Submit');
        
        }
    }
    
);