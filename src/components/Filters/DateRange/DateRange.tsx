import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { maxYear, minYear } from "../../../constants";
import dayjs from "dayjs";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { formatYear, isYear } from "../../../utils";

const startYearString = "start_year";
const endYearString = "end_year";

const DateRange = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const startYearDayjs = useMemo(() => {
    let urlStartYear = searchParams.get(startYearString) || minYear;

    // user could manually change year in URL
    // thus we need to check whether year was typed correctly
    // moreover, we need to check whether typed year is within bounds
    if (!isYear(urlStartYear, minYear, maxYear)) {
      urlStartYear = minYear;
    }

    return dayjs(formatYear(urlStartYear));
  }, [searchParams]);

  const endYearDayjs = useMemo(() => {
    let urlEndYear = searchParams.get(endYearString) || maxYear;

    // user could manually change year in URL
    // thus we need to check whether year was typed correctly
    // moreover, we need to check whether typed year is within bounds
    if (!isYear(urlEndYear, minYear, maxYear)) {
      urlEndYear = maxYear;
    }

    return dayjs(formatYear(urlEndYear));
  }, [searchParams]);

  const handleStartYearChange = (newValue: dayjs.Dayjs | null) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set(startYearString, newValue!.year().toString());
    setSearchParams(urlSearchParams);
  };

  const handleEndYearChange = (newValue: dayjs.Dayjs | null) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set(endYearString, newValue!.year().toString());
    setSearchParams(urlSearchParams);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <article className="flex flex-wrap justify-center gap-4 text-center">
        <DemoItem label={<strong>Мин. год</strong>}>
          <DatePicker
            minDate={dayjs(formatYear(minYear))}
            maxDate={dayjs(formatYear(maxYear))}
            disableFuture
            views={["year"]}
            localeText={{
              start: "",
              end: "",
            }}
            value={startYearDayjs}
            onChange={handleStartYearChange}
          />
        </DemoItem>
        <DemoItem label={<strong>Макс. год</strong>}>
          <DatePicker
            minDate={startYearDayjs}
            maxDate={dayjs(formatYear(maxYear))}
            disableFuture
            views={["year"]}
            localeText={{
              start: "",
              end: "",
            }}
            value={endYearDayjs}
            onChange={handleEndYearChange}
          />
        </DemoItem>
      </article>
    </LocalizationProvider>
  );
};

export default DateRange;
