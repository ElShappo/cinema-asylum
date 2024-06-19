import { makeAutoObservable } from "mobx";

class FiltersSnapshot {
  #genres: string[] = [];
  #dateRange: number[] = [];
  #ratingSlider: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setGenres(genres: string[]) {
    this.#genres = genres;
  }
  setDateRange(dateRange: number[]) {
    this.#dateRange = dateRange;
  }
  setRatingSlider(ratingSlider: number[]) {
    this.#ratingSlider = ratingSlider;
  }

  getGenres() {
    return this.#genres;
  }
  getDateRange() {
    return this.#dateRange;
  }
  getRatingSlider() {
    return this.#ratingSlider;
  }
}

const filtersSnapshot = new FiltersSnapshot();
export default filtersSnapshot;
