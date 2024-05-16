import React from "react";
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
} from "@mui/material";
import "./SignIn.css";

const Signin = () => {
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
          Sign in
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 2 }}></Box>
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Switch
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
          <Grid container>
            <Grid item>
              <Grid href="#" variant="body2">
                {"Don't have an account? "}
                <Link href="#" variant="body2">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signin;
