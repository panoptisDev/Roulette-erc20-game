import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Colors from "../colors/colors";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const data = [
  { option: "32" },
  { option: "15" },
  { option: "19" },
  { option: "4" },
  { option: "21" },
  { option: "2" },
  { option: "25" },
  { option: "17" },
  { option: "34" },
  { option: "6" },
  { option: "27" },
  { option: "13" },
  { option: "36" },
  { option: "11" },
  { option: "30" },
  { option: "8" },
  { option: "23" },
  { option: "10" },
  { option: "5" },
  { option: "24" },
  { option: "16" },
  { option: "33" },
  { option: "1" },
  { option: "20" },
  { option: "14" },
  { option: "31" },
  { option: "9" },
  { option: "22" },
  { option: "18" },
  { option: "29" },
  { option: "7" },
  { option: "28" },
  { option: "12" },
  { option: "35" },
  { option: "3" },
  { option: "26" },
  {
    option: "0",
    style: { backgroundColor: Colors.green, textColor: Colors.white },
  },
];

const backgroundColors = [Colors.red, Colors.black];
const textColors = [Colors.white];
const outerBorderColor = Colors.black;
const outerBorderWidth = 10;
const innerBorderColor = Colors.black;
const innerBorderWidth = 20;
const innerRadius = 60;
const radiusLineColor = Colors.black;
const radiusLineWidth = 3;
const fontSize = 13;
const textDistance = 85;

const Roulette = ({ gameActive, winner }) => {
  const classes = useStyles();

  const [perpendicularText] = useState(true);
  const [winnerNum, setWinnerNum] = useState(0);
  

  return (
    <div className={classes.main}>
      <Wheel
        mustStartSpinning={gameActive}
        prizeNumber={winner}
        data={data}
        backgroundColors={backgroundColors}
        textColors={textColors}
        fontSize={fontSize}
        outerBorderColor={outerBorderColor}
        outerBorderWidth={outerBorderWidth}
        innerRadius={innerRadius}
        innerBorderColor={innerBorderColor}
        innerBorderWidth={innerBorderWidth}
        radiusLineColor={radiusLineColor}
        radiusLineWidth={radiusLineWidth}
        perpendicularText={perpendicularText}
        textDistance={textDistance}
        onStopSpinning={() => {
          setWinnerNum(winner);
        }}
      />
      <div className={classes.divWinner}>
        {!gameActive ? (
          <Typography className={classes.winner}>
            Winner Number: {winnerNum}
          </Typography>
        ) : (
          <Typography className={classes.winner}>Winner Number: ?</Typography>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  divWinner: {
    width: "12rem",
    height: "2rem",
    marginTop: "3%",
    marginLeft: "5%",
    backgroundColor: Colors.white,
    padding: "2%",
    borderRadius: "10px 10px 10px 10px",
    border: `.5rem solid ${Colors.red}`,
  },
  winner: {
    fontFamily: ["Open-Sans", "sans-serif"].join(","),
    fontSize: "2vh",
    color: Colors.black,
    fontWeight: "bold",
  },
}));

export default Roulette;
