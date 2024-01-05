import React, { useState, useEffect } from "react";

import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Icon,
} from "@material-ui/core";

import { Link, useHistory, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import decode from "jwt-decode";

// import icon from "../Auth/icon";

import traveller from "../../images/traveller.jpg";

import * as actionType from "../../constants/actionTypes";

import useStyles from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  // Getting the logged navbar without refreshing the page
  useEffect(() => {
    const token = user?.token;

    // if the token is expired, then log out
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar className={classes.nav}>
        <Link to="/" className={classes.brandContainer}>
          <img
            className={classes.image}
            src={traveller}
            alt="traveller"
            height="55"
            component={Link}
            to="/"
          />
        </Link>
        <Typography className={classes.userName} variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography className={classes.userName} variant="h6">
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </Typography>
        {user && (
          <Typography className={classes.navItem} variant="h6">
            <Link
              className={classes.link}
              to={`/creators/${user?.result?.name}`}
            >
              My Posts
            </Link>
          </Typography>
        )}
      </Toolbar>

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
