import express from 'express'
import getOrders from '../controllers/ordersController.js';


const OrderRouter = express.Router();

OrderRouter.post('/orders', getOrders);

export default OrderRouter;