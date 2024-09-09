import { findUser, registerUser, loginUser, logout } from '../controllers/authController.js'
import express from 'express'

const AuthRouter = express.Router();

AuthRouter.post('/', findUser)

AuthRouter.post('/register', registerUser)

AuthRouter.post('/login', loginUser)

AuthRouter.get('/logout', logout)

export default AuthRouter;