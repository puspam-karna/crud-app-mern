import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    background: "#ddd",
    color: " black",
  },
  tabs: {
    textDecoration: "none",
    fontSize: 20,
    marginRight: 20,
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink to="./" exact className={classes.tabs}>
          HomePage
        </NavLink>
        <NavLink to="all" exact className={classes.tabs}>
          All Users
        </NavLink>
        <NavLink to="add" exact className={classes.tabs}>
          Add Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
