import express from 'express';  
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { userModel } from '../models/users.js'; 

const router = express.Router();

router.post('/register', async (req, res) => {
    const { userName, password } = req.body;

    const user = await userModel.findOne({ userName }); 

    res.json(user);
})

router.post('/login');




export { router as userRouter };   