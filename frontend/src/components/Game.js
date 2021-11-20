import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Zoom } from "react-awesome-reveal";
import Pointer from "../images/pointer.png";
import useAccount from "../hooks/accounts";
import Colors from "../colors/colors";
import Board from "./Board";
import BackImage from "../images/back4.jpg";
import { Toaster } from "react-hot-toast";
import getBlockchain from "../ethereum";
import NewRoulette from "./Roulette/Roulette2.0";
const Game = () => {
  const classes = useStyles();

  const [betAmount2, setBetAmount2] = useState()

  const [selected, setSelected] = useState([])

  const [betAmount, setBetAmount] = useState()

  const [signer, setSigner] = useState(undefined)

  const [contract, setContract] = useState(undefined);

  const { account, balance } = useAccount();

  const [currentUser, setCurrentUser] = useState("");

  const [currentBalance, setCurrentBalance] = useState(0);

  const [winner, setWinner] = useState(0);

  const [active, setActive] = useState(false);

  useEffect(() => {
    setCurrentUser(account);
    setCurrentBalance(balance?.slice(0, 8));
    const init = async () => {
      const { signer } = await getBlockchain();
      const { roulette } = await getBlockchain();
      await setContract(roulette);
      await setSigner(signer);
    };
    init();
  }, [account, balance]);

  function handleInputChange(e) {
    setBetAmount(`${e.target.value}`)
  }

  return (
    <div className={classes.container}>
      <Toaster />
      <Zoom className={classes.zoom}>
        <div className={classes.divTitle}>
          <Typography className={classes.title}>Give us your money</Typography>
        </div>
      </Zoom>
      <Zoom className={classes.zoom}>
        <div className={classes.divRoulette}>
          <div className={classes.divUp}>
            <div className={classes.divWheel}>
              <NewRoulette setWinnerGame={setWinner} active={setActive} betAmount={betAmount} selected={selected} setBetAmount2={setBetAmount2}/>
            </div>
            <div className={classes.divInfo}>
              <div className={classes.eachInfo}> 
                <Typography className={classes.info}>
                  User: {currentUser}
                </Typography>
              </div>
              <div className={classes.eachInfo}>
                <Typography className={classes.info}>
                  Balance: {currentBalance} ethers
                </Typography>
              </div>
              <div className={classes.eachInfo}>
                <Typography className={classes.info}>
                  Bet Amount:
                </Typography>
              <input 
                onChange={handleInputChange}
              />
              <Typography className={classes.info}>
                  Eth
              </Typography>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom className={classes.zoom}>
        <div className={classes.divBoard}>
          <Board winner={winner} active={active} contract={contract} betAmount={`${betAmount2 * 2}`} currentUser={currentUser} setSelectedMain={setSelected}/>
        </div>
      </Zoom>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  zoom: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundImage: `url(${BackImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
    color: Colors.white,
    fontWeight: "bold",
    marginTop: "2%",
    marginBottom: "0%",
    textShadow: `2px 2px 0 ${Colors.black}, 2px -2px 0  ${Colors.black}, -2px 2px 0  ${Colors.black}, -2px -2px 0  ${Colors.black}, 2px 0px 0  ${Colors.black}, 0px 2px 0  ${Colors.black}, -2px 0px 0  ${Colors.black}, 0px -2px 0  ${Colors.black}`,
  },
  divRoulette: {
    display: "flex",
    width: "90%",
    marginTop: "2%",
    flexDirection: "column",
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  divUp: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  divWheel: {
    width: "45%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  divInfo: {
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  eachInfo: {
    width: "80%",
    display: "flex",
    justifySelf: "flex-start",
    backgroundColor: Colors.white,
    borderRadius: "10px 10px 10px 10px",
    border: `.5rem solid ${Colors.red}`,
    marginBottom: "2%",
    marginTop: "2%",
    padding: "2%",
  },
  info: {
    fontFamily: ["Open-Sans", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    color: Colors.black,
  },
  button: {
    width: "20rem",
    height: "5rem",
    marginTop: "2%",
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    justifyContent: "center",
    flexDirection: "row",
    color: Colors.white,
    borderRadius: "10px 10px 10px 10px",
    background: Colors.red,
    border: `0.2rem solid ${Colors.black}`,
    boxShadow: `5px 5px 0 ${Colors.black}, -5px -5px 0 ${Colors.black}, -5px 5px 0 ${Colors.black}, 5px -5px 0 ${Colors.black}`,
    transition: "500ms ease-in-out",
    "&:hover": {
      boxShadow: `20px 5px 0 ${Colors.red}, -20px -5px 0 ${Colors.red}`,
      cursor: `url(${Pointer}), pointer`,
      background: Colors.white,
      border: "transparent",
      transitionDuration: "1s",
      color: Colors.black,
    },
    "&:focus": {
      outline: "none",
    },
  },
  textButton: {
    fontFamily: ["Poppins", "cursive"].join(","),
    fontSize: "3vh",
    fontWeight: "bold",
  },
  divBoard: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
}));
export default Game;
