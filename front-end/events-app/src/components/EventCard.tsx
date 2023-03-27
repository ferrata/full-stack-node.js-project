import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import CardContent from "@mui/material/CardContent/CardContent";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const EventCard = (props: any) => {
  const { event } = props;
  const { id, name, date_starts, date_ends, event_img_url } = event;

  return (
    <Card
      sx={{
        width: 300,
        height: "100%",
        margin: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={event_img_url || "https://source.unsplash.com/random"}
      />

      <CardHeader title={name} />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "flex-start",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Starts: {new Date(date_starts).toDateString()} @{" "}
          {new Date(date_starts).toLocaleTimeString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ends: {new Date(date_ends).toDateString()} @{" "}
          {new Date(date_ends).toLocaleTimeString()}
        </Typography>
      </CardContent>

      <CardActionArea
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          component={Link}
          to={`/events/${id}`}
          sx={{ width: "100%" }}
        >
          View
        </Button>
      </CardActionArea>
    </Card>
  );
};
