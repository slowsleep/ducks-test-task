function FormPopUp(overlay) {
    const popUp = document.createElement('div');
    popUp.classList.add('popup', 'hidden');

    const form = document.createElement('form');
    form.classList.add('popup__form');

    // кнопка закрыть
    const closeButton = document.createElement('button');
    closeButton.classList.add('popup__close-button');
    closeButton.innerHTML = `<img src="/src/assets/close.svg" alt="Close Icon">`;
    popUp.appendChild(closeButton);

    // имя
    const divLabelInput = document.createElement('div');
    divLabelInput.classList.add('popup__form__label-input');
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Имя';
    divLabelInput.appendChild(nameLabel);
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Введите ваше имя';
    divLabelInput.appendChild(nameInput);
    form.appendChild(divLabelInput);

    // телефон
    const divLabelInput2 = document.createElement('div');
    divLabelInput2.classList.add('popup__form__label-input');
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Телефон';
    divLabelInput2.appendChild(phoneLabel);
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.placeholder = '+7 000 000 00 00';
    divLabelInput2.appendChild(phoneInput);
    form.appendChild(divLabelInput2);

    // отправить
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('button', 'button-primary');
    submitButton.textContent = 'Отправить';
    form.appendChild(submitButton);

    popUp.appendChild(form);

    // политика конфиденциальности
    const privacyPolicyLink = document.createElement('p');
    privacyPolicyLink.innerHTML = 'Нажимая кнопку “Отправить”, вы соглашаетесь с <a href="#">политикой конфиденциальности</a> и <a href="#">договором оферты</a>';
    popUp.appendChild(privacyPolicyLink);

    closeButton.addEventListener('click', () => {
        popUp.classList.add('hidden');
        console.log('скрытие overlay');
        console.log(overlay);
        overlay.classList.add('hidden');
    });

    return popUp;
}

export default FormPopUp;
