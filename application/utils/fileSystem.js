const fs = require("fs");

const readFile = async (path, encoding = "utf-8") => {
	return new Promise((resolve, reject) =>
		fs.readFile(path, { encoding }, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	);
};

module.exports = {
	readFile,
};
