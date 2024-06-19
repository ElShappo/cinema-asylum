import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MovieTitle from "../../../components/Movie/MovieTitle/MovieTitle";
import MovieRatings from "../../../components/Movie/MovieRatings/MovieRatings";
import MovieDescription from "../../../components/Movie/MovieDescription/MovieDescription";
import { Button } from "@mui/material";
import { Store } from "react-notifications-component";
import { api } from "../../../api";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Movie } from "../../../types";
import MovieAdditionalInfo from "../../../components/Movie/MovieAdditionalInfo/MovieAdditionalInfo";

const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<Movie>();
  const [movieLoading, setMovieLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchMovie() {
      if (id) {
        setMovieLoading(true);

        try {
          const movie = await api.getMovieById(id);
          setMovie(movie);
        } catch (error) {
          Store.addNotification({
            title: (
              <article className="flex items-center gap-4">
                <span className="text-base">Не удалось загрузить фильм</span>
              </article>
            ),
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
        }

        setMovieLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  return (
    <main>
      <div
        className="bg-cover min-h-[700px] shadow-inner brightness-90"
        style={{
          backgroundImage: `url(${movie?.backdrop?.url})`,
          boxShadow: "inset 0 0 200px 200px rgba(0,0,0,0.9)",
        }}
      >
        <div className="px-6 pt-6">
          <Button
            color="error"
            className="flex items-center"
            onClick={() => navigate(-1)}
          >
            <KeyboardBackspaceIcon fontSize="large" />
          </Button>
        </div>
        <MovieTitle title={movie?.name} />
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 py-8 px-14">
          <MovieDescription
            description={movie?.description}
            isLoading={movieLoading}
          />
          <MovieAdditionalInfo
            genres={movie?.genres}
            year={movie?.year}
            isLoading={movieLoading}
          />
          <MovieRatings rating={movie?.rating} isLoading={movieLoading} />
        </div>
      </div>
    </main>
  );
};

export default MoviePage;
