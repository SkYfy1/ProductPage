import ApiError from "../exceptions/api-error.js";
import ProductModel from "../models/product.js";
import ColModel from "../models/collection.js";

class shopService {
    async getCollections() {
        const collections = await ColModel.find({});

        if (!collections) {
            throw ApiError.UnauthorizedError();
        }

        return collections;
    }

    async getAllProducts() {
        const all = await ProductModel.find({});

        if (!all) {
            throw ApiError.UnauthorizedError();
        }

        return all;
    }

    async getProductById(id) {
        const product = await ProductModel.findOne({
            'product_id': id
        });

        if (!product) {
            throw ApiError.UnauthorizedError();
        }

        return product;
    }

    async getAllProductsCol(name) {
        const collection = await ProductModel.find({
            'collection': name
        })

        if (!collection) {
            throw ApiError.UnauthorizedError();
        }

        return collection;
    }

    async getFewProducts(name) {
        const collection = await ProductModel.find({
            'collection': name
        }).limit(4);

        if (!collection) {
            throw ApiError.UnauthorizedError();
        }

        return collection;
    }

    async getProductsByCategory(category) {
        const products = await ProductModel.find({ category })

        if (!products) {
            throw ApiError.UnauthorizedError();
        }

        return products;
    }

    async addProduct(data) {
        const product = await ProductModel.create({
            ...data
        });

        return {
            ...product
        }
    }

    async addReview(data) {
        const { review, user, stars, product_id } = data;
        const product = await ProductModel.findOne({
            product_id
        });

        if (!product) {
            throw ApiError.BadRequest('Not found')
        }

        product.reviews.push({ review, user, stars });
        await product.save();

        return product;
    }


    async getAllReviews(id) {
        const product = await ProductModel.findOne({
            product_id: id
        });

        if (!product) {
            throw ApiError.BadRequest('Not found')
        }

        return product.reviews;
    }
}

const sService = new shopService();

export default sService;