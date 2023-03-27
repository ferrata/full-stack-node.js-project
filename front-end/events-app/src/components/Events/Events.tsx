import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { EventCard } from "../EventCard";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("http://localhost:5000/events", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setEvents(data);
      });
  }, [token]);

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{ textAlign: "center", margin: "1rem" }}
      >
        Events
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {events.map((event: any) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Box>
    </>
  );
};
