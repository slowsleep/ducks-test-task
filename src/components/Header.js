function Header(overlay, slideDownMenu) {
    const header = document.createElement('header');
    const headerContent = document.createElement('div');

    headerContent.className = 'header';

    const logo = document.createElement('img');
    logo.src = '/src/assets/logo.svg';
    logo.alt = 'DuckShop Logo';
    logo.className = 'logo';

    headerContent.appendChild(logo);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const basketButton = document.createElement('button');
    basketButton.classList.add('icon-button', 'basket-button');
    basketButton.innerHTML = `<img src="/src/assets/shopping-basket.svg" alt="Basket Icon">`;
    buttonContainer.appendChild(basketButton);

    const menuButton = document.createElement('button');
    menuButton.classList.add('icon-button', 'burger-button');
    menuButton.innerHTML = `<img src="/src/assets/burgerMenu.svg" alt="Menu Icon">`;
    buttonContainer.appendChild(menuButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('icon-button', 'close-button', 'hidden');
    closeButton.innerHTML = `<img src="/src/assets/close.svg" alt="Close Icon">`;
    buttonContainer.appendChild(closeButton);

    headerContent.appendChild(buttonContainer);
    header.appendChild(headerContent);

    menuButton.addEventListener('click', () => {
        // показываем меню плавно вниз
        slideDownMenu.classList.add('show');

        // затемняем и делаем неактивным основной контент
        overlay.classList.remove('hidden');

        // убираем кнопки корзины и меню и показываем крестик
        basketButton.classList.add('hidden');
        menuButton.classList.add('hidden');
        closeButton.classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
        // скрываем меню плавно вверх
        slideDownMenu.classList.remove('show');

        // убираем затемнение
        overlay.classList.add('hidden');

        // показываем кнопки корзины и меню и убираем крестик
        basketButton.classList.remove('hidden');
        menuButton.classList.remove('hidden');
        closeButton.classList.add('hidden');
    });

    return header;
}

export default Header;
