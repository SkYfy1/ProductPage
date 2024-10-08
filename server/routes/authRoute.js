import { findUser, registerUser, loginUser, logout, refresh, getUsers, activate, changePassword, verify } from '../controllers/authController.js'
import express from 'express'
import { body } from 'express-validator';
import authMiddleware from '../middleware/auth-middleware.js'

const AuthRouter = express.Router();

AuthRouter.post('/', findUser)

AuthRouter.post('/register', body('email').isEmail(), body('password').isLength({ min: 6, max: 16 }), registerUser)

AuthRouter.post('/login', loginUser)

AuthRouter.get('/logout', logout)

AuthRouter.get('/refresh' , refresh)

AuthRouter.get('/activate/:id', activate);

// AuthRouter.post('/confirmOrder', orderConfirmation)

AuthRouter.get('/users', authMiddleware, getUsers);

AuthRouter.post('/changePassword', changePassword);

AuthRouter.post('/verifyPassword', verify);



export default AuthRouter;