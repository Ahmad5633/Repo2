import express from "express";
const router = express.Router();
import userModel from "../models/user.js";
import jwt from "jsonwebtoken";

router.post("/register", async (req, res) => {
	try {
		const user = await userModel.create(req.body);
		res.send(user);
	} catch (error) {
		res.status(500).send(error);
	}
});

export default router.post("/login", async (req, res) => {
	try {
		const user = await userModel.findOne({
			email: req.body.email,
			password: req.body.password,
		});
		if (!user) return res.status(401).send("Invalid email or password.");
		const token = jwt.sign({ id: user._id }, "my_temporary_secret", {
			expiresIn: "1h",
		});
		res.send(token);
	} catch (error) {
		res.status(500).send(error);
	}
});
