const AnimeModel = require("../application/DB/models/AnimeModel");

class AnimeController {
	async getAll(req, res) {
		const {
			page = 1,
			limit = 10,
			genre,
			releaseDateMin,
			releaseDateMax,
		} = req.query;
		const offset = (page - 1) * limit;
		const animes = await AnimeModel.findAndCountAll({
			limit: Number(limit),
			offset,
			where:
				genre || releaseDateMin || releaseDateMax
					? { genre, releaseDateMin, releaseDateMax }
					: null,
		});
		return res.json(animes);
	}

	async getById(req, res) {
		const { id } = req.params;
		const anime = await AnimeModel.findById(id);
		return res.json(anime);
	}
}

module.exports = new AnimeController();
