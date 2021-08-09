import { expect, use } from "chai"
import { deployments, ethers } from "hardhat"
import { Signer, BigNumber } from "ethers"
import {
    deployMockContract,
    MockContract,
} from "@ethereum-waffle/mock-contract"
import { solidity } from "ethereum-waffle"

import { Greeter } from "../src/types/Greeter"
import { Greeter__factory } from "../src/types/factories/Greeter__factory"

const {
    advanceBlockWithTime,
    takeSnapshot,
    revertProvider,
} = require("./utils")

use(solidity)

describe("Greeting", async () => {
    let signer: Signer

    let greeter: Greeter
    let mockGreeter: MockContract // Mock Greeter

    beforeEach(async () => {
        ;[signer] = await ethers.getSigners()

        const Greeter = await deployments.getArtifact("Greeter")
        mockGreeter = await deployMockContract(signer, Greeter.abi)

        greeter = await deployGreeter()
    })

    const deployGreeter = async (
        _signer?: Signer
    ): Promise<Greeter> => {
        const GreeterFactory = new Greeter__factory(
            _signer || signer
        )
        const Greeter = await GreeterFactory.deploy(
            mockGreeter.address
        )

        return Greeter
    }

    it("do/the/greeting/correct", async () => {
        const signerAddress = await signer.getAddress()
        const snapshotId = await takeSnapshot(signer.provider)

        let _greeting = "changed"

        await greeter.setGreeting(_greeting)
        const get_greeting = await greeter.greet()
        expect(get_greeting).to.equal(_greeting)
        
        await revertProvider(signer.provider, snapshotId)
    })
})
