## To Claim Winner

1. Run `npm install` to install all the depedencies 
2. Run `npx hardhat test` to start the test which will try to deploy contract into local hardhat env
3. Create .env and define follwing properties:
    `TESTNET_PRIVATE_KEY=` 

    `ALCHEMY_TESTNET_RPC_URL=`
4. Deploy your contract to Goerli network:

    `npx hardhat run scripts/deploy.js --network goerli`
5. Call deployed contract's API:

    `npx hardhat run scripts/claimWinner.js --network goerli`
    
    The script initially also tries to call the original Contract API directly, but we expect it to fail with error: "execution reverted: msg.sender is equal to tx.origin"!
