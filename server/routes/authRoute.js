import { findUser, registerUser, loginUser, logout } from '../controllers/authController.js'
import express from 'express'
import { body } from 'express-validator';

const AuthRouter = express.Router();

AuthRouter.post('/', findUser)

AuthRouter.post('/register', body('email').isEmail(), body('password').isLength({ min: 6, max: 16 }), registerUser)

AuthRouter.post('/login', loginUser)

AuthRouter.get('/logout', logout)

export default AuthRouter;