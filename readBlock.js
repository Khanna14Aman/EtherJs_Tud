const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${process.env.api_key}`
);

const queryBlockChain = async () => {
  //   const block = await provider.getBlockNumber();
  //   console.log("Block Number is : ", block);

  const balance = await provider.getBalance(
    "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326"
  );
  console.log("Balance in BigNumber wei : ", balance);

  const balanceEther = ethers.formatEther(balance);
  console.log("Balance in normal Ether: ", balanceEther);

  const balanceE = ethers.parseEther(balanceEther);
  console.log("Balance in BigNumber : ", balanceE);
};
queryBlockChain();
