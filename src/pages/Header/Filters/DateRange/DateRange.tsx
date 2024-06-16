import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";

const ProSpan = styled("span")({
  display: "inline-block",
  height: "1em",
  width: "1em",
  verticalAlign: "middle",
  marginLeft: "0.3em",
  marginBottom: "0.08em",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url(https://mui.com/static/x/pro.svg)",
});

function Label({
  componentName,
  valueType,
  isProOnly,
}: {
  componentName: string;
  valueType: string;
  isProOnly?: boolean;
}) {
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a
            href="https://mui.com/x/introduction/licensing/#pro-plan"
            aria-label="Included on Pro package"
          >
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}

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
