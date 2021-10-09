import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTMarket } from "../NFTMarket";
export declare class NFTMarket__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NFTMarket>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NFTMarket;
    connect(signer: Signer): NFTMarket__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NFTMarket;
}
