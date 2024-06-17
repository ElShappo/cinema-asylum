import * as React from "react";
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
    <article className="flex flex-col text-center max-sm:w-full xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/5">
      <h2 className="text-[15px] text-[#e3e3e3]">Рейтинг фильма (диапазон)</h2>
      <Slider
        min={0}
        max={10}
        getAriaLabel={() => "Movie rating"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
      />
    </article>
  );
};

export default RatingSlider;
