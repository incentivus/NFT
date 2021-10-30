//import { format } from "path";
import { deployments, ethers } from "hardhat";

import { Signer, BigNumber, Wallet, BigNumberish } from "ethers";
import { Address } from "hardhat-deploy/dist/types"

import { NFT } from "../src/types/NFT";
import { NFT__factory } from "../src/types/factories/NFT__factory";

import { NFTMarket } from "../src/types/NFTMarket";
import { NFTMarket__factory } from "../src/types/factories/NFTMarket__factory";
import { expect } from "chai";

const {
  advanceBlockWithTime,
  takeSnapshot,
  revertProvider,
} = require("./utils");


describe("NFTMarket", function() {

  let snapshotId: any

  let signer1: Signer
  let signer2: Signer
  let signer3: Signer
  let signer4: Signer

  let signer1Address: Address
  let signer2Address: Address
  let signer3Address: Address
  let signer4Address: Address

  let nft: NFT
  let nftMarket: NFTMarket


  before("deploy contracts", async () => {
    [signer1, signer2,signer3, signer4] = await ethers.getSigners();
    
    signer1Address = await signer1.getAddress();
    signer2Address = await signer2.getAddress();
    signer3Address = await signer3.getAddress();
    signer4Address = await signer4.getAddress();

    nftMarket = await deployNFTMarket();
    nft = await deployNFT();

  })

  beforeEach(async () => {
    snapshotId = await takeSnapshot(signer1.provider) 
  })

  afterEach(async () => {
    await revertProvider(signer1.provider, snapshotId);
  })

  const deployNFT = async (
    _signer?: Signer
  ): Promise<NFT> => {
    const nftFactory = new NFT__factory(_signer || signer1);
    const nftInstance = await nftFactory.deploy(
      nftMarket.address
    );
    return nftInstance;
  };

  const deployNFTMarket = async (_signer?: Signer): Promise<NFTMarket> => {
    const marketFactory = new NFTMarket__factory(_signer || signer1);
    const marketInstance = await marketFactory.deploy();
    return marketInstance;
  };




  describe("NFT", async () => {

    it("NFT: createToken", async () => {

      let signer2NFT = await nft.connect(signer2)

      await signer2NFT.createToken("google.com");

      expect(
        await nft.ownerOf(1)
      ).to.equal(signer2Address)
    })

    it("NFT: createTokenAndApproveMarketPlace", async () => {
      let signer2NFT = await nft.connect(signer2)

      await signer2NFT.createTokenAndApproveMarketPlace("google.com");

      expect(
        await nft.ownerOf(1)
      ).to.equal(signer2Address)
    })

    it("", async () => {
      let signer2NFT = await nft.connect(signer2)

      await signer2NFT.createTokenAndApproveMarketPlace("google.com");
      await signer2NFT.createToken("yahoo.com")

      let myNFTs = await nft.fetchMyNFTs(signer2Address)

      expect(
        myNFTs[1][1]
      ).to.equal("yahoo.com")
    })
  })

  // describe("NFTMarket", async () => {

  //   it("", async () => {
      
  //   })
    
  //   it("", async () => {
      
  //   })

  //   it("", async () => {
      
  //   })
  // })
})
