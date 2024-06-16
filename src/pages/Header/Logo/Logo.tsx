import { Button } from "@mui/material";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";

const Logo = () => {
  return (
    <section className="pl-16 max-md:pl-0">
      <Button
        color="error"
        startIcon={<MovieOutlinedIcon sx={{ width: 52, height: 52 }} />}
        className="text-2xl capitalize text-error px-6 py-3 rounded-xl"
      >
        <div>
          <h1 className="pl-2 max-sm:hidden">Cinema Setara</h1>
          <p className="italic text-sm max-md:hidden">
            Place where cinema resides...
          </p>
        </div>
      </Button>
    </section>
  );
};

export default Logo;
