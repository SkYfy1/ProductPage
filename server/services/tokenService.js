import jwt from 'jsonwebtoken'
import tokenModel from '../models/token.js'

class tokenService {
    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_Refresh_SECRET)
            return userData;
        } catch (e) {
            return null;
        }
    }

    async generateTokens(data) {
        const accessToken = jwt.sign(data, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '30m'
        })
        const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_SECRET, {
            expiresIn: '30d'
        })
        return { accessToken, refreshToken }
    }

    async saveToken(id, refreshToken) {
        const tokenData = await tokenModel.findOne({ user: id });

        // Refresh token update for logining

        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            await tokenData.save();
            return;
        }

        const token = await tokenModel.create({
            user: id,
            refreshToken
        });

        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await tokenModel.deleteOne({ refreshToken });
        // const token = await tokenModel.findOne({ refreshToken: refreshToken });
        // console.log(token); // Проверь, что возвращается документ
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await tokenModel.findOne({ refreshToken });
        return tokenData;
    }
}

const tService = new tokenService();

export default tService;