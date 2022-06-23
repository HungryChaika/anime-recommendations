const AnimeModel = require("../application/DB/models/AnimeModel");

class AnimeController {
	async getAll(req, res) {
		const { page = 1, limit = 10 } = req.query;
		const animes = await AnimeModel.findAndCountAll(
			limit,
			limit * page - limit
		);
		return res.json(animes);
	}

	async getById(req, res) {
		const { id } = req.params;
		const anime = await AnimeModel.findById(id);
		return res.json(anime);
	}
}

module.exports = new AnimeController();
