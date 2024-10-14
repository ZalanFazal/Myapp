// pages/SignUp.jsx
import React from "react";
import { Button, TextField, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = { username: "newUser", token: "new-fake-jwt-token" };

    dispatch(login(userData));
    navigate("/dashboard");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSignUp}
      sx={{ display: "flex", flexDirection: "column", width: 300, margin: "auto" }}
    >
      <TextField label="Username" required sx={{ marginBottom: 2 }} />
      <TextField label="Password" type="password" required sx={{ marginBottom: 2 }} />
      <Button variant="contained" color="primary" type="submit">
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
