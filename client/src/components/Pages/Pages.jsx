import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Pages = observer(() => {
	const { anime } = useContext(Context);
	const pageCount = Math.ceil(anime.totalCount / anime.limit);
	const pages = [];

	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	return (
		<Pagination>
			<Pagination.First onClick={() => anime.setPage(1)} />
			<Pagination.Prev
				onClick={() => anime.setPage(anime.page > 1 ? anime.page - 1 : 1)}
			/>
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
			<Pagination.Next
				onClick={() =>
					anime.setPage(anime.page < pageCount ? anime.page + 1 : pageCount)
				}
			/>
			<Pagination.Last onClick={() => anime.setPage(pageCount)} />
		</Pagination>
	);
});

export default Pages;
