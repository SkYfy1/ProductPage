import { AxiosResponse } from "axios";
import $api from "../http"
import { FormFields } from "../models/formSchemas/addSchema";

class ProductService {
    static async getProductsByCategory(category: string): Promise<AxiosResponse> {
        return $api.get(`/category/${category}`)
    }

    static async addProduct(product: FormFields): Promise<AxiosResponse> {
        return $api.post('/addProduct', { ...product })
    }
}

export default ProductService;