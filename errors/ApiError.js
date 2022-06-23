class ApiError extends Error {
	constructor(message, statusCode) {
		this.message = message;
		this.statusCode = statusCode;
	}

	static badRequest(message) {
		return new ApiError(message, 400);
	}

	static internal(message) {
		return new ApiError(message, 500);
	}
}

module.exports = ApiError;
