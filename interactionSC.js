const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/${process.env.api_key}`
);

const walletAddress = "0x9d5bd4e59003aa66faf4e5aa5d335c807786f77f";
const walletABI = [
  {
    inputs: [],
    name: "sendEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractInteraction = async () => {
  const walletContract = new ethers.Contract(
    walletAddress,
    walletABI,
    provider
  );

  const contractName = await walletContract.name();
  console.log("our contract name is : ", contractName);

  const numValue = await walletContract.getValue();
  console.log("Num value is : ", numValue);

  const contractBalance = await walletContract.contractBalance();
  console.log("contract balance is : ", ethers.formatEther(contractBalance));

  const userBalance = await walletContract.accountBalance(
    "give account number to know balance"
  );
  console.log("Account balance is : ", ethers.formatEther(userBalance));
};

contractInteraction();
