import dotenv from 'dotenv';
dotenv.config();


import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { userRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);
app.use('/recipes', recipesRouter);

mongoose.connect(`mongodb+srv://antoniojaraujo:${process.env.MONGODB_PASSWORD}@recipes.v9a2s95.mongodb.net/recipes?retryWrites=true&w=majority`);

app.listen(3001, () => console.log('server started at port 3001'))