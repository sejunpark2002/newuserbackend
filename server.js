import express from 'express'
import bodyParser from 'body-parser'
// import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './route/route.js';
import cors from 'cors'

const connectMongoDB = async () => {
  dotenv.config();

  console.log('Configuration Start');
  mongoose.set('strictQuery', false);
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bfyavvg.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`)
}
connectMongoDB()
.then(() => console.log('Successfully connected mongodb'))
.catch((err) => console.log(err));

const app = express();


app.use(cors());

const asdadad = (req, res, next) => {

  next();
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(asdadad)

app.use('/', userRouter)



app.listen(10000, () => {
  console.log(`Connected 8080 Port`)
})
