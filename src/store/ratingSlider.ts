import { makeAutoObservable } from "mobx";

class RatingSlider {
  #minRating: number = 0;
  #maxRating: number = 10;

  constructor() {
    makeAutoObservable(this);
  }

  setRating(rating: number[]) {
    this.#minRating = rating[0];
    this.#maxRating = rating[1];
  }

  setMinRating(minRating: number) {
    this.#minRating = minRating;
  }
  setMaxRating(maxRating: number) {
    this.#maxRating = maxRating;
  }
  getAll() {
    return [this.#minRating, this.#maxRating];
  }
  getMinRating() {
    return this.#minRating;
  }
  getMaxRating() {
    return this.#maxRating;
  }
}
const ratingSlider = new RatingSlider();
export default ratingSlider;
