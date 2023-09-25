import {
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  ListItem,
  ListItemButton,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ComputerIcon from "@mui/icons-material/Computer";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Close } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

import List from "@mui/material/List";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";
const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          className="border"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            bgcolor: theme.palette.myColor.marin,
            color: theme.palette.myyColor.marrin,
          }}
        >
          <WindowIcon />

          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Catagories
          </Typography>

          <Box flexGrow={1} />

          <ArrowForwardIosIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: "222px",
              bgcolor: theme.palette.myColor.marin,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DirectionsBikeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sports</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ComputerIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electroinc</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={5} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />

          <Links title={"Mega menu"} />

          <Links title={"Full screen menu"} />

          <Links title={"pages"} />

          <Links title={"Useraccount"} />

          <Links title={"Vender account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper.": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
              position: "absolute",
              top: 0,
              right: 8,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home", subLink: ["Link1", "Linke2", "Link3"] },
            { mainLink: "Mega menu", subLink: ["Link1", "Linke2", "Link3"] },
            {
              mainLink: "Full screen menu",
              subLink: ["Link1", "Linke2", "Link3"],
            },
            { mainLink: "Pages", subLink: ["Link1", "Linke2", "Link3"] },
            {
              mainLink: "Ueser account",
              subLink: ["Link1", "Linke2", "Link3"],
            },
            {
              mainLink: "Vendon account",
              subLink: ["Link1", "Linke2", "Link3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ my: "0", py: "0" }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ my: "0", py: "0" }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
