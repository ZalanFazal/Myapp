import React from "react";
import { Button, TextField, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { username: "user1", token: "fake-jwt-token" };

    dispatch(login(userData));
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{ display: "flex", flexDirection: "column", width: 300, margin: "auto" }}
    >
      <TextField label="Username" required sx={{ marginBottom: 2 }} />
      <TextField label="Password" type="password" required sx={{ marginBottom: 2 }} />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </Box>
  );
};

export default Login;
