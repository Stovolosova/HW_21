const form = document.getElementById('Registration-form');
const firstNameElement = form.elements['first-name'];
const lastNameElement = form.elements['last-name'];
const dateOfBirthElement = form.elements['Date-of-birth'];
const genderElement = form.elements['gender'];
const cityElement = form.elements['city'];
const addressElement = form.elements['address'];
const languageElements = document.querySelectorAll('input[type=checkbox]');
const table = document.getElementById('user-data');

const NAME_ERROR = 'Please enter a name';
const LAST_NAME_ERROR = 'Please enter a last name';
const DATE_OF_BIRTH_ERROR = 'Please enter date of birth';
const GENDER_ERROR = 'Please select a value';
const CITY_ERROR = 'Please select a value';
const ADDRESS_ERROR = 'Please enter the address';
const LANGUAGE_ERROR = 'Please select a value';

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
    if (dateOfBirth !== '') {
        showSuccess(el, message);
        return true;
    } else {
        showError(el, message);
        return false;
    }
}

function validateGender(elements, message) {
    let isChecked = false;
    elements.forEach(function (element) {
        if (element.checked) {
            isChecked = true;
        }
    });
    if (isChecked) {
        showSuccess(elements[0]);
        return true;
    } else {
        showError(elements[0], message);
        return false;
    }
}

function validateCity(el, message) {
    const selectedCity = el.value.trim();
    if (selectedCity !== '') {
        showSuccess(el, message);
        return true;
    } else {
        showError(el, message);
        return false;
    }
}

function validateAddress(el, message) {
    const address = el.value.trim();
    if (address !== '') {
        showSuccess(el, message);
        return true;
    } else {
        showError(el, message);
        return false;
    }
}

function validateCheckbox (elements, message) {
    let checkedLanguages = Array.from(elements)
          .filter(element => element.checked)
          .map(element => element.value);
   
    if (checkedLanguages.length > 0) {
        showSuccess (elements[0]);
        return checkedLanguages;
    } else {
        showError (elements[0], message);
        return false;
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
    const isCheckboxValid = validateCheckbox(languageElements, LANGUAGE_ERROR);

    if (isFirstNameValid && isLastNameValid && isDateOfBirthValid && isGenderValid && isCityValid && isAddressValid && isCheckboxValid) {
        console.log('Submit');

        document.getElementById('user-name').textContent = firstNameElement.value;
        document.getElementById('user-last-name').textContent = lastNameElement.value;
        document.getElementById('user-date-of-birth').textContent = dateOfBirthElement.value;
        document.getElementById('user-gender').textContent = genderElement.value;
        document.getElementById('user-city').textContent = cityElement.value;
        document.getElementById('user-address').textContent = addressElement.value;
        //document.getElementById('user-languages').textContent = languages.join(', ');

        form.style.display = 'none';
        table.style.display = 'table';
    }
    form.reset();
});