import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import React from "react";
import Corousel from "./Corousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    paddingTop: 10,
    justifyContent: "space-around",
  },
  tag: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.banner}>
        <Container className={classes.bannerContent}>
        <div className={classes.tag}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#f53c16",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontWeight:"bold"
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Corousel/>
        </Container>
      </div>
    </>
  );
};

export default Banner;
