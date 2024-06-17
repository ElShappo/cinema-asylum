import Button from "@mui/material/Button";
import DateRange from "./DateRange/DateRange";
import Genres from "./Genres/Genres";
import RatingSlider from "./RatingSlider/RatingSlider";

const Filters = () => {
  return (
    <div className="text-center p-7 space-y-4 pb-8">
      <section className="flex flex-col justify-center items-center gap-8">
        <Genres />
        <DateRange />
        <RatingSlider />
      </section>
      <Button variant="contained" color="success" size="large">
        Применить
      </Button>
    </div>
  );
};

export default Filters;
