import $api from "../http"
import { AxiosResponse } from "axios"
import { OrderResponse } from "../models/response/OrderResponse"

class OrderService {
    static async fetchOrders(user: string): Promise<AxiosResponse<OrderResponse>> {
        return $api.get<OrderResponse>(`/orders/user/${user}`)
    }

    static async getOrders():  Promise<AxiosResponse<OrderResponse>> {
        return $api.get<OrderResponse>('/orders/all');
    }

    static async placeOrder(obj: any): Promise<AxiosResponse<OrderResponse>> {
        return $api.post<OrderResponse>('/orders/createOrder', obj)
    }
}

export default OrderService;