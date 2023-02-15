import { ethers, upgrades } from "hardhat";

// TODO: pluck out some code from environment variables.
async function main() {
  const NashEscrow = await ethers.getContractFactory('NashEscrow');
  const nashEscrow = await upgrades.deployProxy(NashEscrow, [], {
    initializer: "initialize",
  });

  await nashEscrow.deployed();
  console.log("NashEscrow deployed to: { ", nashEscrow.address, " } ");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
