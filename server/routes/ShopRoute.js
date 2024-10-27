import express from 'express'
import { getCollections, getAllProducts, getAllProductsInCollection, getFewProductsByCollection, getProductById, getProductsByCategory, addProduct, addReview, getAllReviews  } from '../controllers/shopDataController.js'

const router = express.Router();

router.get('/', getCollections);

router.get('/latest', getAllProducts)

router.get('/product/:id', getProductById)

router.get('/collection/:id', getFewProductsByCollection)

router.get('/collection/:name', getAllProductsInCollection)

router.get('/category/:name', getProductsByCategory)

router.post('/addProduct', addProduct)

router.post('/addReview', addReview);

router.get('/getReviews/:id' , getAllReviews);

export default router;