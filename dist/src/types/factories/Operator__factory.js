"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operator__factory = void 0;
var ethers_1 = require("ethers");
var Operator__factory = /** @class */ (function (_super) {
    __extends(Operator__factory, _super);
    function Operator__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Operator__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Operator__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Operator__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Operator__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Operator__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return Operator__factory;
}(ethers_1.ContractFactory));
exports.Operator__factory = Operator__factory;
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "OperatorAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "OperatorRemoved",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isOperator",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOperator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061002161001c61003a565b61003e565b6100355761003561003061003a565b61005e565b610195565b3390565b60006100588260006100ad60201b6100a31790919060201c565b92915050565b61007681600061011460201b61010a1790919060201c565b6040516001600160a01b038216907fac6fa858e9350a46cec16539926e0fde25b7629f84b5a72bffaae4df888ae86d90600090a250565b60006001600160a01b0382166100f45760405162461bcd60e51b81526004018080602001828103825260228152602001806104556022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61011e82826100ad565b15610170576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6102b1806101a46000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632ab6f8db1461003b5780636d70f7ae14610045575b600080fd5b61004361007f565b005b61006b6004803603602081101561005b57600080fd5b50356001600160a01b0316610091565b604080519115158252519081900360200190f35b61008f61008a61018b565b61018f565b565b600061009d81836100a3565b92915050565b60006001600160a01b0382166100ea5760405162461bcd60e51b815260040180806020018281038252602281526020018061025a6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61011482826100a3565b15610166576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3390565b61019a6000826101d1565b6040516001600160a01b038216907f80c0b871b97b595b16a7741c1b06fed0c6f6f558639f18ccbce50724325dc40d90600090a250565b6101db82826100a3565b6102165760405162461bcd60e51b81526004018080602001828103825260218152602001806102396021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff1916905556fe526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a2646970667358221220fc04fee90cffa1b41f97747b0bf79ab4052afceea5217a6b0b026ce6c1ba58a364736f6c63430007060033526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
