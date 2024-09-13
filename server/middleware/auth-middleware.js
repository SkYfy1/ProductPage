import ApiError from "../exceptions/api-error.js";
import tService from "../services/tokenService.js";

function authMiddleware(req, res, next) {
    try {
        const autorizationHeader = req.headers.authorization;
        if (!autorizationHeader) {
            return next(ApiError.UnauthorizedError())
        }
        
        const accessToken = autorizationHeader.split(" ")[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError())
        }
        
        const userData = tService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError())
        }

        req.user = userData;
        next()
    } catch (error) {
        return next(ApiError.UnauthorizedError())
    }
}

export default authMiddleware;