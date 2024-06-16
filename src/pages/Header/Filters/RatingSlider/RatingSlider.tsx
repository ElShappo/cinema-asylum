import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

const RatingSlider = () => {
  const [value, setValue] = React.useState<number[]>([0, 10]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <section className="flex flex-col w-72">
      <h2 className="text-[15px] text-[#e3e3e3]">Рейтинг фильма</h2>
      <Slider
        min={0}
        max={10}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </section>
  );
};

export default RatingSlider;
