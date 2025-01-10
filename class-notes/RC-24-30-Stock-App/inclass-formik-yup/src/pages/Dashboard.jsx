import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STOCK APP
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Button onClick={() => setIsOpen(true)}>Dashboard</Button>
        <Drawer open={isOpen}>
          <Box sx={{ width: "120px", textAlign: "center" }}>
            <h1>Dashboard</h1>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Dashboard;
