import Button from "@mui/material/Button";
import DateRange from "./DateRange/DateRange";
import Genres from "./Genres/Genres";
import RatingSlider from "./RatingSlider/RatingSlider";
import genres from "../../store/genres";
import dateRange from "../../store/dateRange";
import ratingSlider from "../../store/ratingSlider";
import filtersSnapshot from "../../store/filtersSnaphot";

const Filters = () => {
  const handleSubmit = () => {
    genres.setChosenGenres(filtersSnapshot.getGenres());
    dateRange.setRange(filtersSnapshot.getDateRange());
    ratingSlider.setRating(filtersSnapshot.getRatingSlider());
  };

  return (
    <div className="text-center p-7 space-y-4 pb-8">
      <section className="flex flex-col justify-center items-center gap-8">
        <Genres />
        <DateRange />
        <RatingSlider />
      </section>
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={handleSubmit}
      >
        Применить
      </Button>
    </div>
  );
};

export default Filters;
