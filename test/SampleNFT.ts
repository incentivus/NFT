import { expect, use } from "chai"
import { ethers } from "hardhat"
import { Signer } from "ethers"
import { solidity, MockProvider } from "ethereum-waffle"

import { SampleNFT } from "../src/types/SampleNFT"
import { SampleNFT__factory } from "../src/types/factories/SampleNFT__factory"
import exception  from "console"

use(solidity)

describe("SampleNFT", async () => {
    let signer: Signer
    let signer2: Signer
    let signer3: Signer

    let sampleNFT: SampleNFT

    let name = "Another Sample NFT"
    let symbol = "TEnft"

    beforeEach(async () => {
        [signer, signer2, signer3] = await ethers.getSigners()
        sampleNFT = await deploySampleNFT()
    })

    const deploySampleNFT = async (_signer?: Signer): Promise<SampleNFT> => {
        const sampleNFTFactory = new SampleNFT__factory(_signer || signer)
        const sampleNFT = await sampleNFTFactory.deploy(name, symbol)
        return sampleNFT
    }

    it("initialize contract correctly", async () => {
        expect(await sampleNFT.name()).to.equal("Another Sample NFT")
        expect(await sampleNFT.symbol()).to.equal("TEnft")

        let signer1Address = await signer.getAddress()

        expect(await sampleNFT.owner()).to.equal(signer1Address)
    })

    it("adding an operator", async () => {
        let signer2Address = await signer2.getAddress()
        await sampleNFT.addOperator(signer2Address)

        expect(await sampleNFT.isOperator(signer2Address)).to.equal(true)
    })

    it("minting an NFT by operator", async () => {
        let signer2Address = await signer2.getAddress()
        let signer3Address = await signer3.getAddress()
        let uri = "https:this.is.a.sample.uri"

        await sampleNFT.addOperator(signer2Address)

        let sampleNFTAsSigner2 = sampleNFT.connect(signer2)

        await sampleNFTAsSigner2.mintToCaller(signer3Address, uri)

        expect(await sampleNFT.balanceOf(signer3Address)).to.equal(1)
    })
})

