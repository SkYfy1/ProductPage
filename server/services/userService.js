import UserModel from "../models/user.js"
import hashPassword from "../helpers/hash.js";
import mService from "./mailService.js";
import tService from "./tokenService.js";
import userDto from "../dtos/userDto.js";

class userService {
    async register(name, email, password) {
        if (!name) {
            throw new Error('Name is required')
        }

        if (!password || password.length <= 6) {
            throw new Error('Password is weak')
        }

        const exists = await UserModel.findOne({ email });

        if (exists) {
            throw new Error('Email is alreadt taken')
        }

        const hashedPassword = await hashPassword(password);
        const activationLink = uuid.v4();

        const user = await UserModel.create({
            name, email, password: hashedPassword
        });
        await mService.sendMail(email, activationLink);

        const user_Dto = new userDto(user);
        const tokens = tService.generateTokens({ ...user_Dto });
        await tService.saveToken(user_Dto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: user_Dto
        };
    }

    async login() {

    }
}