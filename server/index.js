import express from 'express'
import cors from 'cors'
import { mongoose } from 'mongoose';
import router from './routes/ShopRoute.js';
import AuthRouter from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middleware/error-middleware.js';

const app = express();
const url = process.env.URL;

// Before make an path, type which file do you need to get and send in this request

const port = process.env.PORT;
// {
//     credentials: true,
//     origin: 'http://localhost:5173'
// }

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(url).then(() => {
    console.log("Database connected")
}).catch(() => console.log("Not connected"))

app.use('/', router);

app.use('/auth', AuthRouter);
app.use(errorMiddleware);

app.listen(port, async () => {
    console.log('meow');
    // const product = await ProductModel.create(
    // );
    // console.log(product)
})

