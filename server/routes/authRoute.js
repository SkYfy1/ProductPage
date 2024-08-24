import { findUser, registerUser, loginUser } from '../controllers/authController.js'
import express from 'express'

const AuthRouter = express.Router();

AuthRouter.post('/', findUser)

AuthRouter.post('/register', registerUser)

AuthRouter.post('/login', loginUser)

export default AuthRouter;