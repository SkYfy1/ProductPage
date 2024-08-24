import express from 'express'
import { getCollections, getAllProducts, getAllProductsInCollection, getFewProductsByCollection, getProductById } from '../controllers/shopDataController.js'

const router = express.Router();

router.get('/', getCollections);

router.get('/latest', getAllProducts)

router.get('/product/:id', getProductById)


router.get('/collection/:id', getFewProductsByCollection)

router.get('/collection/:name', getAllProductsInCollection)

export default router;