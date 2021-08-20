# Incentivus Sample NFT Smart contracts

This repository consist of smart contracts required for Incentivus NFT project

#### How to run

-   Deploy to testnet (rinkeby in the below example)

```
yarn 
yarn clean
yarn build
yarn prepare
PROJECT_ID=<infura-id> PRIVATE_KEY=<private-key-form-meta-mask> yarn deploy:rinkeby
```

-   Deploy to local (requires ganache to run on local)


You can find more information in the `scripts-info` section in the `package.json` file.


#### How to deploy

-   Deploy to bsc_testnet

```
yarn clean

yarn prepare

PRIVATE_KEY=<your-private-key> yarn deploy:bsc_testnet
```

-   Deploy to bsc mainnet


```
PRIVATE_KEY=<your-private-key> yarn deploy:bsc
```

-   Deploy to Polygon (Matic) mainnet


```
PRIVATE_KEY=<your-private-key> yarn deploy:matic
```


#### How to verify a contract

- Verify on bsc_testnet

first you need an API key from your account on https://bscscan.com/login

then run 

```
ETHERSCAN_KEY=<your-api-key> npx hardhat verify --network bsc_testnet <contract-address> "constructor's-first-arg" "constructor's-second-arg" "0constructor's-third-arg" "constructor's-forth-arg"
```
