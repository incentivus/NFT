import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EliteNFT } from "../EliteNFT";
export declare class EliteNFT__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_name: string, _symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<EliteNFT>;
    getDeployTransaction(_name: string, _symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): EliteNFT;
    connect(signer: Signer): EliteNFT__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): EliteNFT;
}
