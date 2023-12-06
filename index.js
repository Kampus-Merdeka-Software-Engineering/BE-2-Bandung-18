require("dotenv").config();
const express = require("express");
const cors = require("cors");

//import prisma
const{ prisma } = require ("./config/prisma")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
	res.send("here is the response");
});

//menu routes

//get menu dessert box
app.get("/menuDessertbox", async (req, res) => {
	const menu = await prisma.menu.findMany();
	res.status(200).send(menu);
});

//get menu dessert box by id
app.get("/menuDessertbox/:id", async (req, res) => {
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

app.all("*", async (req, res) => {
	res.json({
		message: "Routes you're looking is not found",
	});
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Server is already running at ${PORT}`);
});