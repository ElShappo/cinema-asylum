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
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import genres from "../../../store/genres";
import { Store } from "react-notifications-component";

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
  const [chosenGenres, setChosenGenres] = useState<string[]>([]);
  const [genresList, setGenresList] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof chosenGenres>) => {
    const {
      target: { value },
    } = event;
    setChosenGenres(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    async function fetchGenres() {
      if (!genres.get().length) {
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
        await genres.fetchGenres();
        setGenresList(genres.get());
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
          value={chosenGenres}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => {
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
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
        >
          <MenuItem disabled value="">
            <Checkbox checked={!chosenGenres.length} />
            <ListItemText primary={"Все жанры"} />
          </MenuItem>
          {genresList.map((genre) => (
            <MenuItem key={genre} value={genre}>
              <Checkbox checked={chosenGenres.indexOf(genre) > -1} />
              <ListItemText primary={genre} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </article>
  );
});

export default Genres;
