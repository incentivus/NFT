"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require("hardhat-typechain");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("@tenderly/hardhat-tenderly");
require("@nomiclabs/hardhat-etherscan");
// read MNEMONIC from env variable
var mnemonic = process.env.MNEMONIC;
var privateKey = process.env.PRIVATE_KEY;
var etherscanKey = process.env.ETHERSCAN_KEY;
var projectId = process.env.PROJECT_ID;
var accounts = mnemonic
    ? { mnemonic: mnemonic }
    : privateKey
        ? ["0x" + privateKey]
        : undefined;
var infuraNetwork = function (network, chainId, gas) {
    return {
        url: "https://" + network + ".infura.io/v3/" + projectId,
        chainId: chainId,
        gas: gas,
        accounts: accounts,
        gasPrice: "auto",
    };
};
var config = {
    networks: {
        hardhat: mnemonic ? { accounts: { mnemonic: mnemonic } } : {},
        localhost: {
            url: "http://localhost:8545",
            accounts: accounts,
        },
        mainnet: infuraNetwork("mainnet", 1, 6283185),
        ropsten: infuraNetwork("ropsten", 3, 6283185),
        rinkeby: infuraNetwork("rinkeby", 4, 6283185),
        kovan: infuraNetwork("kovan", 42, 6283185),
        goerli: infuraNetwork("goerli", 5, 6283185),
        matic: {
            url: "https://rpc-mainnet.maticvigil.com/",
            chainId: 137,
            accounts: accounts,
        },
        matic_testnet: {
            url: "https://rpc-mumbai.matic.today",
            chainId: 80001,
            accounts: accounts,
        },
        bsc: {
            url: "https://bsc-dataseed.binance.org/",
            chainId: 56,
            gasPrice: "auto",
            accounts: accounts,
        },
        bsc_testnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545",
            chainId: 97,
            accounts: accounts,
        },
    },
    etherscan: {
        apiKey: etherscanKey,
    },
    solidity: {
        compilers: [
            {
                version: "0.8.3",
                settings: {
                    optimizer: {
                        enabled: true,
                    },
                },
            },
        ],
    },
    paths: {
        artifacts: "artifacts",
        deploy: "deploy",
        deployments: "deployments",
    },
    typechain: {
        outDir: "src/types",
        target: "ethers-v5",
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
};
exports.default = config;
