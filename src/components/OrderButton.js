function OrderButton() {
    const orderButton = document.createElement('button');
    orderButton.textContent = 'Заказать обратный звонок';
    orderButton.className = 'button button-primary';

    return orderButton;
}

export default OrderButton;
