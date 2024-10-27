import { mongoose } from 'mongoose'

const additionalInfoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: [String], required: true }
});

const imageSchema = new mongoose.Schema({
    color: { type: String, required: true },
    image_url: { type: String, required: true }
});

const quantitySchema = new mongoose.Schema({
    color: String,
    quantity: Number
});
const reviewSchema = new mongoose.Schema({
    user: { type: String, required: true },
    review: { type: String, required: true },
    stars: { type: Number, required: true, default: 3}
})

const productSchema = new mongoose.Schema({
    product_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    collection: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    additional_info: [additionalInfoSchema],
    images: [imageSchema],
    price: Number,
    colors_available: [quantitySchema],
    reviews: [reviewSchema]
});

const ProductModel = mongoose.model('Product', productSchema);


export default ProductModel;