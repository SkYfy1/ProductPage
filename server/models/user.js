import { mongoose } from 'mongoose'

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    isActivated: { type: Boolean, default: false },
    activationLink: String,
    status: String
})

const userModel = mongoose.model('Useri', userSchema);

export default userModel;