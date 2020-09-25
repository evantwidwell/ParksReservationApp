import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar:{
    background: '#076727'
  }
}));

const Navigation = () => {
  const classes = useStyles();
  if(document.cookie){
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.appBar}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            State Parks
          </Typography>
          <ul className="nav-list">
            <Button color="inherit" href="/current">Current Reservations</Button>
            <Button color="inherit" href="/list">Parks List</Button>
            
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );} else {
    return(
      <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            State Parks
          </Typography>
          <ul className="nav-list">
            
            <Button color="inherit" href="/">Login</Button>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
};

export default Navigation;
