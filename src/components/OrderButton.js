function OrderButton(slideDownMenu, formPopUp) {
    const orderButton = document.createElement('button');
    orderButton.textContent = 'Заказать обратный звонок';
    orderButton.className = 'button button-primary';

    orderButton.addEventListener('click', () => {
        // если меньше 1280 и slideDownMenu показывается, то скрываем это меню
        if (window.innerWidth < 1280 && slideDownMenu.classList.contains('show')) {
            // имитируем клик по кнопке закрытия меню
            const closeButton = document.querySelector('.close-button');
            closeButton.click();
        }

        const overlay = document.querySelector('.overlay');
        overlay.classList.remove('hidden');
        formPopUp.classList.remove('hidden');
    });

    return orderButton;
}

export default OrderButton;
