const Router = require("express").Router;
const AnimeController = require("../controllers/animeController");

const router = Router();

router.get("/", AnimeController.getAll);

router.get("/:id", AnimeController.getById);

module.exports = router;
