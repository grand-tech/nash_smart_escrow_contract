import { ethers, upgrades } from "hardhat";

// TODO: pluck out some code from environment variables.

const PROXY = "0xC455151f706965AffA9D48F42b04Aa2e59d67CB5";

async function main() {
  const NashEscrow = await ethers.getContractFactory(nashEscrow,);
  const nashEscrow = await upgrades.upgradeProxy(PROXY, NashEscrow);

  await nashEscrow.deployed();
  console.log("NashEscrow upgrade to: { ", nashEscrow.address, " } ");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
