import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50vw",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3cbbd6",
      },
      "&:hover fieldset": {
        borderColor: "#3cbbd6",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3cbbd6",
      },
    },
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
  input: {
    color: "white",
  },
}));

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#3cbbd6",
    },
  },
});

const SearchBar = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleChange = (e) => {
    setTextFieldValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/Search/" + textFieldValue);
    setTextFieldValue("");
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <MuiThemeProvider theme={theme}>
        <TextField
          className={classes.textField}
          id="outlined-secondary"
          label="Search"
          variant="outlined"
          color="secondary"
          value={textFieldValue}
          onChange={handleChange}
          InputProps={{
            style: {
              color: "white",
            },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
      </MuiThemeProvider>
    </form>
  );
};

export default SearchBar;
