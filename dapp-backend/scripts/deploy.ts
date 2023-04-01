import { ethers } from "hardhat";

async function main() {
  // get the deployer
  const [deployer] = await ethers.getSigners();

  // get the contract from hardhat ethers package
  const LionCash = await ethers.getContractFactory("LionCash");

  // ensure the imported deployer wallet from the hardhat ethers package is deploying the contract
  const lc = await LionCash.connect(deployer).deploy();

  // wait for the contract to be deployed
  await lc.deployed();

  // print the address of the deployed contract
  console.log(`LionCash deployed to ${lc.address}`);

  // print LionCash balance of the deployer
  // but format the 18 decimal number to a human readable number using ethers package
  console.log(
    "Deployer address",
    deployer.address,
    "has",
    ethers.utils.formatEther(await lc.balanceOf(deployer.address)),
    "LionCash"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
