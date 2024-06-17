import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { maxDateString, minDateString } from "../../../constants";
import dayjs from "dayjs";
import { useState } from "react";

const DateRange = () => {
  const [startYear, setStartYear] = useState(dayjs(minDateString));
  const [endYear, setEndYear] = useState(dayjs(maxDateString));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <article className="flex flex-wrap justify-center gap-4 text-center">
        <DemoItem label={<strong>Мин. год</strong>}>
          <DatePicker
            minDate={dayjs(minDateString)}
            maxDate={dayjs(maxDateString)}
            disableFuture
            views={["year"]}
            localeText={{
              start: "",
              end: "",
            }}
            value={startYear}
            onChange={(newValue) => setStartYear(newValue!)}
          />
        </DemoItem>
        <DemoItem label={<strong>Макс. год</strong>}>
          <DatePicker
            minDate={startYear}
            maxDate={dayjs(maxDateString)}
            disableFuture
            views={["year"]}
            localeText={{
              start: "",
              end: "",
            }}
            value={endYear}
            onChange={(newValue) => setEndYear(newValue!)}
          />
        </DemoItem>
      </article>
    </LocalizationProvider>
  );
};

export default DateRange;
