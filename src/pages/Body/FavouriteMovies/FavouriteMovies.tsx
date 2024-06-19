import { useEffect, useMemo, useState } from "react";
import { api } from "../../../api";
import { Movie } from "../../../types";
import { defaultPagesCount, pageLimit } from "../../../constants";
import { Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import { Store } from "react-notifications-component";
import { observer } from "mobx-react-lite";
import MovieCard from "../../../components/Movie/MovieCard/MovieCard";
import NoResults from "../../../components/NoResults/NoResults";

const FavouriteMovies = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState<Movie[] | undefined>([]); // movies to display on page

  const moviesIds = localStorage.getItem("favourite_movies")?.split(",") || []; // all ids

  const pageNo = useMemo(
    () => +(searchParams.get("pageNo") || 1),
    [searchParams]
  );

  const moviesIdsOnPage = useMemo(() => {
    return moviesIds?.filter(
      (_movie, index) =>
        index >= pageLimit * (pageNo - 1) && index <= pageLimit * pageNo - 1
    );
  }, [moviesIds, pageNo]); // ids of movies to appear on page

  const [pagesCount, setPagesCount] = useState(defaultPagesCount);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set("pageNo", value.toString());
    setSearchParams(urlSearchParams);
    console.log(pageNo);
  };

  useEffect(() => {
    async function fetchMovies() {
      setIsMoviesLoading(true);
      try {
        const movies = (await Promise.all(
          moviesIdsOnPage.map((id) => api.getMovieById(id))
        )) as Movie[];

        setMovies(movies);
        setIsMoviesLoading(false);
        setPagesCount(Math.ceil(moviesIdsOnPage.length / pageLimit));
      } catch (error) {
        setIsMoviesLoading(false);
        Store.addNotification({
          title: (
            <article className="flex items-center gap-4">
              <span className="text-base">
                Не удалось загрузить список фильмов
              </span>
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
    }
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);

  if (isMoviesLoading) {
    return (
      <section className="flex flex-wrap gap-8 justify-center overflow-y-auto p-8">
        {new Array(pageLimit).fill(1).map((_value, index) => (
          <CardSkeleton key={index} />
        ))}
      </section>
    );
  } else if (!movies?.length) {
    return <NoResults />;
  } else {
    return (
      <>
        <main>
          <section className="flex flex-wrap gap-8 justify-center overflow-y-auto p-8">
            {movies!.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </section>
        </main>
        <footer className="w-full fixed flex justify-center bottom-0 bg-[#242424] bg-opacity-80 py-4">
          <Pagination
            count={pagesCount}
            page={pageNo}
            onChange={handlePageChange}
          />
        </footer>
      </>
    );
  }
});

export default FavouriteMovies;
