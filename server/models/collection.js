import { mongoose } from 'mongoose'

const collectionSchema = new mongoose.Schema({
    collection_id: String,
    name: String,
    description: String,
    image_url: String,
    created_at: String
});

const ColModel = mongoose.model('Collection', collectionSchema)

export default ColModel;