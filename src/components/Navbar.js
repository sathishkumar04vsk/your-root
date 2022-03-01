import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="Appbar" position="static">
        <Toolbar>
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/55/55283.png"
          />
          <p className="yr">Y'R</p>
          <div className="nav-items">
            <Button color="inherit" onClick={() => history.push("/")}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => history.push("/cars_your_root")}
            >
              Cars
            </Button>
            <Button
              color="inherit"
              onClick={() => history.push("/bikes_your_root")}
            >
              Bikes
            </Button>
            <IconButton onClick={() => history.push("/card")}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
