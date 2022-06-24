import React from "react";
import { Card } from "react-bootstrap";

const AnimeCard = ({ anime }) => {
	const {
		id,
		title,
		type,
		episodes_amount,
		status,
		genres,
		primary_source,
		release_date,
		age_rating,
		episode_duration,
		description,
		image_url,
	} = anime;
	return (
		<Card>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					Дата выхода: {new Date(release_date).toDateString()}
				</Card.Text>
				<Card.Text>Описание: {description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default AnimeCard;
