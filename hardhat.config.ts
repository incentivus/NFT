import { HardhatUserConfig } from "hardhat/config"
import { HttpNetworkUserConfig } from "hardhat/types"

import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"
import "solidity-coverage"
import "hardhat-typechain"
import "hardhat-deploy"
import "hardhat-gas-reporter"
import "@tenderly/hardhat-tenderly"
import "@nomiclabs/hardhat-etherscan"

// read MNEMONIC from env variable
let mnemonic = process.env.MNEMONIC
let privateKey = process.env.PRIVATE_KEY
let etherscanKey = process.env.ETHERSCAN_KEY
let projectId = process.env.PROJECT_ID

const accounts = mnemonic
    ? { mnemonic }
    : privateKey
    ? [`0x${privateKey}`]
    : undefined

const infuraNetwork = (
    network: string,
    chainId?: number,
    gas?: number
): HttpNetworkUserConfig => {
    return {
        url: `https://${network}.infura.io/v3/${projectId}`,
        chainId,
        gas,
        accounts,
        gasPrice: "auto",
    }
}

const config: HardhatUserConfig = {
    networks: {
        hardhat: mnemonic ? { accounts: { mnemonic } } : {},
        localhost: {
            url: "http://localhost:8545",
            accounts,
        },
        mainnet: infuraNetwork("mainnet", 1, 6283185),
        ropsten: infuraNetwork("ropsten", 3, 6283185),
        rinkeby: infuraNetwork("rinkeby", 4, 6283185),
        kovan: infuraNetwork("kovan", 42, 6283185),
        goerli: infuraNetwork("goerli", 5, 6283185),
        matic: {
            url: "https://rpc-mainnet.maticvigil.com/",
            chainId: 137,
            accounts,
        },
        matic_testnet: {
            url: "https://rpc-mumbai.matic.today",
            chainId: 80001,
            accounts,
        },
        bsc: {
            url: "https://bsc-dataseed.binance.org/",
            chainId: 56,
            gasPrice: "auto",
            accounts,
        },
        bsc_testnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545",
            chainId: 97,
            accounts,
        },
    },
    etherscan: {
        apiKey: etherscanKey,
    },
    solidity: {
        compilers: [
            {
                version: "0.7.6",
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
}

export default config
