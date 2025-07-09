function SlideDownMenu() {

    const slideDownMenu = document.createElement('div');
    slideDownMenu.classList.add('slide-down-menu');

    const slideDownMenuNav = document.createElement('ul');
    const menuItems = ['Главная', 'Каталог', 'Блог', 'Отзывы', 'Контакты'];
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        slideDownMenuNav.appendChild(menuItem);
    });
    slideDownMenu.appendChild(slideDownMenuNav);

    const slideDownMenuButton = document.createElement('button');
    slideDownMenuButton.textContent = 'Заказать обратный звонок';
    slideDownMenuButton.className = 'button button-primary';
    slideDownMenu.appendChild(slideDownMenuButton);

    return slideDownMenu;
}

export default SlideDownMenu;
