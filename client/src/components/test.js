const Web3 = require("web3");
// const myContract = require('../contracts/MyToken.json');

async function main() {
  const web3 = new Web3("http://127.0.0.1:8545/");
  const artifact = require('../contracts/MyToken.json');
  const contract = new web3.eth.Contract( artifact.abi, '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b');
  console.log(contract);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});