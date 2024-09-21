import ApiError from "../exceptions/api-error.js";
import orderModel from "../models/order.js";

const getOrders = async (req, res, next) => {
    const { user } = req.body;
    
    const orders = await orderModel.find({ user })

    if (!orders) {
        throw ApiError.BadRequest();
    }

    res.json(orders)
}

export default getOrders;