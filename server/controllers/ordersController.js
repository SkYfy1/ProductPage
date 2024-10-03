import ordersDto from "../dtos/orderDto.js";
import oService from "../services/orderService.js";

const createOrder = async (req, res, next) => {
    try {
        const data = req.body;

        const order = await oService.createOrder(data);

        console.log(order);

        res.json({ message: 'Order Placed' })
    } catch (error) {
        next(error)
    }
}

const getUserOrders = async (req, res, next) => {
    try {
        const user = req.params.id;

        const orders = await oService.getOrdersById(user);

        const orders_Dto = await orders.map(el => new ordersDto(el));

        return res.json(orders_Dto)
    } catch (error) {
        next(error)
    }
}

const getAllOrders = async (req, res, next) => {
    try {
        const orders = await oService.getAllOrders();

        const orders_Dto = await orders.map(el => new ordersDto(el));

        return res.json(orders_Dto);
    } catch (error) {
        next(error)
    }
}

export { getUserOrders, createOrder, getAllOrders };