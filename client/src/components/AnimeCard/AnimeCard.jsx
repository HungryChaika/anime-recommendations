import React from "react";
import styles from "./AnimeCard.module.css";
import { Card, Image } from "react-bootstrap";

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
			<Image width={250} height={350} src={image_url} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default AnimeCard;
