import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { Movie } from "../../../types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(
    !!localStorage.getItem("favourite_movies")?.includes(movie.id)
  );

  const handleCardClick = (id: string) => {
    navigate(`/movie/${id}`);
  };

  const handleToggleFavourites = () => {
    const prevFavourites = localStorage.getItem("favourite_movies");
    console.log("");
    console.log("before", prevFavourites);

    if (isActive) {
      // means now we remove current movie from favourites
      const regex = new RegExp(`${movie.id},?`);
      const newFavourites = prevFavourites
        ?.replace(regex, "")
        .replace(/,$/, "");
      localStorage.setItem("favourite_movies", newFavourites!);
    } else {
      // means now we add current movie to favourites

      if (!prevFavourites) {
        localStorage.setItem("favourite_movies", movie.id);
      } else {
        localStorage.setItem(
          "favourite_movies",
          `${prevFavourites},${movie.id}`
        );
      }
    }
    console.log("after", localStorage.getItem("favourite_movies"));
    setIsActive((prev) => !prev);
  };

  return (
    <Card sx={{ maxHeight: 600, width: 240 }}>
      <CardActions disableSpacing className="bg-zinc-700">
        <IconButton
          aria-label="add to favorites"
          onClick={handleToggleFavourites}
        >
          <FavoriteIcon color={isActive ? "error" : "action"} />
        </IconButton>
      </CardActions>
      <CardActionArea
        className="flex flex-col h-full justify-start items-start"
        onClick={() => handleCardClick(movie.id)}
      >
        <CardMedia
          component="img"
          image={movie.poster?.url || "/no-poster.jpg"}
          alt={movie.name}
        />
        <h3 className="p-4 pb-0 text-xl">
          {movie.name || (
            <span className="italic text-slate-600">Без названия</span>
          )}
        </h3>
        <CardContent className="overflow-auto">
          <Typography variant="body2" color="text.secondary">
            {movie.shortDescription ? (
              movie.shortDescription
            ) : movie.description ? (
              <div>{movie.description}</div>
            ) : (
              <span className="italic">Описание картины отсутствует</span>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
