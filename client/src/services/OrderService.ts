import $api from "../http"
import { AxiosResponse } from "axios"
import { OrderResponse } from "../models/response/OrderResponse"

class OrderService {
    static async fetchOrders(user: string): Promise<AxiosResponse<OrderResponse>> {
        return $api.post<OrderResponse>('/orders/all', { user })
    }
}

export default OrderService;