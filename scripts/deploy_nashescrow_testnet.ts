import { ethers, upgrades } from "hardhat";

// TODO: pluck out some code from environment variables.
async function main() {
  const NashEscrow = await ethers.getContractFactory("NashEscrow");
  const nashEscrow = await upgrades.deployProxy(
    NashEscrow,
    [
      "0xF1a91486c8174168f03b88F7F36c425d53da3688",
      1000000000000,
      1000000000000,
    ],
    {
      initializer: "initialize",
    }
  );

  await nashEscrow.deployed();
  console.log("NashEscrow deployed to: { ", nashEscrow.address, " } ");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
