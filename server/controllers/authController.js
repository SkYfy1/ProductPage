import userModel from "../models/user.js";
import jwt from 'jsonwebtoken'
import hashPassword from '../helpers/hash.js'
import bcrypt from 'bcrypt'
import uService from "../services/userService.js";

const findUser = async (req, res) => {
    const { email } = req.body;
    console.log(email);
    const exist = await userModel.findOne({ email });

    if (!exist) {
        return res.json({
            error: "User not registered"
        })
    }

    res.json(exist)
}


const registerUser = async (req, res) => {
    const { email, name, password } = req.body;

    console.log(req.body)

    // if (!password || password.length < 6) {
    //     return res.json({
    //         error: 'Password is required or should be at least 6 characters'
    //     })
    // }

    // if (!name) {
    //     res.json({
    //         error: 'Name is required'
    //     })
    // }

    // const pass = await hashPassword(password)

    // const user = await userModel.create({
    //     name, email, password: pass
    // })

    const user = await uService.register(name, email, password)

    res.json(user)
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email
    })

    if(!user) {
        return res.status(400).json({
            error: 'Not found acc with this email'
        })
    }

    const compare = bcrypt.compare(password, user.password);


    if (!compare) {
        return res.status(401).json({
            error: "Wrong password"
        })
    }

    res.json(user);
};

export {
    findUser, registerUser, loginUser
}