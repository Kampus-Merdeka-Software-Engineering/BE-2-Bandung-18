require("dotenv").config();
const express = require("express");
const cors = require("cors");

//import menu routes
const{ menuRoutes } = require('./routes/menuRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
	res.send("here is the response");
});

//menu routes
app.use("/menuDessertbox", menuRoutes);

//message routes
app.use("/messages", messageRoutes);

app.all("*", async (req, res) => {
	res.json({
		message: "Routes you're looking is not found",
	});
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Server is already running at ${PORT}`);
});