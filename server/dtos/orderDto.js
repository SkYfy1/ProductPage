class ordersDto {
    delivery;
    payment;
    receiver;
    totalPrice;
    items;
    constructor(model) {
        this.delivery = model.delivery;
        this.payment = model.payment;
        this.receiver = model.receiver;
        this.totalPrice = model.totalPrice;
        this.items = model.items;
    }
}

export default ordersDto;