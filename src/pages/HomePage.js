import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography, Button } from "@material-ui/core";
import Topbar from "../components/TopBar";

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    fontWeight: "bold",
  },
}));

const HomePage = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div>
      <Topbar />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Join the world's leading companies at TheFront 2020
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            World's largest Dental Marketplace
          </Typography>
          <Typography variant="h5">
            Want more information? Download our overview and a member of our
            specialist team will be in touch to talk about your goals
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button size={isMd ? "large" : "medium"} variant="contained">
            Download exhibitor overview
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

HomePage.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default HomePage;
