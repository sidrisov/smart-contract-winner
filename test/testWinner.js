const { ethers } = require("hardhat");

describe("Winner", function () {
    it("Winner contract should be deployed", async function () {
        const Winner = await ethers.getContractFactory("Winner");
        const contract = await Winner.deploy();
        await contract.deployed();

        console.log(`Winner contract deployed: ${contract.address}`);
    });
});
