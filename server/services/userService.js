import UserModel from "../models/user.js"
import hashPassword from "../helpers/hash.js";
import mService from "./mailService.js";
import tService from "./tokenService.js";
import userDto from "../dtos/userDto.js";
import { v4 as uuidv4 } from 'uuid';
import ApiError from "../exceptions/api-error.js";
import bcrypt from 'bcrypt'

class userService {
    async register(name, email, password) {
        if (!name) {
            throw ApiError.BadRequest('Name is required')
        }

        if (!password || password.length <= 6) {
            throw ApiError.BadRequest('Password is weak')
        }

        const exists = await UserModel.findOne({ email });

        if (exists) {
            throw ApiError.BadRequest('Email is already taken')
        }

        const hashedPassword = await hashPassword(password);
        const activationLink = uuidv4();

        const user = await UserModel.create({
            name, email, password: hashedPassword, activationLink
        });
        // await mService.sendMail(email, `${process.env.API_URL}/auth/activate${activationLink}`);

        const user_Dto = new userDto(user);
        const tokens = await tService.generateTokens({ ...user_Dto });
        await tService.saveToken(user_Dto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: user_Dto
        };
    }

    async login(email, password) {
        const user = await UserModel.findOne({
            email
        })
    
        if(!user) {
            // return res.status(400).json({
            //     error: 'Not found acc with this email'
            // })
            throw ApiError.BadRequest('Not found acc with this email')
        }
    
        const compare = bcrypt.compare(password, user.password);
    
    
        if (!compare) {
            // return res.status(401).json({
            //     error: "Wrong password"
            // })
            throw ApiError.BadRequest('Wrong password')
        }

        const user_Dto = new userDto(user);

        const tokens = await tService.generateTokens({ ...user_Dto });
        await tService.saveToken(user_Dto.id, tokens.refreshToken);


        return {
            user_Dto,
            ...tokens
        }
    }
}

const uService = new userService();

export default uService;