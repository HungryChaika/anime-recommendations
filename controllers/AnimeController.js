const DB = require("../application/DB/DB");

class AnimeController {
	async getAll(req, res) {
		return res.json({ message: "All anime" });
	}

	async getById(req, res) {
		return res.json({ message: `Anime with id: ${req.params.id}` });
	}
}

module.exports = new AnimeController();
