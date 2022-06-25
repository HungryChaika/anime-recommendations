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

	async findAndCountAll({ limit, offset, where }) {
		let whereClause = "";
		if (where) {
			whereClause = `WHERE genres LIKE '%${where.genre}%' AND
										 release_date BETWEEN '${where.releaseDateMin}' AND
										 '${where.releaseDateMax}'`;
		}
		const query = `SELECT *
									 FROM anime
									 ${whereClause}
									 ORDER BY id
									 LIMIT $1 OFFSET $2`;
		const animeResult = await this.client.query(query, [limit, offset]);
		const allRowsResult = await this.client.query(
			`SELECT COUNT(*) FROM anime ${whereClause}`
		);
		return {
			rows: animeResult.rows,
			totalCount: Number(allRowsResult.rows[0].count),
		};
	}
}

module.exports = new AnimeModel(db.client);
