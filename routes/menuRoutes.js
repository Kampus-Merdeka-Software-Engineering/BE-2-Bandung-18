const express = require('express');
const menuRoutes = express.Router()
const { prisma } = require('../config/prisma');

//get menu dessert box
menuRoutes.get("/", async (req, res) => {
	const menu = await prisma.menu.findMany();
	res.status(200).send(menu);
});

//get menu dessert box by id
menuRoutes.get("/:id", async (req, res) => {
	const menu = await prisma.menu.findUnique({
		where: {
			id: parseInt(req.params.id),
		},
	});
	if (!menu) 
		res.status(404).json({
		message: "Menu not found",
	});
	else res.status(200).json(menu);
});


module.exports = { menuRoutes };

