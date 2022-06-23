const { Client } = require("pg");
const backup = require("./backup");
const dbConfig = require("./config");

class DB {
	constructor(config) {
		this.client = new Client(config);
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

module.exports = new DB(dbConfig);
