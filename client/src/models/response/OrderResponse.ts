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
    _id: string,
    user: string,
    delivery: string,
    payment: string,
    receiver: Receiver,
    email: string,
    totalPrice: number,
    items: Item[],
    time: string,
    __v: number
}