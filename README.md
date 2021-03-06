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

#### How to add a file to IPFS

first install IPFS from here: https://ipfs.io/#install

then setup a IPFS node with the following commands (also can use instruction from https://ipfs.io/#install )


```
ipfs init

ipfs daemon
```

-   first upload a file (image, music etc.) to IPFS

```
ipfs add <file-name-and-direction>
```
you will get something like 

added QmdHtVAaQLscVSnjgyyxqvE8qMLnoThvKZEtTGH7qV6gmH "your-file-name"

concatenate the hash with http://ipfs.io/ipfs/ 
to get something like http://ipfs.io/ipfs/QmdHtVAaQLscVSnjgyyxqvE8qMLnoThvKZEtTGH7qV6gmH

then create a json file and add the above file link (your one) in the json with some other fields like 

```
{
    "name":"my awsome nft",
    "description":"it is only a nft nothing else",
    "image":"http://ipfs.io/ipfs/QmdHtVAaQLscVSnjgyyxqvE8qMLnoThvKZEtTGH7qV6gmH (you should use your link)",
    "external_url":"github.com/incentivus/nft"
}
```

and add this json file to IPFS like above and use its hash to create a link and use the finle link as URI at minting NFT process
