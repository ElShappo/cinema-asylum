export function formatYear(year: string | number) {
  return `${year}-01-01`;
}

export function isYear(
  strOrNum: string | number,
  minYear: number,
  maxYear: number
) {
  return +strOrNum >= minYear && +strOrNum <= maxYear;
}
