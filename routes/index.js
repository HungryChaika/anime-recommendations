const Router = require("express").Router;
const router = Router();
const animeRouter = require("./animeRouter");

router.use("/anime", animeRouter);

module.exports = router;
