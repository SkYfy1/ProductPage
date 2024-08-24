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
    colors_available: [quantitySchema]
});

const ProductModel = mongoose.model('Product', productSchema);


export default ProductModel;


// {
//     "product_id": "urban-drift-bucket-hat",
//     "name": "Urban Drift Bucket Hat",
//     "description": "Navigate the urban jungle with our Urban Drift Bucket Hat. It's not only trendy but also practical, offering shade from the hustle and bustle.",
//     "category": "unisex",
//     "collection": "urban",
//     "created_at": "2024-04-04",
//     "additional_info": [
//         {
//             "title": "Features",
//             "description": [
//                 "Made from durable, lightweight fabric.",
//                 "Wide brim offers excellent sun protection.",
//                 "Moisture-wicking band inside for enhanced comfort.",
//                 "Easy to fold and pack, ideal for travel.",
//                 "Stylish design complements both urban and outdoor attire."
//             ]
//         },
//         {
//             "title": "Fabric & Care",
//             "description": [
//                 "Hand wash with mild detergent.",
//                 "Air dry flat to maintain shape.",
//                 "Do not bleach or iron.",
//                 "Store out of direct sunlight to prevent fading."
//             ]
//         },
//         {
//             "title": "Shipping",
//             "description": [
//                 "Free standard shipping on all orders - no minimum spend required.",
//                 "Expedited shipping available at an additional cost.",
//                 "Packaged in biodegradable materials to reduce environmental impact."
//             ]
//         }
//     ],
//     "images": [
//         {
//             "color": "black",
//             "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-1.jpg"
//         },
//         {
//             "color": "black",
//             "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-2.jpg"
//         },
//         {
//             "color": "black",
//             "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-3.jpg"
//         },
//         {
//             "color": "black",
//             "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-4.jpg"
//         },
//         {
//             "color": "white",
//             "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-5.jpg"
//         },
//         {
//             "color": "white",
//             "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-6.jpg"
//         },
//         {
//             "color": "white",
//             "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-7.jpg"
//         }
//     ]
// }