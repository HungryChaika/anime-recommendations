import { makeAutoObservable } from "mobx";

export default class AnimeStore {
	constructor() {
		this._animeList = [];
		this._selectedGenre = "";
		this._selectedReleaseDateMin = new Date();
		this._selectedReleaseDateMax = new Date();
		this._page = 1;
		this._limit = 10;
		this._totalCount = 0;

		makeAutoObservable(this);
	}

	setAnimeList(animeList) {
		this._animeList = animeList;
	}

	setSelectedGenre(selectedGenre) {
		this.setPage(1);
		this._selectedGenre = selectedGenre;
	}

	setSelectedReleaseDateMin(selectedReleaseDateMin) {
		this.setPage(1);
		this._selectedReleaseDateMin = selectedReleaseDateMin;
	}

	setSelectedReleaseDateMax(selectedReleaseDateMax) {
		this.setPage(1);
		this._selectedReleaseDateMax = selectedReleaseDateMax;
	}

	setPage(page) {
		this._page = page;
	}

	setLimit(limit) {
		this._limit = limit;
	}

	setTotalCount(totalCount) {
		this._totalCount = totalCount;
	}

	get animeList() {
		return this._animeList;
	}

	get selectedGenre() {
		return this._selectedGenre;
	}

	get selectedReleaseDateMin() {
		return this._selectedReleaseDateMin;
	}

	get selectedReleaseDateMax() {
		return this._selectedReleaseDateMax;
	}

	get page() {
		return this._page;
	}

	get limit() {
		return this._limit;
	}

	get totalCount() {
		return this._totalCount;
	}
}
