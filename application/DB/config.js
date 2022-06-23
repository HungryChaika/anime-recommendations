module.exports = {
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME, //'anime_recommendations',
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT),
};
