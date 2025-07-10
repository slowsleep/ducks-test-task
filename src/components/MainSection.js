function MainSection() {
    // заголовок
    const container = document.createElement('main');
    const heading = document.createElement('h1');

    if (window.innerWidth < 1280) {
        heading.textContent = 'много уточек'.toUpperCase();
    } else {
        heading.textContent = 'много'.toUpperCase();
    }

    heading.className = 'main-heading';
    container.appendChild(heading);

    if (window.innerWidth >= 1280) {
        const headingSecond = document.createElement('h1');
        headingSecond.textContent = 'уточек'.toUpperCase();
        headingSecond.className = 'main-heading-second';
        container.appendChild(headingSecond);
    }

    window.addEventListener('resize', () => {
        // если ширина меньше 1280 и есть "уточек", то удаляем "уточек" и меняем текст заголовка на "много уточек"
        // иначе, если ширина больше или равна 1280 и нет "уточек", то добавляем "много" и "уточек"
        if (window.innerWidth < 1280 && container.contains(document.querySelector('.main-heading-second'))) {
            container.removeChild(document.querySelector('.main-heading-second'));
            heading.textContent = 'много уточек'.toUpperCase();
        } else if (window.innerWidth >= 1280 && !container.contains(document.querySelector('.main-heading-second'))) {
            heading.textContent = 'много'.toUpperCase();
            const headingSecond = document.createElement('h1');
            headingSecond.textContent = 'уточек'.toUpperCase();
            headingSecond.className = 'main-heading-second';
            heading.insertAdjacentElement('afterend', headingSecond);
        }
    });

    // текст
    const text = document.createElement('p');
    text.className = 'main-text';
    text.textContent = 'Маленький друг найдётся для каждого в этом кряквенно жёлтом мире';
    // кнопка
    const button = document.createElement('button');
    button.className = 'button button-secondary';
    button.textContent = 'Смотреть уточек';

    // картинка
    const image = document.createElement('img');
    image.className = 'main-image';

    const changeImageSrc = () => {
        if (window.innerWidth >= 1280) {
            image.src = '/src/assets/duck-big.png';
        } else if (window.innerWidth <= 960 && window.innerWidth > 375) {
            image.src = '/src/assets/duck-medium.png';
        } else {
            image.src = '/src/assets/duck-small.png';
        }
    }

    // в зависимости от ширины экрана выдавать маленьку или большую картинку
    changeImageSrc();

    // и слушатель события изменения размера окна добавляем для изменение картинки
    window.addEventListener('resize', changeImageSrc);

    image.alt = 'Main duck image';

    // список услуг
    const servicesList = document.createElement('ul');
    servicesList.className = 'services-list';
    const services = ["Классические", "Уточки панки", "Супергерои", "Милые", "Для детей", "Взрослым"];
    services.forEach(service => {
        const listItem = document.createElement('li');
        listItem.textContent = service;
        servicesList.appendChild(listItem);
    });

    container.appendChild(text);
    container.appendChild(button);
    container.appendChild(image);
    container.appendChild(servicesList);

    return container;
}

export default MainSection;
