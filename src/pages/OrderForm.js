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
import {
  Toolbar,
  Paper,
  Slide,
  Radio,
  RadioGroup,
  Divider,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
//import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
  },
  shaderRoot: {
    width: "fit-content",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
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
  root2: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function OrderForm() {
  const [typesOfRestorations] = useState([
    { id: 1, type: "All-Ceramics & Zirconia" },
    { id: 2, type: "Vivaneer Veneer" },
    { id: 3, type: "Porcelain Fused to Metal" },
    { id: 4, type: "Screw-Retained Restorations" },
    { id: 5, type: "Custom Implant Abutments" },
    { id: 6, type: "Composite Restorations" },
    { id: 7, type: "Full-cast Restorations" },
    { id: 8, type: "Simply Natural Metal Partials" },
  ]);

  const [restorationId, setRestorationId] = useState(0);

  const [ceramicRestoration, setCeramicRestoration] = useState("");

  const [finalShade, setfinalShade] = useState("");

  const [stumpShade, setstumpShade] = useState("");

  const [occlusalStaining, setOcclusalStaining] = useState("");

  const handleceramicRestorationChange = (event) => {
    setCeramicRestoration(event.target.value);
  };

  const handleocclusalStainingChange = (event) => {
    setOcclusalStaining(event.target.value);
  };

  function currentId(value) {
    console.log("A name was submitted");
    if (value === null) {
      setRestorationId(0);
    } else {
      setRestorationId(value.id);
    }
  }

  function renderId1() {
    return (
      <React.Fragment>
        <Slide direction="right" in={restorationId} mountOnEnter unmountOnExit>
          <Grid container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid
              item
              xs={6}
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <Paper elevation={3} style={{ padding: "1rem", width: "100%" }}>
                <Typography
                  variant="h5"
                  component="h5"
                  paragraph={true}
                  gutterBottom={true}
                >
                  All Ceramics & Zirconia
                </Typography>
                <RadioGroup
                  aria-label="ceramics"
                  name="ceramics"
                  value={ceramicRestoration}
                  onChange={handleceramicRestorationChange}
                >
                  <FormControlLabel
                    value="option1"
                    control={<Radio />}
                    label="BruxZir Full-Strength (1,150 MPa)"
                  />
                  <FormControlLabel
                    value="option2"
                    control={<Radio />}
                    label="BruxZir Esthetic (870 MPa)"
                  />
                  <FormControlLabel
                    value="option3"
                    control={<Radio />}
                    label="Obsidian All-Ceramic"
                  />
                  <FormControlLabel
                    value="option4"
                    control={<Radio />}
                    label="Bilayered Clinical Zirconia"
                  />
                  <FormControlLabel
                    value="option5"
                    control={<Radio />}
                    label="IPS e.max (anterior)"
                  />
                  <FormControlLabel
                    value="option6"
                    control={<Radio />}
                    label="IPS e.max (posterior)"
                  />
                  <FormControlLabel
                    value="option7"
                    control={<Radio />}
                    label="Lava Zirconia"
                  />
                </RadioGroup>
              </Paper>
            </Grid>
          </Grid>
        </Slide>
        {ceramicRestoration !== "" && renderShadeSection()}
      </React.Fragment>
    );
  }

  function renderShadeSection() {
    return (
      <React.Fragment>
        <Slide direction="right" in={restorationId} mountOnEnter unmountOnExit>
          <Grid container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid
              item
              xs={6}
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <Paper elevation={3} style={{ padding: "1rem", width: "100%" }}>
                <Typography
                  variant="h5"
                  component="h5"
                  paragraph={true}
                  gutterBottom={true}
                >
                  Shading and Occlusal Staining
                </Typography>
                <Grid
                  container
                  alignItems="center"
                  className={classes.shaderRoot}
                >
                  <TextField
                    className={classes.textField}
                    id="final-shade"
                    label="Final Shade"
                    variant="outlined"
                  />
                  <Divider orientation="vertical" flexItem />
                  <TextField
                    className={classes.textField}
                    id="stump-shade"
                    label="Stump Shade"
                    variant="outlined"
                  />
                  <Divider orientation="vertical" flexItem />
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="occlusal-staining">
                      Occlusal Staining
                    </InputLabel>
                    <Select
                      native
                      value={occlusalStaining}
                      onChange={handleocclusalStainingChange}
                      label="Occlusal Staining"
                      inputProps={{
                        name: "occlusalStaining",
                        id: "occlusal-staining",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>None</option>
                      <option value={2}>Light</option>
                      <option value={3}>Medium</option>
                      <option value={4}>Dark</option>
                    </Select>
                  </FormControl>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Slide>
      </React.Fragment>
    );
  }

  function renderId2() {
    return <div className={classes.paper}>Number 2</div>;
  }
  function renderId3() {
    return <div className={classes.paper}>Number 3</div>;
  }
  function renderId4() {
    return <div className={classes.paper}>Number 4</div>;
  }
  function renderId5() {
    return <div className={classes.paper}>Number 5</div>;
  }
  function renderId6() {
    return <div className={classes.paper}>Number 6</div>;
  }
  function renderId7() {
    return <div className={classes.paper}>Number 7</div>;
  }
  function renderId8() {
    return <div className={classes.paper}>Number 8</div>;
  }
  function renderId9() {
    return <div className={classes.paper}>Number 9</div>;
  }
  function renderId10() {
    return <div className={classes.paper}>Number 10</div>;
  }
  function renderId11() {
    return <div className={classes.paper}>Number 11</div>;
  }
  function renderId12() {
    return <div className={classes.paper}>Number 12</div>;
  }
  function renderId13() {
    return <div className={classes.paper}>Number 13</div>;
  }

  function renderRestorationSubsection() {
    if (restorationId === 1) return renderId1();
    else if (restorationId === 2) return renderId2();
    else if (restorationId === 3) return renderId3();
    else if (restorationId === 4) return renderId4();
    else if (restorationId === 5) return renderId5();
    else if (restorationId === 6) return renderId6();
    else if (restorationId === 7) return renderId7();
    else if (restorationId === 8) return renderId8();
    else if (restorationId === 9) return renderId9();
    else if (restorationId === 10) return renderId10();
    else if (restorationId === 11) return renderId11();
    else if (restorationId === 12) return renderId12();
    else if (restorationId === 13) return renderId13();
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
            <Paper elevation={3} style={{ padding: "1rem", width: "100%" }}>
              <Typography
                variant="h3"
                component="h3"
                paragraph={true}
                gutterBottom={true}
              >
                Order Form
              </Typography>
              <Autocomplete
                id="restoration-type"
                options={typesOfRestorations}
                getOptionLabel={(option) => option.type}
                fullWidth={true}
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
            </Paper>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>

        {restorationId !== 0 && renderRestorationSubsection()}
      </form>
    </div>
  );
}
