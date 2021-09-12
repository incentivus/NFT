import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WrappedERC20Token } from "../WrappedERC20Token";
export declare class WrappedERC20Token__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(NAME: string, SYMBOL: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<WrappedERC20Token>;
    getDeployTransaction(NAME: string, SYMBOL: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): WrappedERC20Token;
    connect(signer: Signer): WrappedERC20Token__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WrappedERC20Token;
}
