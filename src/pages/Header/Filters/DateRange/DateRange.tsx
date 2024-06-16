import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

const DateRange = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section className="flex flex-wrap gap-4">
        <DemoItem label={<strong>Мин. год</strong>}>
          <DatePicker
            localeText={{
              start: "",
              end: "",
            }}
          />
        </DemoItem>
        <DemoItem label={<strong>Макс. год</strong>}>
          <DatePicker
            localeText={{
              start: "",
              end: "",
            }}
          />
        </DemoItem>
      </section>
    </LocalizationProvider>
  );
};

export default DateRange;
