import OrderButton from './OrderButton.js';
import NavList from './NavList.js';

function SlideDownMenu(formPopUp) {

    const slideDownMenu = document.createElement('div');
    slideDownMenu.classList.add('slide-down-menu');

    const navList = NavList();
    slideDownMenu.appendChild(navList);

    const orderButton = OrderButton(slideDownMenu, formPopUp);

    // если ширина экрана больше 960, то убираем кнопку из меню
    // если меньше 960, то добавляем кнопку в меню
    if (window.innerWidth >= 960 && slideDownMenu.contains(orderButton)) {
        slideDownMenu.removeChild(orderButton);
    } else if (window.innerWidth < 960 && !slideDownMenu.contains(orderButton)) {
        slideDownMenu.appendChild(orderButton);
    }

    // при изменении размера окна проверяем ширину и добавляем или убираем кнопку из меню, что сдедует после корзины
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 960 && slideDownMenu.contains(orderButton)) {
            slideDownMenu.removeChild(orderButton);
        } else if (window.innerWidth < 960 && !slideDownMenu.contains(orderButton)) {
            slideDownMenu.appendChild(orderButton);
        }
    });

    return slideDownMenu;
}

export default SlideDownMenu;
