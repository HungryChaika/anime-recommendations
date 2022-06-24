import axios from "axios";

export const fetchAllAnime = async (
	page = 1,
	limit = 10,
	genre,
	releaseDateMin,
	releaseDateMax
) => {
	const { data } = await axios.get("http://localhost:3001/api/anime", {
		params: {
			page,
			limit,
			genre,
			releaseDateMin,
			releaseDateMax,
		},
	});
	return data;
};

export const fetchAnime = async (id) => {
	const { data } = await axios.get(`http://localhost:3001/api/anime/${id}`);
	return data;
};
