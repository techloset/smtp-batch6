import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: Number
})

export const productModel = mongoose.models?.products || mongoose.model('products', ProductsSchema)