import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <>
      <CircularProgress />
      <span className="text-base">Загружаю список жанров...</span>
    </>
  );
};

export default Loader;
