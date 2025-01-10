import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";

const links = [
  { title: "Dashboard", url: "/stock", icon: "../assets/ic_analytics.svg" },
  { title: "Purchases", url: "/stock/purchases" },
];

const MenuListItems = () => {
  return (
    <div>
      <Toolbar />
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <Box
                sx={{
                  backgroundImage: `url(${item.icon})`,
                  width: "24px",
                  height: "24px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "red",
                  mr: 2,
                }}
              ></Box>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
