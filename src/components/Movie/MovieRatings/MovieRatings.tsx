import { Divider } from "@mui/material";
import { Movie } from "../../../types";
import NoResults from "../../NoResults/NoResults";

type MovieRatingsProps = {
  rating: Movie["rating"] | undefined;
  isLoading: boolean;
};

const MovieRatings = ({ rating, isLoading }: MovieRatingsProps) => {
  return (
    <article className="w-1/5 max-xl:w-full rounded-2xl p-4 px-8 bg-gray-800 bg-opacity-60 text-white">
      <h2>Рейтинги</h2>
      {isLoading ? (
        <div>Загружаю рейтинги...</div>
      ) : !rating ? (
        <NoResults text="Рейтинг фильма отсутствует" />
      ) : (
        <>
          <div className="flex items-baseline">
            <h4>IMDB: </h4>
            <p className="pt-2 pl-2">{rating?.imdb}</p>
          </div>
          <div className="flex items-baseline">
            <h4>Кинопоиск: </h4>
            <p className="pt-2 pl-2">{rating?.kp}</p>
          </div>
          <Divider className="m-3" />
          <div className="flex items-baseline">
            <h4>Российские критики: </h4>
            <p className="pl-2">{rating?.russianFilmCritics}</p>
          </div>
          <div className="flex items-baseline">
            <h4>Зарубежные критики: </h4>
            <p className="pt-2 pl-2">{rating?.filmCritics}</p>
          </div>
        </>
      )}
    </article>
  );
};

export default MovieRatings;
