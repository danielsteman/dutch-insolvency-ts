import { CirSoap } from "../ports/CirSoap";
import { CirSoap12 } from "../ports/CirSoap12";

export interface Cir {
    readonly CirSoap: CirSoap;
    readonly CirSoap12: CirSoap12;
}
