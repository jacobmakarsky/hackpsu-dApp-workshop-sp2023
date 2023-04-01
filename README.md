## Prerequisites

- Ensure [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) is installed
  `node -v`
  `npm -v`
- Ensure [Metamask](https://metamask.io/download/) is installed

Step 1:

## Make sure your terminal is in the project directory

- `cd desktop/hackpsu-dapp-workshop-sp2023`, changes the terminal directory to the project folder if it's in your desktop folder
- `cd dapp-backend`, changes the directory to the dapp-backend folder inside the main project folder

## Install the required packages

- `npm install`

## Deploy the LionCash contract to a live locally-hosted node

- Run `npx hardhat node`
- Run `npx hardhat run scripts/deploy.ts --network localhost` to deploy the contract on the locally hosted node

## Run tests against the LionCash contract

- Run `npx hardhat test`, which automatically runs any test files inside the `test` folder

Step 2:

## Make sure your terminal is in the project directory

If you are still in the `dapp-backend`

- `cd ..`
- `cd dapp-frontend`

If you just opened a fresh terminal

- `cd desktop/hackpsu-dapp-workshop-sp2023`, changes the terminal directory to the project folder if it's in your desktop folder
- `cd dapp-frontend`, changes the directory to the dapp-backend folder inside the main project folder

## Install the required packages

- `npm install`

## Start locally hosting the site

- `npm run dev`

Step 3:

- Connect wallet on front end
- press lioncash mint button
- enjoy free lioncash stimulus 💸
