import ColModel from '../models/collection.js';
import ProductModel from '../models/product.js';

const getCollections = async (req, res) => {
    const collections = await ColModel.find({});
    res.json(collections);
};

const getAllProducts = async (req, res) => {
    const all = await ProductModel.find({});
    res.json(all);
}

const getProductById = async (req, res) => {
    const product = await ProductModel.findOne({
        'product_id': req.params.id
    });

    res.json(product)
}

const getFewProductsByCollection = async (req, res) => {
    const collection = await ProductModel.find({
        'collection': req.params.id
    }).limit(4);

    res.json(collection)
}

const getAllProductsInCollection = async (req, res) => {
    const collection = await ProductModel.find({
        'collection': req.params.name
    })

    res.json(collection)
}


export {
    getCollections,
    getAllProducts,
    getAllProductsInCollection,
    getFewProductsByCollection,
    getProductById
}


