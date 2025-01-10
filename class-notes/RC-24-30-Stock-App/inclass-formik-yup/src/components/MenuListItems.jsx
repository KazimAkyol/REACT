import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const icon = (name) => `public/assets/navbar/${name}.svg`;

const links = [
  {
    title: "Dashboard",
    url: "/stock",
    // icon:"/assets/navbar/ic_analytics.svg",
    icon: icon("ic_analytics"),
  },
  {
    title: "Firms",
    url: "/stock/firms",
    icon: icon("firms"),
  },
  {
    title: "Brands",
    url: "/stock/brands",
    icon: icon("brand"),
  },
  {
    title: "Purchases",
    url: "/stock/purchases",
    icon: icon("purchase"),
  },
  {
    title: "Sales",
    url: "/stock/sales",
    icon: icon("sales"),
  },
  {
    title: "Products",
    url: "/stock/products",
    icon: icon("ic_cart"),
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar />
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => navigate(item.url)}>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  mask: `url(${item.icon}) no-repeat center/contain`,
                  bgcolor: "currentcolor",
                  mr: 2,
                }}
              ></Box>
              {/* <Box sx={{
                    width:"24px",
                    height:"24px",
                    backgroundImage:`url(${item.icon})`,
                    backgroundSize:"contain",
                    backgroundRepeat:"no-repeat",
                    mr:2,
                    backgroundColor:"red",                    
                }}  ></Box> */}
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
