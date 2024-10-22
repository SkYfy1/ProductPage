import sService from '../services/shopService.js';

const getCollections = async (req, res, next) => {
    try {
        const collections = await sService.getCollections();

        res.json(collections);
    } catch (error) {
        next(error)
    }

};

const getAllProducts = async (req, res, next) => {
    try {
        const all = await sService.getAllProducts();

        res.json(all);
    } catch (error) {
        next(error)
    }

}

const getProductById = async (req, res, next) => {
    try {
        const id = req.params.id;

        const product = await sService.getProductById(id);

        res.json(product)
    } catch (error) {
        next(error);
    }
}

const getFewProductsByCollection = async (req, res, next) => {
    try {
        const id = req.params.id;

        const collection = await sService.getFewProducts(id);

        res.json(collection)
    } catch (error) {

    }
}

const getAllProductsInCollection = async (req, res, next) => {
    try {
        const name = req.params.name;

        const collection = await sService.getAllProducts(name)

        res.json(collection)
    } catch (error) {
        next(error)
    }
}

const getProductsByCategory = async (req, res, next) => {
    try {
        const category = req.params.name;

        const products = await sService.getProductsByCategory(category);

        res.json(products)
    } catch (error) {
        next(error)
    }
}

const addProduct =  async (req, res, next) => {
    try {
        const data = req.body;

        const product = await sService.addProduct(data);

        console.log(product)

        res.json(product)
    } catch (error) {
        next(error)
    }
}


export {
    getCollections,
    getAllProducts,
    getAllProductsInCollection,
    getFewProductsByCollection,
    getProductById,
    getProductsByCategory,
    addProduct
}


