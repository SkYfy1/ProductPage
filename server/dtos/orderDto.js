class ordersDto {
    delivery;
    payment;
    receiver;
    totalPrice;
    items;
    date;
    constructor(model) {
        this.delivery = model.delivery;
        this.payment = model.payment;
        this.receiver = model.receiver;
        this.totalPrice = model.totalPrice;
        this.items = model.items;
        this.date = model.time;
    }
}

export default ordersDto;