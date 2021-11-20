const hre = require("hardhat");
const fs = require("fs");

async function main() {

  [owner, addr1, addr2, addr3] = await ethers.getSigners();
  const Ruleta = await hre.ethers.getContractFactory("Ruleta");
  const ruleta = await Ruleta.deploy();
  await ruleta.deployed();

  //Agregar fondos al contrato
  await hre.web3.eth.sendTransaction({from: addr1.address, to: ruleta.address, value: hre.ethers.utils.parseEther("1000")})
  //await ruleta.connect(addr1).placeBet(10000);

  const data = {
    address: ruleta.address,
    abi: JSON.parse(ruleta.interface.format("json"))
  };

  fs.writeFileSync("frontend/src/Ruleta.json", JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});