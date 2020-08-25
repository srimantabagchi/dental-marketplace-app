import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TopBar from "../components/TopBar";
import { Toolbar, Paper } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
//import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: "#1976d2",
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function OrderForm() {
  const [typesOfRestorations] = useState([
    { id: 1, type: "Provisional Restorations" },
    { id: 2, type: "Dentures/Flippers/Flexible Partials" },
    { id: 3, type: "Nightguards/Retainers" },
    { id: 4, type: "Snoring/Sleep Apnea Appliances" },
    { id: 5, type: "Playsafe Mouthguards" },
    { id: 6, type: "Zirconia/All-Ceramic Restorations" },
    { id: 7, type: "Vivaneer/Veneer" },
    { id: 8, type: "PFM" },
    { id: 9, type: "Screw-Retained Restorations" },
    { id: 10, type: "Custom Abutments" },
    { id: 11, type: "Complete Restorations" },
    { id: 12, type: "Full-cast Restorations" },
    { id: 13, type: "Simply Natural Metal Partials" },
  ]);

  const [restorationId, setRestorationId] = useState(0);

  function currentId(value) {
    console.log("A name was submitted");
    if (value === null) {
      setRestorationId(0);
    } else {
      setRestorationId(value.id);
    }
  }

  function renderRestorationSubsection() {
    return <div>The count is {restorationId}</div>;
  }

  const classes = useStyles();

  return (
    <div>
      <TopBar />
      <Toolbar />
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Typography variant="h3" gutterBottom>
              Order Form
            </Typography>
            <Autocomplete
              id="restoration-type"
              options={typesOfRestorations}
              getOptionLabel={(option) => option.type}
              style={{ width: 300 }}
              onChange={(event, newValue) => {
                currentId(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Restoration Type"
                  variant="outlined"
                />
              )}
            />
            {restorationId !== 0 && renderRestorationSubsection()}
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </form>
    </div>
  );
}
