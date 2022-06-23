require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const DB = require("./application/DB/DB");
const router = require("./routes/index");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");

const app = express();

const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3001;

const db = new DB();

app.use(cors());
app.use("/", express.static(path.resolve(__dirname + "/public")));
app.use("/api", router);
app.use(errorHandlingMiddleware);

const start = async () => {
	try {
		await db.init();
		await db.backup(path.resolve(__dirname, "./data/anime.json"));
		app.listen(port, () =>
			console.log(`Server running at port ${port}. ${host}:${port}`)
		);
	} catch (e) {
		console.error(e);
	}
};

start();
