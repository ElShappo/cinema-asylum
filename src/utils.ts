export function formatYear(year: string | number) {
  return `${year}-01-01`;
}

export function isYear(
  year: string | number,
  minYear: number,
  maxYear: number
) {
  return +year >= minYear && +year <= maxYear;
}

export function isRating(rating: string | number) {
  return +rating >= 0 && +rating <= 10;
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
