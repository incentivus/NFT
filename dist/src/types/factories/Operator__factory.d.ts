import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Operator } from "../Operator";
export declare class Operator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Operator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Operator;
    connect(signer: Signer): Operator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Operator;
}
