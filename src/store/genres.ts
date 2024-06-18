import { makeAutoObservable } from "mobx";

class Genres {
  #allGenres: string[];
  #chosenGenres: string[];
  constructor() {
    makeAutoObservable(this);
    this.#allGenres = [];
    this.#chosenGenres = [];
  }
  setChosenGenres(genres: string[]) {
    this.#chosenGenres = genres;
  }
  getChosenGenres() {
    return this.#chosenGenres;
  }
  setAllGenres(genres: string[]) {
    this.#allGenres = genres;
  }
  getAllGenres() {
    return this.#allGenres;
  }
}

const genres = new Genres();
export default genres;
