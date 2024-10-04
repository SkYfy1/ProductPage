import { AxiosResponse } from "axios";
import $api from "../http"

class ProductService {
    static async getProductsByCategory(category: string): Promise<AxiosResponse> {
        return $api.get(`/category/${category}`)
    }
}

export default ProductService;