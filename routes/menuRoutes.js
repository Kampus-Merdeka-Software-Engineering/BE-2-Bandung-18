const express = require('express');
const menuRoutes = express.Router()
const { prisma } = require('../config/prisma');

//get menu dessert box
menuRoutes.get("/", async (req, res) => {
	const menu = await prisma.menu.findMany();
	res.status(200).send(menu);
});

module.exports = { menuRoutes };

