import ApiError from "../exceptions/api-error.js";
import ProductModel from "../models/product.js";
import ColModel from "../models/collection.js";

class shopService {
    async getCollections() {
        const collections = await ColModel.find({});
        
        if(!collections) {
            throw ApiError.UnauthorizedError();
        }

        return collections;
    }

    async getAllProducts() {
        const all = await ProductModel.find({});

        if(!all) {
            throw ApiError.UnauthorizedError();
        }

        return all;
    }

    async getProductById(id) {
        const product = await ProductModel.findOne({
            'product_id': id
        });

        if(!product) {
            throw ApiError.UnauthorizedError();
        }

        return product;
    }

    async getAllProductsCol(name) {
        const collection = await ProductModel.find({
            'collection': name
        })

        if(!collection) {
            throw ApiError.UnauthorizedError();
        }

        return collection;
    }

    async getFewProducts(name) {
        const collection = await ProductModel.find({
            'collection': name
        }).limit(4);

        if(!collection) {
            throw ApiError.UnauthorizedError();
        }

        return collection;
    }

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