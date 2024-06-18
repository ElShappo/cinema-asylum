import { makeAutoObservable } from "mobx";
import { maxYear, minYear } from "../constants";

class DateRange {
  #minYear: number = minYear;
  #maxYear: number = maxYear;
  constructor() {
    makeAutoObservable(this);
  }
  setMinYear(minYear: number) {
    this.#minYear = minYear;
  }
  setMaxYear(maxYear: number) {
    this.#maxYear = maxYear;
  }
  getAll() {
    return [this.#minYear, this.#maxYear];
  }
  getMinYear() {
    return this.#minYear;
  }
  getMaxYear() {
    return this.#maxYear;
  }
}

const dateRange = new DateRange();
export default dateRange;
