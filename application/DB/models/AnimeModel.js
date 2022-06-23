const db = require("../DB.js");

class AnimeModel {
	constructor(dbClient) {
		this.client = dbClient;
	}

	async findById(id) {
		const query = "SELECT * FROM anime WHERE id = $1";
		const values = [id];
		const result = await this.client.query(query, values);
		return result.rows[0];
	}

	async findAndCountAll(limit, offset) {
		const query = "SELECT * FROM anime ORDER BY id LIMIT $1 OFFSET $2";
		const values = [limit, offset];
		const animeResult = await this.client.query(query, values);
		const allRowsResult = await this.client.query("SELECT COUNT(*) FROM anime");
		return {
			rows: animeResult.rows,
			totalCount: Number(allRowsResult.rows[0].count),
		};
	}
}

module.exports = new AnimeModel(db.client);
