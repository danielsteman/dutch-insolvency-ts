import { PubType } from "./PubType";

/** searchByDate */
export interface SearchByDate {
    /** s:dateTime */
    date?: string;
    /** s:string */
    court?: string;
    /** pubType */
    pubType?: PubType;
}
