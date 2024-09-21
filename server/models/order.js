import mongoose from "mongoose";

const receiverSchema = new mongoose.Schema({
    name: String,
    number: String,
    surname: String
})

const itemsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    img: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
})


const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', requered: true },
    delivery: String,
    payment: String,
    receiver: receiverSchema,
    email: String,
    totalPrice: Number,
    items: [itemsSchema],
    time: String
})

const orderModel = new mongoose.model('Order', orderSchema);


export default orderModel;