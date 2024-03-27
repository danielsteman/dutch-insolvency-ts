import { SearchByDate1 } from "../definitions/SearchByDate1";
import { SearchByDateResponse1 } from "../definitions/SearchByDateResponse1";
import { SearchInsolvencyId1 } from "../definitions/SearchInsolvencyId1";
import { SearchInsolvencyIdResponse1 } from "../definitions/SearchInsolvencyIdResponse1";
import { SearchNaturalPerson1 } from "../definitions/SearchNaturalPerson1";
import { SearchNaturalPersonResponse1 } from "../definitions/SearchNaturalPersonResponse1";
import { SearchUndertaking1 } from "../definitions/SearchUndertaking1";
import { SearchUndertakingResponse1 } from "../definitions/SearchUndertakingResponse1";
import { SearchModifiedSince1 } from "../definitions/SearchModifiedSince1";
import { SearchModifiedSinceResponse1 } from "../definitions/SearchModifiedSinceResponse1";
import { SearchRemovedSince1 } from "../definitions/SearchRemovedSince1";
import { SearchRemovedSinceResponse1 } from "../definitions/SearchRemovedSinceResponse1";
import { GetCase1 } from "../definitions/GetCase1";
import { GetCaseResponse1 } from "../definitions/GetCaseResponse1";
import { GetLastUpdate } from "../definitions/GetLastUpdate";
import { GetLastUpdateResponse } from "../definitions/GetLastUpdateResponse";
import { SearchReportsSince1 } from "../definitions/SearchReportsSince1";
import { SearchReportsSinceResponse1 } from "../definitions/SearchReportsSinceResponse1";
import { GetCaseWithReports1 } from "../definitions/GetCaseWithReports1";
import { GetCaseWithReportsResponse1 } from "../definitions/GetCaseWithReportsResponse1";

export interface CirSoap12 {
    searchByDate(searchByDate: SearchByDate1, callback: (err: any, result: SearchByDateResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchInsolvencyID(searchInsolvencyId: SearchInsolvencyId1, callback: (err: any, result: SearchInsolvencyIdResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchNaturalPerson(searchNaturalPerson: SearchNaturalPerson1, callback: (err: any, result: SearchNaturalPersonResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchUndertaking(searchUndertaking: SearchUndertaking1, callback: (err: any, result: SearchUndertakingResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchModifiedSince(searchModifiedSince: SearchModifiedSince1, callback: (err: any, result: SearchModifiedSinceResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchRemovedSince(searchRemovedSince: SearchRemovedSince1, callback: (err: any, result: SearchRemovedSinceResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCase(getCase: GetCase1, callback: (err: any, result: GetCaseResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    GetLastUpdate(getLastUpdate: GetLastUpdate, callback: (err: any, result: GetLastUpdateResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchReportsSince(searchReportsSince: SearchReportsSince1, callback: (err: any, result: SearchReportsSinceResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCaseWithReports(getCaseWithReports: GetCaseWithReports1, callback: (err: any, result: GetCaseWithReportsResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
