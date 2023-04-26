import dotenv from "dotenv";
dotenv.config();

import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/Users.js";

const router = express.Router();

//NOTE - creating a new user with the userName and password and saving it to the database
router.post("/register", async (req, res) => {
	const { username, password } = req.body;
	const user = await userModel.findOne({ username });

	if (user) {
		return res.status(400).json({ message: "User already exists" });
	}
	//NOTE - hashing the password with bcrypt.hash()
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = new userModel({
		username,
		password: hashedPassword,
	});
	try {
		await newUser.save();
		res.json({ message: "User created successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error creating user" });
	}
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	const user = await userModel.findOne({ username });

	if (!user) {
		return res.status(400).json({ message: "User does not exist" });
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		return res.status(400).json({ message: "Invalid password" });
	}

	const token = jwt.sign(
		{
			id: user._id,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: "24h",
		}
	);
	res.json({ token, userID: user._id, message: "User logged in successfully" });
});

export { router as userRouter };
