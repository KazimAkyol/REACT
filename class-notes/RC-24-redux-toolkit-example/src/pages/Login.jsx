import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        xs={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 100, height: 100 }}
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
        />
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField />
          <TextField />
          <Button>Sign In</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
