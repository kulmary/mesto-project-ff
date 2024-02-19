function showError(inputElement, errorElement, validationConfig) {
  inputElement.classList.add(validationConfig.inputErrorClass)
  errorElement.classList.add(validationConfig.errorClass)
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement, validationConfig) {
  inputElement.classList.remove(validationConfig.inputErrorClass)
  errorElement.classList.remove(validationConfig.errorClass)
  errorElement.textContent = inputElement.validationMessage;
}

function isValid(formElement, inputElement, validationConfig) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (inputElement.validity.patternMismatch) {

    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  }
  else{
    inputElement.setCustomValidity('');
  }
  if (isInputValid) {
    hideError(inputElement, errorElement, validationConfig)
  } else {
    showError(inputElement, errorElement, validationConfig)
  }
};

function setEventListeners(formElement, validationConfig) {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(buttonElement, formElement.checkValidity(), validationConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, validationConfig);
      toggleButtonState(buttonElement, formElement.checkValidity(), validationConfig);
    });
  });
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
};
//включает валидацию
function enableValidation(validationConfig) {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, validationConfig);
  });
};

//делает кнопку активной 
function buttonOn(buttonElement, validationConfig) {
  buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  buttonElement.disabled = false;
}
//делает кнопку неактивной
function buttonOff(buttonElement, validationConfig) {
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
  buttonElement.disabled = true;
}
//переключает состояние кнопки
function toggleButtonState(buttonElement, isActive, validationConfig) {
  if (isActive) {
    buttonOn(buttonElement, validationConfig);
  } else {
    buttonOff(buttonElement, validationConfig);
  }
}
//очистка вылидации
function clearValidation(formElement, validationConfig) {
  const inputList = formElement.querySelectorAll(validationConfig.inputSelector);
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    hideError(
      inputElement,
      errorElement,
      validationConfig
    );
  });
  buttonOn(buttonElement, validationConfig);
  console.log('clear')
};

export { enableValidation, clearValidation }
