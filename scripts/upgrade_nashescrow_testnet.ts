import { ethers, upgrades } from "hardhat";

// TODO: pluck out some code from environment variables.

const PROXY = "0x1A25E43A909b27f635bd3dcCB5345DE2902B18ee";

async function main() {
  const NashEscrow = await ethers.getContractFactory("NashEscrow");
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
