function NavList() {
    const navList = document.createElement('ul');
    navList.classList.add('nav-list');
    const navItems = ['Главная', 'Каталог', 'Блог', 'Отзывы', 'Контакты'];

    const addDownArrow = (menuItem) => {
        const arrowDown = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6L8.5 10L12.5 6" stroke="#1F2937" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        menuItem.innerHTML += arrowDown;
        menuItem.style.display = 'flex';
        menuItem.style.alignItems = 'center';
        menuItem.style.gap = '1em';
    }

    navItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        if (item === 'Каталог' && window.innerWidth >= 1280) {
            addDownArrow(menuItem);
        }
        navList.appendChild(menuItem);
    });

    window.addEventListener('resize', () => {
        // если ширина экрана меньше 1280 - Каталог
        // если больше - добавляем стелочку
        if (window.innerWidth < 1280) {
            navList.firstChild.nextSibling.textContent = 'Каталог';
        } else if (window.innerWidth >= 1280 && navList.firstChild.nextSibling.textContent === 'Каталог') {
            addDownArrow(navList.firstChild.nextSibling);
        }
    })

    return navList;
}

export default NavList;
