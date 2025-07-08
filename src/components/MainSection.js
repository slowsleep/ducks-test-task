function MainSection() {
    // заголовок
    const container = document.createElement('main');
    const heading = document.createElement('h1');
    heading.textContent = 'много уточек'.toUpperCase();
    heading.className = 'main-heading';
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
    // в зависимости от ширины экрана выдавать маленьку или большую картинку
    if (window.innerWidth < 375) {
        image.src = '/src/assets/duck-small.png';
    } else {
        image.src = '/src/assets/duck-big.png';
    }
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

    container.appendChild(heading);
    container.appendChild(text);
    container.appendChild(button);
    container.appendChild(image);
    container.appendChild(servicesList);

    return container;
}

export default MainSection;
