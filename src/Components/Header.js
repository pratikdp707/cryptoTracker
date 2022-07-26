import {
  ThemeProvider,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  createTheme,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#f53c16",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#EEEEEE",
    },
    type: "dark",
  },
});

const Header = () => {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();


  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Crypto Tracker
              </Typography>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 130, height: 40, marginLeft: 15, paddingLeft: 10}}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
