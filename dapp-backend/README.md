# LionCash Smart Contract

The dapp-backend folder is a hardhat project that hosts the `LionCash.sol` contract,
which is a simple ERC20 contract with infinite public-minting capability.

Before running any commands, make sure you are in the project directory in the terminal.
For ex:

- `cd desktop/hackpsu-dapp-workshop-sp2023`, changes the terminal directory to the project folder if it's in your desktop folder
- `cd dapp-backend`, changes the directory to the dapp-backend folder inside the main project folder

## Deploy the LionCash contract to a live locally-hosted node

- Run `npx hardhat node`
- Run `npx hardhat run scripts/deploy.ts --network localhost` to deploy the contract on the locally hosted node

## Run tests against the LionCash contract

- Run `npx hardhat test`, which automatically runs any test files inside the `test` folder
