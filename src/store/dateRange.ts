import { makeAutoObservable } from "mobx";
class DateRange {
  range: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  setRange(range: number[]) {
    this.range = range;
  }
  setMinYear(minYear: number) {
    this.range[0] = minYear;
  }
  setMaxYear(maxYear: number) {
    this.range[1] = maxYear;
  }
  getAll() {
    return this.range;
  }
  getMinYear() {
    return this.range[0];
  }
  getMaxYear() {
    return this.range[1];
  }
}

const dateRange = new DateRange();
export default dateRange;
