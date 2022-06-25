import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AnimeList from "../components/AnimeList/AnimeList";
import { fetchAllAnime } from "../http/animeAPI";
import { Context } from "../index";
import Pages from "../components/Pages";

const Anime = observer(() => {
	const { anime } = useContext(Context);

	useEffect(() => {
		fetchAllAnime(anime.page, anime.limit, null, null, null).then((data) => {
			anime.setAnimeList(data.rows);
			anime.setTotalCount(data.totalCount);
			anime.setSelectedReleaseDateMin(
				data.rows.reduce(
					(earliestDate, anime) =>
						new Date(anime.release_date || new Date()) < earliestDate
							? new Date(anime.release_date)
							: earliestDate,
					new Date()
				)
			);
			anime.setSelectedReleaseDateMax(new Date());
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
	}, [anime.page]);

	const handleFormSubmit = (e) => {
		e.preventDefault();
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
	};

	return (
		<Container>
			<Row className="mt-2">
				<Col md={3}>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicStartDate">
							<Form.Label>Дата выхода с</Form.Label>
							<Form.Control
								type="date"
								value={
									anime.selectedReleaseDateMin?.toISOString().split("T")[0] ||
									""
								}
								onChange={(e) =>
									anime.setSelectedReleaseDateMin(new Date(e.target.value))
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEndDate">
							<Form.Label>Дата выхода до</Form.Label>
							<Form.Control
								type="date"
								value={
									anime.selectedReleaseDateMax?.toISOString().split("T")[0] ||
									""
								}
								onChange={(e) =>
									anime.setSelectedReleaseDateMax(new Date(e.target.value))
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicGenre">
							<Form.Label>Жанр</Form.Label>
							<Form.Control
								type="text"
								value={anime.selectedGenre}
								onChange={(e) => anime.setSelectedGenre(e.target.value)}
							/>
						</Form.Group>
						<Button
							variant="primary"
							type="submit"
							onClick={(e) => handleFormSubmit(e)}
						>
							Поиск
						</Button>
					</Form>
				</Col>
				<Col md={9}>
					<AnimeList />
					<Pages />
				</Col>
			</Row>
		</Container>
	);
});

export default Anime;
