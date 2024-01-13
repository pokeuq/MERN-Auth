import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import path from 'path'
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("conntected to monogDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '/MERN auth/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'MERN auth','dist', 'index.html'))
} )
app.use(express.json())

app.use(cookieParser())

app.listen(3000, () => {
  console.log("serv 3000");
});

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})