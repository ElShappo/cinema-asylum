import DateRange from "./DateRange/DateRange";
import Genres from "./Genres/Genres";
import RatingSlider from "./RatingSlider/RatingSlider";

const Filters = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4">
      <Genres />
      <DateRange />
      <RatingSlider />
    </div>
  );
};

export default Filters;
