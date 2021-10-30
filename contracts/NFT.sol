// contracts/NFT.sol
// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    struct NFTItem {
    uint256 tokenId;
    string tokenURI;
  }

    constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT") {
        contractAddress = marketplaceAddress;
    }

    // TODO: add fetch to this contract

    function createTokenAndApproveMarketPlace(string memory tokenURI) public returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }

    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function transfer(
        address to,
        uint256 tokenId
    ) public {
        safeTransferFrom(msg.sender, to, tokenId);
    }


      /* Returns only items that a user has purchased */
  function fetchMyNFTs(address myAddress) public view returns (NFTItem[] memory) {
    uint256 totalTokenCount = _tokenIds.current();
    uint256 tokenCount = 0;
    uint256 currentIndex = 0;

    for (uint256 i = 0; i < totalTokenCount; i++) {
      // address memory theAddress = ownerOf(i + 1);
      if (ownerOf(i + 1) == myAddress) {
        tokenCount += 1;
      }
    }

    NFTItem[] memory items = new NFTItem[](tokenCount);
    for (uint256 i = 0; i < totalTokenCount; i++) {
      // address memory theAddress = ownerOf(i + 1); 

      if (ownerOf(i + 1) == myAddress) {
        uint256 currentId = i + 1;
        string memory currentURI = tokenURI(currentId);

        // NFTItem memory currentItem = NFTItem(
        //     tokenId: currentId,
        //     tokenURI: currentURI
        // )

        items[currentIndex] = NFTItem(
            currentId,
            currentURI
        );

        currentIndex += 1;
      }
    }
    return items;
  }


}
