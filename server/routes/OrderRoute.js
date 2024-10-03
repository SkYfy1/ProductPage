import express from 'express'
import { getUserOrders, createOrder, getAllOrders } from '../controllers/ordersController.js';


const OrderRouter = express.Router();

OrderRouter.get('/user/:id', getUserOrders);
OrderRouter.post('/createOrder', createOrder);
OrderRouter.get('/all', getAllOrders)

export default OrderRouter;