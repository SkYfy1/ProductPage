import jwt from 'jsonwebtoken'
import tokenModel from '../models/token.js'

class tokenService {
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
        const tokenData = await tokenModel.find({ user: id });

        // Refresh token update for logining

        // if (tokenData) {
        //     // tokenData.refreshToken = refreshToken;
        //     // return tokenData.save(function(){})
        //     tokenModel.updateOne({ user: id }, {
        //         "refreshToken": refreshToken
        //     })
        // }

        const token = await tokenModel.create({
            user: id,
            refreshToken
        });

        return token;
    }
}

const tService = new tokenService();

export default tService;