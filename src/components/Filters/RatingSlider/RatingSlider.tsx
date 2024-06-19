import Slider from "@mui/material/Slider";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { isRating } from "../../../utils";
import filtersSnapshot from "../../../store/filtersSnaphot";

const RatingSlider = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams(); // used to extract values from URL

  const ratingRange = useMemo(() => {
    let minRating = searchParams.get("min_rating") || 0;
    let maxRating = searchParams.get("max_rating") || 10;

    if (!isRating(minRating)) {
      minRating = 0;
    }
    if (!isRating(maxRating)) {
      maxRating = 10;
    }
    filtersSnapshot.setRatingSlider([+minRating, +maxRating]);
    // ratingSlider.setRating([+minRating, +maxRating]);

    return [+minRating, +maxRating];
  }, [searchParams]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const urlSearchParams = new URLSearchParams(searchParams);

    urlSearchParams.set("min_rating", (newValue as number[])[0].toString());
    urlSearchParams.set("max_rating", (newValue as number[])[1].toString());

    setSearchParams(urlSearchParams);
  };

  return (
    <article className="flex flex-col text-center max-sm:w-full xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/5">
      <h2 className="text-[15px] text-[#e3e3e3]">Рейтинг фильма (диапазон)</h2>
      <Slider
        step={1}
        min={0}
        max={10}
        getAriaLabel={() => "Movie rating"}
        value={ratingRange}
        onChange={handleChange}
        valueLabelDisplay="on"
      />
    </article>
  );
});

export default RatingSlider;
