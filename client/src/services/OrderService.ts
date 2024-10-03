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
}

export default OrderService;