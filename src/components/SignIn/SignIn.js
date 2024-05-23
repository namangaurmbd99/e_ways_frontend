import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  FormControlLabel,
  Switch,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { post } from "services/api";
import "components/SignIn/SignIn.css";

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const { username, password } = formData;
    const signinCredentials = { username, password };
    post("/sessions", signinCredentials)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem(
          "current_user",
          JSON.stringify({ auth_token: token })
        );
        navigate("/");
      })
      .catch((error) => {
        setError(error.error || "An error occurred. Please try again.");
        console.log("Error while login: ", error);
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" className="title">
          <div className="blue-square"></div>
          Sign In
        </Typography>
        {error && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            {error}
          </Alert>
        )}
        <Box
          component="form"
          noValidate
          sx={{ mt: 1, width: "100%" }}
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.rememberMe}
                onChange={handleChange}
                name="rememberMe"
                sx={{
                  "& .Mui-checked": {
                    color: "#1976d2",
                  },
                }}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signin;
