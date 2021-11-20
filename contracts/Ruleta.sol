//SPDX-License-Identifier: MatiAlvarez21
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Ruleta {
    uint public funds;

    function payWinner(uint amount) external {
        uint contractBalance = address(this).balance;
        require(contractBalance >= amount, "Contract balance too low");
        payable(msg.sender).transfer(amount);
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }

    receive() external payable {}

}