import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    let greeting = `hello` 

    await deploy("Greeter", {
        from: deployer,
        args: [greeting],
        log: true,
        skipIfAlreadyDeployed: true,
    })
}

export default func
export const tags = ["Greeter"]