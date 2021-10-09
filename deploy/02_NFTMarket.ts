import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    await deploy("NFTMarket", {
        from: deployer,
        log: true,
        skipIfAlreadyDeployed: true,
        args: [],
    })
}

export default func
export const tags = ["NFTMarket"]
