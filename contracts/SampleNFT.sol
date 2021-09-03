// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155MetadataURI.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "./Role/Operator.sol";

contract SampleNFT is Ownable, ERC1155, Operator {

    constructor(string memory _uri) 
        ERC1155(
            _uri
        ) 
    {}

    function addOperator(address account) public onlyOwner {
        _addOperator(account);
    }

    function removeOperator(address account) public onlyOwner {
        _removeOperator(account);
    }

    function mintToCaller(address caller, uint256 id, uint256 amount, bytes memory data) 
        public onlyOperator
    {
        _mint(caller, id, amount, data);
        //_setTokenURI(newItemId, tokenURI);

    }
    // tokenURI points to a JSON file that conforms to the "ERC721 Metadata JSON Schema".
}