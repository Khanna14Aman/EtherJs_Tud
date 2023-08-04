import { useEffect } from "react";
import { ethers } from "ethers";

function App() {
  const walletAddress = "0x9d5bd4e59003aa66faf4e5aa5d335c807786f77f";

  useEffect(() => {
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
    const writeContract = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contracts = new ethers.Contract(walletAddress, walletABI, signer);
        // await contracts.setValue(25);
        // await contracts.sendEthContract({ value: ethers.parseEther("0.1") });
        // await contracts.sendEthUser("account address of reciever", {
        //   value: ethers.parseEther("0.1"),
        // });
      } catch (error) {
        console.log(error);
      }
    };
    writeContract();
  }, []);
  return <div className="App">hello</div>;
}

export default App;
