import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";

const links = [
  {
    title: "Dashboard",
    url: "/stock",
    icon: "public/assets/navbar/ic_analytics.svg",
  },
  {
    title: "Purchases",
    url: "/stock/purchases",
    icon: "public/assets/navbar/purchase.svg",
  },
];

const MenuListItems = () => {

    const navigate = useNavigate()

  return (
    <div>
      <Toolbar />
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <Box
                sx={{
                  mask: `url(${item.icon}) no-repeat center/contain`,
                  width: "24px",
                  height: "24px",
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
