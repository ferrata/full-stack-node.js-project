import {
  Button,
  Checkbox,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { MouseEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
  const [user, setUser] = useState<any>({
    name: "",
    surname: "",
    email: "",
    date_of_birth: "",
    age: "",
    event_ids: [],
  });
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/events", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  const handleChange = (e: any) => {
    let newUser = { ...user, [e.target.name]: e.target.value };

    if (e.target.name === "date_of_birth") {
      const age =
        new Date().getFullYear() - new Date(e.target.value).getFullYear();
      newUser = { ...newUser, age };
    }

    setUser(newUser);
  };

  const handleEventToggle = (
    id: number
  ): MouseEventHandler<HTMLDivElement> | undefined => {
    const selectedEvents = user.event_ids;
    const currentIndex = selectedEvents.indexOf(id);
    const newSelectedEvents = [...selectedEvents];

    if (currentIndex === -1) {
      newSelectedEvents.push(id);
    } else {
      newSelectedEvents.splice(currentIndex, 1);
    }

    setUser({ ...user, event_ids: newSelectedEvents });
    return;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users", user, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        // console.log(response);
        navigate("/users");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{ textAlign: "center", margin: "1rem" }}
      >
        Create User
      </Typography>

      <Box
        component="form"
        display="flex"
        justifyContent="center"
        alignItems="top"
        flexDirection={{ xs: "column", sm: "row" }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            "& > :not(style)": { m: 2, width: "23ch", display: "block" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Input
            placeholder="First Name"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <Input
            placeholder="Last Name"
            type="text"
            name="surname"
            value={user.surname}
            onChange={handleChange}
          />

          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <Input
            placeholder="Date of Birth"
            type="date"
            name="date_of_birth"
            value={user.date_of_birth}
            onChange={handleChange}
          />
          <InputLabel htmlFor="age">Age</InputLabel>
          <Input disabled name="age" value={user.age} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: { xs: "center", sm: "flex-start" },
            flexDirection: "column",
            width: { xs: "100%", sm: "50%" },
            marginLeft: { xs: "0", sm: "2rem" },
          }}
        >
          <InputLabel htmlFor="events">Events</InputLabel>

          <List onChange={handleChange}>
            {events.map((event: any) => {
              const labelId = `checkbox-list-label-${event.id}`;

              return (
                <ListItem key={event.id} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={(e) => handleEventToggle(event.id)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={user.event_ids.indexOf(event.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={event.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        sx={{ margin: "1rem" }}
      >
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{ margin: "1rem" }}
        >
          Create User
        </Button>
      </Box>
    </>
  );
};
