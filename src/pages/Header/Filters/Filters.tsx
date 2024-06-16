import DateRange from "./DateRange/DateRange";
import Genres from "./Genres/Genres";

const Filters = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4">
      <Genres />
      <DateRange />
    </div>
  );
};

export default Filters;
