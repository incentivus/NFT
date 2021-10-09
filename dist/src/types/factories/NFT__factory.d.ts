import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFT } from "../NFT";
export declare class NFT__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(marketplaceAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NFT>;
    getDeployTransaction(marketplaceAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NFT;
    connect(signer: Signer): NFT__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NFT;
}
