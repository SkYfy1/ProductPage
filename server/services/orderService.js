import orderModel from "../models/order.js";
import ApiError from "../exceptions/api-error.js";


class orderService {
    async getOrdersById(id) {
        const orders = await orderModel.find({ user: id });

        if (!orders) {
            throw ApiError.BadRequest("Client doesn't have any order");
        }

        return orders;
    }

    async createOrder(data) {
        const order = await orderModel.create({
            user: data.user, delivery: data.delivery, payment: data.payment, totalPrice: data.totalPrice, receiver: data.receiverData, email: data.email, items: data.items, time: data.date
        })

        return order;
    }
}

const oService = new orderService();

export default oService;