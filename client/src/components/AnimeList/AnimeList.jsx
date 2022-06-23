import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../index";
import { Row } from "react-bootstrap";
import AnimeCard from "../AnimeCard";

const AnimeList = observer(() => {
	const { anime } = useContext(Context);

	return (
		<Row className="d-flex">
			{anime.animeList.map((anime) => (
				<AnimeCard key={anime.id} anime={anime} />
			))}
		</Row>
	);
});

export default AnimeList;
