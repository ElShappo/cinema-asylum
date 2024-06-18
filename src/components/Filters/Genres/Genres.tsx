import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import {
  Box,
  Checkbox,
  CircularProgress,
  FormControl,
  ListItemText,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import genres from "../../../store/genres";
import { Store } from "react-notifications-component";
import { useSearchParams } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Genres = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [genresList, setGenresList] = useState<string[]>([]);
  const [isGenresLoading, setIsGenresLoading] = useState(false);

  // genres picked from URL are unsafe because a user could have manually typed unexisting genre
  // that is why apart from chosenGenres we also need to have filteredChosenGenres
  const filteredChosenGenres = useMemo(() => {
    const chosenGenres = searchParams.getAll("genre") || [];

    return chosenGenres.filter((chosenGenre) =>
      genresList.includes(chosenGenre)
    );
  }, [genresList, searchParams]);

  const handleChange = (
    event: SelectChangeEvent<typeof filteredChosenGenres>
  ) => {
    const {
      target: { value: genres },
    } = event;

    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.delete("genre");
    for (const genre of genres) {
      urlSearchParams.append("genre", genre);
    }
    setSearchParams(urlSearchParams);
  };

  useEffect(() => {
    async function fetchGenres() {
      if (!genres.get().length) {
        setIsGenresLoading(true);
        const notificationId = Store.addNotification({
          title: (
            <article className="flex items-center gap-4">
              <CircularProgress />
              <span className="text-base">Загружаю список жанров...</span>
            </article>
          ),
          type: "info",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 0,
            onScreen: true,
          },
        });
        try {
          // await new Promise((resolve, reject) => {
          //   setTimeout(() => reject(1), 4000);
          // });
          await genres.fetchGenres();
        } catch (error) {
          console.error(error);

          Store.addNotification({
            title: (
              <article className="flex items-center gap-4">
                <span className="text-base">
                  Не удалось загрузить список жанров
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
        setGenresList(genres.get());
        setIsGenresLoading(false);
        Store.removeNotification(notificationId);
      }
    }
    fetchGenres();
  }, []);

  return (
    <article className="w-full text-center">
      <InputLabel id="genres">
        <div className="pb-1 font-bold text-[15px] text-[#f5f5f5]">Жанры:</div>{" "}
      </InputLabel>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          multiple
          displayEmpty
          value={filteredChosenGenres}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => {
            if (!isGenresLoading) {
              if (selected.length === 0) {
                return <em>Все жанры</em>;
              }
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              );
            } else {
              return <em>Загружаю список жанров...</em>;
            }
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
        >
          {isGenresLoading ? (
            <div className="flex justify-center items-center gap-4 p-2">
              <CircularProgress />
            </div>
          ) : (
            <div>
              <MenuItem disabled value="">
                <Checkbox checked={!filteredChosenGenres.length} />
                <ListItemText primary={"Все жанры"} />
              </MenuItem>
              {genresList.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  <Checkbox
                    checked={filteredChosenGenres.indexOf(genre) > -1}
                  />
                  <ListItemText primary={genre} />
                </MenuItem>
              ))}
            </div>
          )}
        </Select>
      </FormControl>
    </article>
  );
});

export default Genres;
