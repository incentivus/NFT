import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC721URIStorage } from "../ERC721URIStorage";
export declare class ERC721URIStorage__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721URIStorage;
}
