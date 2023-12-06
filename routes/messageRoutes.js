const express = require("express");
const messageRoutes = express.Router();
const { prisma } = require("../config/prisma");

// create new message
messageRoutes.post("/", async (req, res) => {
	const { name, message } = req.body;
	const newMessage = await prisma.contactus.create({
		data: {
			name: name,
			message: message,
		},
	});
	res.status(201).json({
		message: "Message created",
		data: newMessage,
	});
});

module.exports = { messageRoutes };