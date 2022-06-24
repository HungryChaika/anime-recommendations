require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const db = require("./application/DB/DB");
const router = require("./routes/index");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");
const createDB = require("./application/DB/createDB");

const app = express();

const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3001;

app.use(cors());
app.use("/api", router);
app.get("/", express.static(path.resolve(__dirname, "/public")));
app.use((req, res) => res.status(404).send("<h1>Not found</h1>"));
app.use(errorHandlingMiddleware);

const start = async () => {
	try {
		//await createDB();
		await db.init();
		await db.backup(path.resolve(__dirname, "./data/anime-info.json"));
		app.listen(port, () =>
			console.log(`Server running at port ${port}. ${host}:${port}`)
		);
	} catch (e) {
		console.error(e);
	}
};

start();
