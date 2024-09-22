interface Receiver {
    name: string,
    number: string,
    surname: string,
}
interface Item {
    id: string,
    img: string,
    name: string,
    price: number,
    quantity: number,
    size: string,
    _id: string
}

export interface OrderResponse {
    delivery: string,
    payment: string,
    receiver: Receiver,
    totalPrice: number,
    items: Item[],
}