const { ethers } = require("hardhat");

const CONTRACT_ADD = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
const CONTRACT_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "Winner",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "attempt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const WINNER_ADD = "0x67e482815Ce117b38552D979204d89477283F9c0";

async function main() {
    const [owner,] = await hre.ethers.getSigners();

    console.log(`current wallet address: ${owner.address}`);

    const contract = await hre.ethers.getContractAt(CONTRACT_ABI, CONTRACT_ADD);
    const winnerContract = await hre.ethers.getContractAt("Winner", WINNER_ADD);


    // this should fail
    try {
        console.log(
            `Attempting to call Contract API - ${contract.address}`
        );
        await contract.attempt();
    } catch (err) {
        console.log("Failed as expected: ", err);
    }


    console.log(
        `Attempting to call Winner API - ${winnerContract.address}`
    );

    // this should pass
    const winnerAddress = await winnerContract.claimWinner(CONTRACT_ADD);
    console.log(`Claimed Winner: ${JSON.stringify(winnerAddress)} for contract: ${winnerContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
