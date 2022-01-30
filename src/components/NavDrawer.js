import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryIcon from "@mui/icons-material/Category";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import FlagIcon from "@mui/icons-material/Flag";
import ReceiptIcon from "@mui/icons-material/Receipt";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import menuItems from "./menuItems";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  drawerPaper: {
    width: drawerWidth,
    marginTop: 74,
  },
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#10266E",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const NavDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
            }}
          >
            
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Product Data Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        
        <List>
        {menuItems.map((item, index) => {
          const { text, icon, url } = item;
          return (
            <ListItem button key={text} to={url}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
          {/* <ListItem button>
            <ListItemIcon>
              {" "}
              <CategoryIcon />{" "}
            </ListItemIcon>
            <ListItemText>Uncategorized Items</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <ProductionQuantityLimitsIcon />{" "}
            </ListItemIcon>
            <ListItemText>Worn & Dented</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <AssignmentIndIcon />{" "}
            </ListItemIcon>
            <ListItemText>My Flagged Items</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <FlagIcon />{" "}
            </ListItemIcon>
            <ListItemText>All Flagged Items</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <GroupWorkIcon />{" "}
            </ListItemIcon>
            <ListItemText>Items W/Few Attr</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <ReceiptIcon />{" "}
            </ListItemIcon>
            <ListItemText>Items Without COO</ListItemText>
          </ListItem> */}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
