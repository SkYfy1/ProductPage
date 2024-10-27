import { AxiosResponse } from "axios";
import $api from "../http"
import { FormFields } from "../models/formSchemas/addSchema";
import iReview from "../models/IReview";

class ProductService {
        static async getProductsByCategory(category: string): Promise<AxiosResponse> {
            return $api.get(`/category/${category}`)
        }

        static async addProduct(product: FormFields): Promise<AxiosResponse> {
            return $api.post('/addProduct', { ...product })
        }

        static async addReview(review: iReview): Promise<AxiosResponse> {
            return $api.post('/addReview', { ...review })
        }

        static async getReviews(id: string): Promise<AxiosResponse> {
            return $api.get(`/getReviews/${id}`)
        }
    }

export default ProductService;