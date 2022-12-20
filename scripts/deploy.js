async function main() {
    const Winner = await hre.ethers.getContractFactory("Winner");
    const winner = await Winner.deploy();
  
    await winner.deployed();
  
    console.log(
      `Winner deployed to ${winner.address}`
    );
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  