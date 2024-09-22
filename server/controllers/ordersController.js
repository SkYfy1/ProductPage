import oService from "../services/orderService.js";

const createOrder = async (req, res, next) => {
    try {
        // { delivery, email, items, payment, receiverData, totalPrice, user, date }
        const data = req.body;

        // console.log(orderData)
        // console.log('meow')

        // await mService.orderConfirmation(orderData.email, orderData);
        const order = oService.createOrder(data);

        console.log(order);

        // const orderData = await orderModel.create({
        //     user, delivery, payment, receiver: receiverData, email, totalPrice, items, time: date
        // })

        res.json({ message: 'Order Placed' })
    } catch (error) {
        next(error)
    }
}

const getOrders = async (req, res, next) => {
    try {
        const { user } = req.body;

        const orders = await oService.getOrdersById(user)

        return res.json(orders)
    } catch (error) {
        next(error)
    }
}

export { getOrders, createOrder };