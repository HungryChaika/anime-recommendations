import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "../../index";

const Pages = () => {
	const { anime } = useContext(Context);
	const pageCount = Math.ceil(anime.totalCount / anime.limit);
	const pages = [];

	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	console.log(anime.totalCount, anime.limit);

	return (
		<Pagination>
			<Pagination.First onClick={() => anime.setPage(1)} />
			<Pagination.Prev
				onClick={() => anime.setPage(anime.page > 1 ? anime.page - 1 : 1)}
			/>
			{/*<Pagination.Ellipsis />*/}
			{pages.map((page, i) => {
				if (i - 4 <= anime.page && i + 6 >= anime.page) {
					return (
						<Pagination.Item
							key={page}
							active={anime.page === page}
							onClick={() => anime.setPage(page)}
						>
							{page}
						</Pagination.Item>
					);
				}
			})}
			{/*<Pagination.Ellipsis />*/}
			<Pagination.Next
				onClick={() =>
					anime.setPage(anime.page < pageCount ? anime.page + 1 : pageCount)
				}
			/>
			<Pagination.Last onClick={() => anime.setPage(pageCount)} />
		</Pagination>
	);
};

export default Pages;
