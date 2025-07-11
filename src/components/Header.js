import OrderButton from './OrderButton.js';
import NavList from './NavList.js';

function Header(overlay, slideDownMenu, formPopUp) {
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

    const navList = NavList();
    if (window.innerWidth >= 1280) {
        logo.insertAdjacentElement('afterend', navList);
    }

    const basketButton = document.createElement('button');
    basketButton.classList.add('icon-button', 'basket-button');
    basketButton.innerHTML = `<img src="/src/assets/shopping-basket.svg" alt="Basket Icon">`;
    buttonContainer.appendChild(basketButton);

    const orderButton = OrderButton(slideDownMenu, formPopUp);

    // добавляем кнопку OrderButton в buttonContainer после basketButton, но перед menuButton
    // если ширина экрана >= 960px, то добавляем кнопку OrderButton в buttonContainer
    // иначе удаляем ее, если ширина экрана < 960px
    if (window.innerWidth >= 960 && !buttonContainer.contains(orderButton)) {
        buttonContainer.appendChild(orderButton);
    } else if (window.innerWidth < 960 && buttonContainer.contains(orderButton)) {
        buttonContainer.removeChild(orderButton);
    }

    const menuButton = document.createElement('button');
    menuButton.classList.add('icon-button', 'burger-button');
    menuButton.innerHTML = `<img src="/src/assets/burgerMenu.svg" alt="Menu Icon">`;

    const closeButton = document.createElement('button');
    closeButton.classList.add('icon-button', 'close-button', 'hidden');
    closeButton.innerHTML = `<img src="/src/assets/close.svg" alt="Close Icon">`;

    const handleOpenMenu = () => {
        // показываем меню плавно вниз
        slideDownMenu.classList.add('show');

        // затемняем и делаем неактивным основной контент
        overlay.classList.remove('hidden');

        // убираем кнопки корзины и меню и показываем крестик
        basketButton.classList.add('hidden');
        orderButton.classList.add('hidden');
        menuButton.classList.add('hidden');
        closeButton.classList.remove('hidden');
    }

    const handleCloseMenu = () => {
        // скрываем меню плавно вверх
        slideDownMenu.classList.remove('show');

        // убираем затемнение
        overlay.classList.add('hidden');

        // показываем кнопки корзины и меню и убираем крестик
        basketButton.classList.remove('hidden');
        orderButton.classList.remove('hidden');
        menuButton.classList.remove('hidden');
        closeButton.classList.add('hidden');
    }

    if (window.innerWidth < 1280) {
        buttonContainer.appendChild(menuButton);
        buttonContainer.appendChild(closeButton);
        menuButton.addEventListener('click', handleOpenMenu);
        closeButton.addEventListener('click', handleCloseMenu);
    }

    headerContent.appendChild(buttonContainer);
    header.appendChild(headerContent);

    // слушатель события изменения размера окна
    // если ширина экрана >= 960px, то добавляем кнопку OrderButton в buttonContainer после basketButton
    // иначе удаляем ее, если ширина экрана < 960px
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 960 && !(basketButton.nextElementSibling === orderButton)) {
            basketButton.insertAdjacentElement('afterend', orderButton);
        } else if (window.innerWidth < 960 && basketButton.nextElementSibling === orderButton) {
            basketButton.nextElementSibling.remove();
        }

        if (window.innerWidth < 1280 && (!buttonContainer.contains(menuButton) && !buttonContainer.contains(closeButton))) {
            headerContent.removeChild(navList);
            buttonContainer.appendChild(menuButton);
            menuButton.addEventListener('click', handleOpenMenu);
            buttonContainer.appendChild(closeButton);
            closeButton.addEventListener('click', handleCloseMenu);
        } else if (window.innerWidth >= 1280 && buttonContainer.contains(menuButton) && buttonContainer.contains(closeButton)) {
            logo.insertAdjacentElement('afterend', navList);
            buttonContainer.removeChild(menuButton);
            menuButton.removeEventListener('click', handleOpenMenu);
            buttonContainer.removeChild(closeButton);
            closeButton.removeEventListener('click', handleCloseMenu);
        }
    });

    return header;
}

export default Header;
