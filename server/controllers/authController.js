import userModel from "../models/user.js";
import uService from "../services/userService.js";
import { validationResult } from "express-validator";
import ApiError from "../exceptions/api-error.js";

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

const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return next(ApiError.BadRequest(
                'Ошибка валидации', errors.array()
            ))
        }
        const { email, name, password } = req.body;

        console.log(req.body)

        const user = await uService.register(name, email, password);

        console.log('User refreshToken:', user.refreshToken);

        res.cookie('refreshToken', user.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });
        return res.json(user)
    } catch (e) {
        next(e)
    }
}


// const user = await userModel.findOne({
//         email
//     })

//     if(!user) {
//         return res.status(400).json({
//             error: 'Not found acc with this email'
//         })
//     }

//     const compare = bcrypt.compare(password, user.password);


//     if (!compare) {
//         return res.status(401).json({
//             error: "Wrong password"
//         })
//     }



const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await uService.login(email, password);

        console.log('User refreshToken:', user.refreshToken);

        console.log(user)

        res.cookie('refreshToken', user.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });

        return res.json(user);
    } catch (e) {
        next(e)
    }
};

const logout = async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;
        console.log(refreshToken)
        const token = await uService.logout(refreshToken);
        res.clearCookie('refreshToken');
        return res.json(token);
    } catch (e) {
        next(e)
    }
}

const refresh = async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;

        const user = await uService.refresh(refreshToken);

        res.cookie('refreshToken', user.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });

        return res.json(user);
    } catch (error) {
        next(error)
    }
}

export {
    findUser, registerUser, loginUser, logout
}