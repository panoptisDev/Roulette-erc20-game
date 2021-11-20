import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Roulette from "../images/roulette.svg";
import Colors from "../colors/colors";
import ButtonMetamask from "./ButtonMetaMask";
import { Zoom } from "react-awesome-reveal";
import Pointer from "../images/pointer.png";
import { useEthers } from "@usedapp/core";
import backImage from "../images/ImageLand.png";

const Landing = () => {
  const classes = useStyles();
  const [connected, setConnected] = useState(false);

  const { account } = useEthers();

  useEffect(() => {
    typeof account === "string" ? setConnected(true) : setConnected(false);
  }, account);
  return (
    <div className={classes.container}>
      <img className={classes.backImage} src={backImage} alt="Roulette" />
      <Zoom className={classes.zoom}>
        <div className={classes.divTitle}>
          <Typography className={classes.title}>
            Hi, we are ethereum roulette
          </Typography>
          <img className={classes.imageTitle} src={Roulette} alt="Roulette" />
        </div>
      </Zoom>
      <Zoom className={classes.zoom}>
        {!connected ? (
          <div className={classes.divTitle}>
            <Typography className={classes.subTitle}>
              Please before connect your wallet
            </Typography>
          </div>
        ) : (
          <div className={classes.divTitle}>
            <Typography className={classes.subTitle}>
              Now you can play!
            </Typography>
          </div>
        )}
      </Zoom>
      <Zoom className={classes.zoom}>
        <div className={classes.divButtons}>
          {!connected ? (
            <div>
              <ButtonMetamask />
            </div>
          ) : (
            <div>
              <Link to="/roulette" className={classes.link}>
                <Button className={classes.button}>
                  <Typography className={classes.link}>
                    Go to the Roulette
                  </Typography>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Zoom>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  backImage: {
    position: "absolute",
    width: "50%",
    bottom: "0%",
    right: "0%",
  },
  zoom: {
    width: "100%",
  },
  container: {
    width: "100%",
    height: "fit-content",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.grey,
    flexDirection: "column",
  },
  divTitle: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontFamily: ["Oswald", "cursive"].join(","),
    fontSize: "8vh",
    color: Colors.black,
    fontWeight: "bold",
    marginTop: "2%",
    marginBottom: "0%",
    textShadow: `2px 2px 0 ${Colors.red}, 2px -2px 0  ${Colors.red}, -2px 2px 0  ${Colors.red}, -2px -2px 0  ${Colors.red}, 2px 0px 0  ${Colors.red}, 0px 2px 0  ${Colors.red}, -2px 0px 0  ${Colors.red}, 0px -2px 0  ${Colors.red}`,
  },
  subTitle: {
    fontFamily: ["Poppins", "cursive"].join(","),
    fontSize: "3vh",
    color: Colors.black,
    marginTop: "2%",
    fontWeight: "bold",
    marginBottom: "0%",
  },
  imageTitle: {
    marginTop: "2%",
    width: "10rem",
    height: "10rem",
  },
  divButtons: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
  },
  link: {
    textDecoration: "none",
    fontFamily: ["Poppins", "cursive"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
  },
  button: {
    width: "20rem",
    height: "5rem",
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    justifyContent: "center",
    flexDirection: "row",
    color: Colors.black,
    borderRadius: "10px 10px 10px 10px",
    background: Colors.white,
    border: `0.2rem solid ${Colors.black}`,
    boxShadow: `5px 5px 0 ${Colors.black}, -5px -5px 0 ${Colors.black}, -5px 5px 0 ${Colors.black}, 5px -5px 0 ${Colors.black}`,
    transition: "500ms ease-in-out",
    "&:hover": {
      boxShadow: `20px 5px 0 ${Colors.red}, -20px -5px 0 ${Colors.red}`,
      cursor: `url(${Pointer}), pointer`,
      background: Colors.white,
      border: "transparent",
      transitionDuration: "1s",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));
export default Landing;
