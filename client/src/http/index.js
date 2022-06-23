import axios from "axios";

const $host = axios.create({
	baseUrl: "http://localhost:3001/",
});

export { $host };
