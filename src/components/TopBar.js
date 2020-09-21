import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import {
  Avatar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Hidden,
  IconButton,
  Link,
  Tab,
  Tabs,
  Tooltip,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";

const lightColor = "rgba(255, 255, 255, 0.7)";

const useStyles = makeStyles((theme) => ({
  secondaryBar: {
    zIndex: 0,
    backgroundColor: "#1976d2",
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  button: {
    borderColor: lightColor,
  },
}));

const TopBar = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const handleClickSignIn = () => history.push("/signin");
  const handleClickSignUp = () => history.push("/signup");

  return (
    <React.Fragment>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Dental Marketplace
              </Typography>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={handleClickSignIn}>
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={handleClickSignUp}>
                Register
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="Create New Order" />
          <Tab textColor="inherit" label="See Existing Orders" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
};

export default TopBar;
