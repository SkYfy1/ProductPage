import ApiError from "../exceptions/api-error.js";
import ProductModel from "../models/product.js";

class shopService {
    async getProductsByCategory(category) {
        const products = await ProductModel.find({ category })

        if(!products) {
            throw ApiError.UnauthorizedError();
        }

        return products;
    }
}

const sService = new shopService();

export default sService;