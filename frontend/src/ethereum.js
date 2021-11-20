import { ethers, Contract } from "ethers";
import Ruleta from "./Ruleta.json";

const getBlockchain = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();
      const roulette = new Contract(Ruleta.address, Ruleta.abi, signer);
      return { signer, signerAddress, roulette };
    }
  } catch (err) {
    return { signer: undefined,  signerAddress: undefined, roulette: undefined };
  }
};

export default getBlockchain;
