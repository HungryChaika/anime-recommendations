const { Client } = require("pg");
const backup = require("./backup");

class DB {
	constructor() {
		this.client = new Client({
			user: process.env.DB_USER,
			host: process.env.DB_HOST,
			database: process.env.DB_NAME, //'anime_recommendations',
			password: process.env.DB_PASSWORD,
			port: Number(process.env.DB_PORT),
		});
	}

	async init() {
		try {
			await this.client.connect();
		} catch (e) {
			console.error(e);
		}
	}

	async backup(filename) {
		return await backup(filename, this.client);
	}

	async close() {
		this.client.end(() => console.log("Connection closed"));
	}
}

module.exports = DB;
