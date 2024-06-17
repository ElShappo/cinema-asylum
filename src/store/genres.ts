import { makeAutoObservable } from "mobx";
import { api } from "../api";
import { Genre } from "../types";

class Genres {
  #genres: string[];
  constructor() {
    makeAutoObservable(this);
    this.#genres = [];
  }
  async fetchGenres() {
    if (!this.#genres.length) {
      const res = (await api.get("genres")) as Genre[];
      this.#genres = res.map((genre) => genre.name);
      console.log(this.#genres);
    }
  }
  get() {
    return this.#genres;
  }
}

const genres = new Genres();
export default genres;
