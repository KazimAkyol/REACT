import React from "react";
import { Container, Typography } from "@mui/material";

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ background: "aqua" }}>
        <Typography variant="h1" component="h2">
          h1. Heading
        </Typography>
      </Container>
    </div>
  );
};

export default TypoButtons;
