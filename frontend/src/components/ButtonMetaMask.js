import React from "react";
import { useEthers } from "@usedapp/core";
import Metamask from "../images/metamask.svg";
import Colors from "../colors/colors";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pointer from "../images/pointer.png";
const ButtonMetamask = ({ connected }) => {
  const classes = useStyles();

  const {  activateBrowserWallet } = useEthers();


  const handleClick = async () => {
    await activateBrowserWallet();
  };

  return (
    <Button onClick={handleClick} className={classes.button}>
      <Typography className={classes.text}>Connect Metamask</Typography>
      <img className={classes.icon} src={Metamask} alt="Metamask" />
    </Button>
  );
};
const useStyles = makeStyles((theme) => ({
  text: {
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
    fontFamily: ["Poppins", "cursive"].join(","),
    fontSize: "3vh",
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
  icon: {
    marginLeft: "5%",
    width: "3rem",
    height: "3rem",
  },
}));

export default ButtonMetamask;
