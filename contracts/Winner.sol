// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

contract Winner {
    function claimWinner(address contractAddress) external returns (address) {
        IContract(contractAddress).attempt();
        return address(msg.sender);
    }
}

interface IContract {
    function attempt() external;
}
