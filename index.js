require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

// MIDDLE-WARE TO GET DATA IN THE JSON FORMAT :
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		server.listen(PORT, () => {
			console.log("Database connection established");
			console.log(`Server listening on ${PORT}...`);
		});
	})
	.catch((err) => console.error("Database connection error: " + err));
