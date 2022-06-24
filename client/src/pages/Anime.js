import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Container, Row, Col } from "react-bootstrap";
import AnimeList from "../components/AnimeList/AnimeList";
import { fetchAllAnime } from "../http/animeAPI";
import { Context } from "../index";
import Pages from "../components/Pages";

const Anime = observer(() => {
	const { anime } = useContext(Context);

	useEffect(() => {
		fetchAllAnime(1, 10, null, null, null).then((data) => {
			anime.setAnimeList(data.rows);
			anime.setTotalCount(data.totalCount);
		});
	}, []);

	useEffect(() => {
		fetchAllAnime(
			anime.page,
			anime.limit,
			anime.selectedGenre,
			anime.selectedReleaseDateMin,
			anime.selectedReleaseDateMax
		).then((data) => {
			anime.setAnimeList(data.rows);
			anime.setTotalCount(data.totalCount);
		});
	}, [
		anime.page,
		anime.selectedGenre,
		anime.selectedReleaseDateMin,
		anime.selectedReleaseDateMax,
	]);

	return (
		<Container>
			<Row className="mt-2">
				{/*<Col md={3}> <TypeBar /> </Col>*/}
				<Col>
					{/* <BrandBar /> */}
					<AnimeList />
					<Pages />
				</Col>
			</Row>
		</Container>
	);
});

export default Anime;
