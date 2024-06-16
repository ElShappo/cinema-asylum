import { Button } from "@mui/material";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";

const Logo = () => {
  return (
    <section className="pl-8">
      <Button
        color="secondary"
        startIcon={<MovieOutlinedIcon sx={{ width: 52, height: 52 }} />}
        className="text-2xl capitalize text-[#BFAB25] px-6 py-3"
      >
        <div>
          <h1 className="pl-2">Cinema Setara</h1>
          <p className="italic text-sm">Place where cinema resides...</p>
        </div>
      </Button>
    </section>
  );
};

export default Logo;
