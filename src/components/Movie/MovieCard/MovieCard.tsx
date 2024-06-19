import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { Movie } from "../../../types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card sx={{ maxHeight: 600, width: 240 }}>
      <CardActionArea
        className="flex flex-col h-full justify-start items-start"
        onClick={() => handleCardClick(movie.id)}
      >
        <CardMedia
          component="img"
          image={movie.poster?.url || "/no-poster.jpg"}
          alt={movie.name}
        />
        <h3 className="p-4 pb-0 text-xl">{movie.name}</h3>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
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
