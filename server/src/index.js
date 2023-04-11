import dotenv from 'dotenv';
dotenv.config();


import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://antoniojaraujo:${process.env.MONGODB_PASSWORD}@recipes.v9a2s95.mongodb.net/recipes?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3001, () => console.log('server started at port 3001'))