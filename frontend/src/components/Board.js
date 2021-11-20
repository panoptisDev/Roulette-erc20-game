import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Colors from "../colors/colors";
import Chip from "../images/Chip.png";
import Pointer from "../images/pointer.png";
import toast from "react-hot-toast";
import { ethers } from "ethers";
const Board = ({ winner, active, contract, betAmount, currentUser, setSelectedMain }) => {
  const classes = useStyles();

  const [number0, setNumber0] = useState(false);
  const [number1, setNumber1] = useState(false);
  const [number2, setNumber2] = useState(false);
  const [number3, setNumber3] = useState(false);
  const [number4, setNumber4] = useState(false);
  const [number5, setNumber5] = useState(false);
  const [number6, setNumber6] = useState(false);
  const [number7, setNumber7] = useState(false);
  const [number8, setNumber8] = useState(false);
  const [number9, setNumber9] = useState(false);
  const [number10, setNumber10] = useState(false);
  const [number11, setNumber11] = useState(false);
  const [number12, setNumber12] = useState(false);
  const [number13, setNumber13] = useState(false);
  const [number14, setNumber14] = useState(false);
  const [number15, setNumber15] = useState(false);
  const [number16, setNumber16] = useState(false);
  const [number17, setNumber17] = useState(false);
  const [number18, setNumber18] = useState(false);
  const [number19, setNumber19] = useState(false);
  const [number20, setNumber20] = useState(false);
  const [number21, setNumber21] = useState(false);
  const [number22, setNumber22] = useState(false);
  const [number23, setNumber23] = useState(false);
  const [number24, setNumber24] = useState(false);
  const [number25, setNumber25] = useState(false);
  const [number26, setNumber26] = useState(false);
  const [number27, setNumber27] = useState(false);
  const [number28, setNumber28] = useState(false);
  const [number29, setNumber29] = useState(false);
  const [number30, setNumber30] = useState(false);
  const [number31, setNumber31] = useState(false);
  const [number32, setNumber32] = useState(false);
  const [number33, setNumber33] = useState(false);
  const [number34, setNumber34] = useState(false);
  const [number35, setNumber35] = useState(false);
  const [number36, setNumber36] = useState(false);
  const [rowOne, setRowOne] = useState(false);
  const [rowTwo, setRowTwo] = useState(false);
  const [rowThree, setRowThree] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {

    if (active) {
      const init = async() => {
        let aux = selected;
        let setWinner = aux.filter((item) => item === winner);
        if (setWinner.length !== 0) {
          console.log("Amount win: ", betAmount)
          await contract.payWinner(ethers.utils.parseEther(betAmount))
          toast.success("YOU WIN")
          return;
        }
        toast.success("YOU LOSE")
      }
      init();
    }
  }, [active]);

  const handleRowOne = () => {
    if (rowOne) {
      setNumber3(true);
      setNumber6(true);
      setNumber9(true);
      setNumber12(true);
      setNumber15(true);
      setNumber18(true);
      setNumber21(true);
      setNumber24(true);
      setNumber27(true);
      setNumber30(true);
      setNumber33(true);
      setNumber36(true);
      setSelected((selected) => [
        ...selected,
        3,
        6,
        9,
        12,
        15,
        18,
        21,
        24,
        27,
        30,
        33,
        36,
      ]);
      setSelectedMain((selected) => [
        ...selected,
        3,
        6,
        9,
        12,
        15,
        18,
        21,
        24,
        27,
        30,
        33,
        36,
      ]);
    } else {
      setNumber3(false);
      setNumber6(false);
      setNumber9(false);
      setNumber12(false);
      setNumber15(false);
      setNumber18(false);
      setNumber21(false);
      setNumber24(false);
      setNumber27(false);
      setNumber30(false);
      setNumber33(false);
      setNumber36(false);
      let array = selected;
      const aux = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
      while (aux.length > 0) {
        array = array.filter((item) => item !== aux[0]);
        setSelected(array);
        aux.shift();
      }
    }
    setRowOne(!rowOne);
  };

  const handleRowTwo = () => {
    if (rowTwo) {
      setNumber2(true);
      setNumber5(true);
      setNumber8(true);
      setNumber11(true);
      setNumber14(true);
      setNumber17(true);
      setNumber20(true);
      setNumber23(true);
      setNumber26(true);
      setNumber29(true);
      setNumber32(true);
      setNumber35(true);
      setSelected((selected) => [
        ...selected,
        2,
        5,
        8,
        11,
        14,
        17,
        20,
        23,
        26,
        29,
        32,
        35,
      ]);
      setSelectedMain((selected) => [
        ...selected,
        2,
        5,
        8,
        11,
        14,
        17,
        20,
        23,
        26,
        29,
        32,
        35,
      ]);
    } else {
      setNumber2(false);
      setNumber5(false);
      setNumber8(false);
      setNumber11(false);
      setNumber14(false);
      setNumber17(false);
      setNumber20(false);
      setNumber23(false);
      setNumber26(false);
      setNumber29(false);
      setNumber32(false);
      setNumber35(false);
      let array = selected;
      const aux = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
      while (aux.length > 0) {
        array = array.filter((item) => item !== aux[0]);
        setSelected(array);
        aux.shift();
      }
    }
    setRowTwo(!rowTwo);
  };

  const handleRowThree = () => {
    if (rowThree) {
      setNumber1(true);
      setNumber4(true);
      setNumber7(true);
      setNumber10(true);
      setNumber13(true);
      setNumber16(true);
      setNumber19(true);
      setNumber22(true);
      setNumber25(true);
      setNumber28(true);
      setNumber31(true);
      setNumber34(true);
      setSelected((selected) => [
        ...selected,
        1,
        4,
        7,
        10,
        13,
        16,
        19,
        22,
        25,
        28,
        31,
        34,
      ]);
      setSelectedMain((selected) => [
        ...selected,
        1,
        4,
        7,
        10,
        13,
        16,
        19,
        22,
        25,
        28,
        31,
        34,
      ]);
    } else {
      setNumber1(false);
      setNumber4(false);
      setNumber7(false);
      setNumber10(false);
      setNumber13(false);
      setNumber16(false);
      setNumber19(false);
      setNumber22(false);
      setNumber25(false);
      setNumber28(false);
      setNumber31(false);
      setNumber34(false);
      let array = selected;
      const aux = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
      while (aux.length > 0) {
        array = array.filter((item) => item !== aux[0]);
        setSelected(array);
        aux.shift();
      }
    }
    setRowThree(!rowThree);
  };
  const handleNumbers = (id) => {
    let aux = selected;
    aux = aux.filter((item) => item !== id);
    switch (id) {
      case 0:
        number0 ? setNumber0(false) : setNumber0(true);
        number0
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 0]);
        break;
      case 1:
        number1 ? setNumber1(false) : setNumber1(true);
        number1
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 1]);
        break;
      case 2:
        number2 ? setNumber2(false) : setNumber2(true);
        number2
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 2]);
        break;
      case 3:
        number3 ? setNumber3(false) : setNumber3(true);
        number3
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 3]);
        break;
      case 4:
        number4 ? setNumber4(false) : setNumber4(true);
        number4
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 4]);
        break;
      case 5:
        number5 ? setNumber5(false) : setNumber5(true);
        number5
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 5]);
        break;
      case 6:
        number6 ? setNumber6(false) : setNumber6(true);
        number6
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 6]);
        break;
      case 7:
        number7 ? setNumber7(false) : setNumber7(true);
        number7
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 7]);
        break;
      case 8:
        number8 ? setNumber8(false) : setNumber8(true);
        number8
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 8]);
        break;
      case 9:
        number9 ? setNumber9(false) : setNumber9(true);
        number9
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 9]);
        break;
      case 10:
        number10 ? setNumber10(false) : setNumber10(true);
        number10
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 10]);
        break;
      case 11:
        number11 ? setNumber11(false) : setNumber11(true);
        number11
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 11]);
        break;
      case 12:
        number12 ? setNumber12(false) : setNumber12(true);
        number12
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 12]);
        break;
      case 13:
        number13 ? setNumber13(false) : setNumber13(true);
        number13
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 13]);
        break;
      case 14:
        number14 ? setNumber14(false) : setNumber14(true);
        number14
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 14]);
        break;
      case 15:
        number15 ? setNumber15(false) : setNumber15(true);
        number15
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 15]);
        break;
      case 16:
        number16 ? setNumber16(false) : setNumber16(true);
        number16
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 16]);
        break;
      case 17:
        number17 ? setNumber17(false) : setNumber17(true);
        number17
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 17]);
        break;
      case 18:
        number18 ? setNumber18(false) : setNumber18(true);
        number18
          ? setNumber0(aux)
          : setSelected((selected) => [...selected, 18]);
        break;
      case 19:
        number19 ? setNumber19(false) : setNumber19(true);
        number19
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 19]);
        break;
      case 20:
        number20 ? setNumber20(false) : setNumber20(true);
        number20
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 20]);
        break;
      case 21:
        number21 ? setNumber21(false) : setNumber21(true);
        number21
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 21]);
        break;
      case 22:
        number22 ? setNumber22(false) : setNumber22(true);
        number22
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 22]);
        break;
      case 23:
        number23 ? setNumber23(false) : setNumber23(true);
        number23
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 23]);
        break;
      case 24:
        number24 ? setNumber24(false) : setNumber24(true);
        number24
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 24]);
        break;
      case 25:
        number25 ? setNumber25(false) : setNumber25(true);
        number25
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 25]);
        break;
      case 26:
        number26 ? setNumber26(false) : setNumber26(true);
        number26
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 26]);
        break;
      case 27:
        number27 ? setNumber27(false) : setNumber27(true);
        number27
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 27]);
        break;
      case 28:
        number28 ? setNumber28(false) : setNumber28(true);
        number28
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 28]);
        break;
      case 29:
        number29 ? setNumber29(false) : setNumber29(true);
        number29
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 29]);
        break;
      case 30:
        number30 ? setNumber30(false) : setNumber30(true);
        number30
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 30]);
        break;
      case 31:
        number31 ? setNumber31(false) : setNumber31(true);
        number31
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 31]);
        break;
      case 32:
        number32 ? setNumber32(false) : setNumber32(true);
        number32
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 32]);
        break;
      case 33:
        number33 ? setNumber33(false) : setNumber33(true);
        number33
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 33]);
        break;
      case 34:
        number34 ? setNumber34(false) : setNumber34(true);
        number34
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 34]);
        break;
      case 35:
        number35 ? setNumber35(false) : setNumber35(true);
        number35
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 35]);
        break;
      case 36:
        number36 ? setNumber36(false) : setNumber36(true);
        number36
          ? setSelected(aux)
          : setSelected((selected) => [...selected, 36]);
        break;
      default:
        return;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.table}>
        <div onClick={() => handleNumbers(0)} className={classes.divZero}>
          <div className={classes.divSort}>
            {number0 ? (
              <img alt="chip" src={Chip} className={classes.chip} />
            ) : (
              <Typography className={classes.numberZero}>0</Typography>
            )}
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(3)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number3 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>3</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(2)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number2 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>2</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(1)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number1 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>1</Typography>
              )}
            </div>{" "}
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(6)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number6 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>6</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(5)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number5 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>5</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(4)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number4 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>4</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(9)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number9 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>9</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(8)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number8 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>8</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(7)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number7 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>7</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(12)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number12 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>12</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(11)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number11 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>11</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(10)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number10 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>10</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(15)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number15 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>15</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(14)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number14 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>14</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(13)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number13 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>13</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(18)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number18 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>18</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(17)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number17 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>17</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(16)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number16 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>16</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(21)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number21 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>21</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(20)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number20 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>20</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(19)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number19 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>19</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(24)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number24 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>24</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(23)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number23 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>23</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(22)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number22 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>22</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(27)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number27 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>27</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(26)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number26 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>26</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(25)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number25 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>25</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(30)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number30 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>30</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(29)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number29 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>29</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(28)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number28 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>28</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(33)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number33 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>33</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(32)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number32 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>32</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(31)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number31 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>31</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={() => handleNumbers(36)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number36 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>36</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(35)} className={classes.divRed}>
            <div className={classes.divSort}>
              {number35 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>35</Typography>
              )}
            </div>
          </div>
          <div onClick={() => handleNumbers(34)} className={classes.divBlack}>
            <div className={classes.divSort}>
              {number34 ? (
                <img alt="chip" src={Chip} className={classes.chip} />
              ) : (
                <Typography className={classes.numbers}>34</Typography>
              )}
            </div>
          </div>
        </div>
        <div className={classes.eachColumn}>
          <div onClick={handleRowOne} className={classes.sector}>
            <Typography className={classes.numbers}>Row</Typography>
          </div>
          <div onClick={handleRowTwo} className={classes.sector}>
            <Typography className={classes.numbers}>Row</Typography>
          </div>
          <div onClick={handleRowThree} className={classes.sector}>
            <Typography className={classes.numbers}>Row</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: "2%",
  },
  table: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    height: "30rem",
  },
  divZero: {
    display: "flex",
    border: `.2rem solid ${Colors.black}`,
    height: "98.5%",
    width: "10rem",
    backgroundColor: Colors.green,
    cursor: `url(${Pointer}), pointer`,
  },
  divZeroMarked: {
    display: "flex",
    border: `.2rem solid ${Colors.black}`,
    flexDirection: "column",
    height: "98.5%",
    width: "10rem",
    backgroundColor: Colors.green,
    cursor: `url(${Pointer}), pointer`,
  },
  divSort: {
    display: "flex",
    width: "100%",
    height: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  chip: {
    position: "fixed",
    width: "4.5rem",
    height: "4.5rem",
  },
  numberZero: {
    textAlign: "center",
    fontSize: "5vh",
    color: Colors.white,
    fontFamily: ["Open-Sans", "sans-serif"].join(","),
    fontWeight: "bold",
  },
  eachColumn: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  divRed: {
    backgroundColor: Colors.red,
    border: `.2rem solid ${Colors.black}`,
    display: "flex",
    alignItems: "center",
    cursor: `url(${Pointer}), pointer`,
    justifyContent: "center",
    width: "5rem",
    height: "33%",
  },
  divBlack: {
    backgroundColor: Colors.black,
    border: `.2rem solid ${Colors.black}`,
    display: "flex",
    alignItems: "center",
    cursor: `url(${Pointer}), pointer`,
    justifyContent: "center",
    width: "5rem",
    height: "33%",
  },
  numbers: {
    textAlign: "center",
    fontSize: "5vh",
    color: Colors.white,
    fontFamily: ["Open-Sans", "sans-serif"].join(","),
    fontWeight: "bold",
    margin: "5%",
  },
  sector: {
    border: `.2rem solid ${Colors.black}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "10rem",
    height: "33%",
    backgroundColor: Colors.green,
    cursor: `url(${Pointer}), pointer`,
  },
}));

export default Board;
