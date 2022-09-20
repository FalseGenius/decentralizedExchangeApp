const {ethers} = require('hardhat');
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");

const main = async () => {
  const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  const exchangeContract = await ethers.getContractFactory('Exchange');
  const deployedExchangeContract = await exchangeContract.deploy(
    cryptoDevTokenAddress
  );

  await deployedExchangeContract.deployed();
  console.log("Exchange contract address", deployedExchangeContract.address);
}

main().then(() => process.exit(0)).catch((err) => {
  console.log(err);
  process.exit(1);
})

// Exchange contract address 0x97d90053a54526c4cE4274346bDf99d5Ed6CbAfE
// abi: [
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_CryptoDevtoken",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Approval",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Transfer",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "addLiquidity",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       }
//     ],
//     "name": "allowance",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "approve",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "balanceOf",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "cryptoDevTokenAddress",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_tokenSold",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_minEth",
//         "type": "uint256"
//       }
//     ],
//     "name": "cryptoDevTokenToEth",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "decimals",
//     "outputs": [
//       {
//         "internalType": "uint8",
//         "name": "",
//         "type": "uint8"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "subtractedValue",
//         "type": "uint256"
//       }
//     ],
//     "name": "decreaseAllowance",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_minTokens",
//         "type": "uint256"
//       }
//     ],
//     "name": "ethToCryptoDevToken",
//     "outputs": [],
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "inputAmount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "inputReserve",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "outputReserve",
//         "type": "uint256"
//       }
//     ],
//     "name": "getAmountOfTokens",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "pure",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getReserve",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "addedValue",
//         "type": "uint256"
//       }
//     ],
//     "name": "increaseAllowance",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "name",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "removeLiquidity",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "symbol",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalSupply",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "transfer",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "transferFrom",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ]