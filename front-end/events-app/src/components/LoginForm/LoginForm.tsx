import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", { name: name, password: password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        const lastLocation = localStorage.getItem("redirect") || "/events";
        localStorage.removeItem("redirect");
        navigate(lastLocation);
      });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "23ch", display: "block" },
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="50vh"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input value={name} onChange={handleChange} placeholder="Name" />

        <Input
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          type="password"
        />

        <Button type="submit">Login</Button>
      </Box>
    </>
  );
};
