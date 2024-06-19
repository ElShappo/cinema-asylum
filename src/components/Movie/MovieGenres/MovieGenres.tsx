import { Movie } from "../../../types";
import { capitalizeFirstLetter } from "../../../utils";
import NoResults from "../../NoResults/NoResults";

type MovieDescriptionProps = {
  genres: Movie["genres"];
  isLoading: boolean;
};

const MovieGenres = ({ genres, isLoading }: MovieDescriptionProps) => {
  return (
    <article className="w-1/2 max-xl:w-full rounded-2xl p-4 px-8 bg-gray-800 bg-opacity-60 text-white">
      <h2>Жанр фильма</h2>
      {isLoading ? (
        <div>Загружаю описание...</div>
      ) : !genres || !genres.length ? (
        <NoResults text="Описание жанра фильма отсутствует" />
      ) : (
        <p
          className="pt-2"
          dangerouslySetInnerHTML={{
            __html: capitalizeFirstLetter(
              genres.map((genre) => genre.name).join(", ")
            ),
          }}
        ></p>
      )}
    </article>
  );
};

export default MovieGenres;
