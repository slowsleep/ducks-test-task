function Header() {
    const header = document.createElement('header');
    header.className = 'header';

    const logo = document.createElement('img');
    logo.src = '/src/assets/logo.svg';
    logo.alt = 'DuckShop Logo';
    logo.className = 'logo';

    header.appendChild(logo);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const basketButton = document.createElement('button');
    basketButton.classList.add('icon-button', 'basket-button');
    basketButton.innerHTML = `<img src="/src/assets/shopping-basket.svg" alt="Basket Icon">`;

    const menuButton = document.createElement('button');
    menuButton.classList.add('icon-button', 'burger-button');
    menuButton.innerHTML = `<img src="/src/assets/burgerMenu.svg" alt="Menu Icon">`;

    buttonContainer.appendChild(basketButton);
    buttonContainer.appendChild(menuButton);

    header.appendChild(buttonContainer);

    return header;
}

export default Header;
