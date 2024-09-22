import express from 'express'
import { getOrders, createOrder } from '../controllers/ordersController.js';


const OrderRouter = express.Router();

OrderRouter.post('/all', getOrders);
OrderRouter.post('/createOrder', createOrder)

export default OrderRouter;