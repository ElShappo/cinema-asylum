import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import { CardActions } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Card sx={{ width: 240, m: 2 }}>
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

      <CardContent>
        <Skeleton
          width="50%"
          animation="wave"
          height={30}
          style={{ marginBottom: 8 }}
        />
        <Skeleton animation="wave" height={10} width="80%" />
        <Skeleton animation="wave" height={10} width="80%" />
        <Skeleton animation="wave" height={10} width="80%" />
      </CardContent>
      <CardActions>
        <Skeleton animation="wave" height={40} width="8%" className="ml-2" />
      </CardActions>
    </Card>
  );
};

export default CardSkeleton;
