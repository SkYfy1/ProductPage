import UserModel from "../models/user.js"
import hashPassword from "../helpers/hash.js";
import mService from "./mailService.js";
import tService from "./tokenService.js";
import userDto from "../dtos/userDto.js";
import { v4 as uuidv4 } from 'uuid';
import ApiError from "../exceptions/api-error.js";
import bcrypt from 'bcrypt'
import userModel from "../models/user.js";

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
            name, email, password: hashedPassword, activationLink, status: 'user'
        });
        // await mService.sendMail(email, `${process.env.API_URL}/auth/activate/${activationLink}`);

        const user_Dto = new userDto(user);
        const tokens = await tService.generateTokens({ ...user_Dto });
        await tService.saveToken(user_Dto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: user_Dto
        };
    }

    async login(email, password) {
        const user = await UserModel.findOne({ email })

        if (!user) {
            throw ApiError.BadRequest('Not found account with this email')
        }

        const isPassEquals = await bcrypt.compare(password, user.password);


        if (!isPassEquals) {
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

    async logout(refreshToken) {
        const token = await tService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await userModel.findById(userData.id);

        const user_Dto = new userDto(user);

        const tokens = await tService.generateTokens({ ...user_Dto });
        await tService.saveToken(user_Dto.id, tokens.refreshToken);


        return {
            user_Dto,
            ...tokens
        }
    }

    async getUsers() {
        const users = await userModel.find({});

        if (!users) {
            throw ApiError.BadRequest('No registered users')
        }

        return users;
    }

    async activateUser(activationLink) {
        const userData = await userModel.findOne({ activationLink });

        if (!userData) {
            throw ApiError.UnauthorizedError();
        } else {
            userData.isActivated = true;
            await userData.save();
        };

        console.log(userData.email)

        await mService.afterActivation(userData.email)
        return;
    }

    async verifyPassword(email, password) {
        const account = await UserModel.findOne({ email });

        console.log(email)

        console.log(account)

        if (!account) {
            throw ApiError.BadRequest('No registered users');
        }

        const isPassEquals = bcrypt.compare(password, account.password);

        if (!isPassEquals) {
            throw ApiError.BadRequest('Type legit password');
        }

        return isPassEquals;
    }

    async changePassword(email, password) {
        const account = await userModel.findOne({ email });

        console.log(account)

        if (!account) {
            throw ApiError.BadRequest('No registered users');
        }

        const newHashedPassword = await hashPassword(password);

        console.log('Old' + account.password);

        console.log(`${password} and ${newHashedPassword}`);

        account.password = newHashedPassword;
        await account.save();

        return account;
    }
}

const uService = new userService();

export default uService;