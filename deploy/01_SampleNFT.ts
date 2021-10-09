import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    let uri = "https://this.is.the.base-uri"

    await deploy("SampleNFT", {
        from: deployer,
        log: true,
        skipIfAlreadyDeployed: true,
        args: [
            uri
        ],
    })
}

export default func
export const tags = ["SampleNFT"]
