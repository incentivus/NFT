import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SampleNFT } from "../SampleNFT";
export declare class SampleNFT__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_name: string, _symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SampleNFT>;
    getDeployTransaction(_name: string, _symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SampleNFT;
    connect(signer: Signer): SampleNFT__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SampleNFT;
}
