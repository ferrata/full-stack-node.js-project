import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Participant } from "./Participant";

export const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<any>({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch(`http://localhost:5000/events/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id, token]);

  if (!event.id) {
    return <CircularProgress />;
  }

  const starts = new Date(event.date_starts);
  const ends = new Date(event.date_ends);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            margin: "1rem",
          }}
        >
          <Box
            component="img"
            src={"https://source.unsplash.com/random"} // TODO: replace with the corresponding property
            sx={{
              width: "100%",
              maxHeight: "500px",
              borderRadius: "1rem",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexDirection: "column",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,

              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            <Box
              sx={{
                margin: "1rem",
              }}
            >
              <Typography variant="h1" component="h1">
                {event.name}
              </Typography>

              <Typography variant="body1" component="p">
                Starts: {starts.toDateString()} @ {starts.toLocaleTimeString()}
              </Typography>
              <Typography variant="body1" component="p">
                Ends: {ends.toDateString()} @ {ends.toLocaleTimeString()}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Typography
        variant="h2"
        component="h2"
        sx={{ textAlign: "center", marginTop: "1rem" }}
      >
        Participants
      </Typography>
      <List sx={{ width: "100%" }}>
        {event.participants.map((participant: any) => (
          <Participant key={participant.id} participant={participant} />
        ))}
      </List>
    </>
  );
};
