import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const useAccount = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const balanceFormated = etherBalance && formatEther(etherBalance);

  return {
    account: account,
    balance: balanceFormated,
  };
};
export default useAccount;
