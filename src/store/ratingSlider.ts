import { makeAutoObservable } from "mobx";

class RatingSlider {
  rating: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setRating(rating: number[]) {
    this.rating = rating;
  }

  setMinRating(minRating: number) {
    this.rating[0] = minRating;
  }
  setMaxRating(maxRating: number) {
    this.rating[1] = maxRating;
  }
  getAll() {
    return this.rating;
  }
  getMinRating() {
    return this.rating[0];
  }
  getMaxRating() {
    return this.rating[1];
  }
}
const ratingSlider = new RatingSlider();
export default ratingSlider;
