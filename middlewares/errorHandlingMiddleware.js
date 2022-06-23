const ApiError = require("../errors/ApiError");

module.exports = (err, req, res) => {
	if (err instanceof ApiError) {
		return res.status(err.statusCode).json({ message: err.message });
	}
	return res.status(500).json({ message: "Internal server error" });
};
