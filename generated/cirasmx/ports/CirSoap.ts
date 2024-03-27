import { SearchByDate } from "../definitions/SearchByDate";
import { SearchByDateResponse } from "../definitions/SearchByDateResponse";
import { SearchInsolvencyId } from "../definitions/SearchInsolvencyId";
import { SearchInsolvencyIdResponse } from "../definitions/SearchInsolvencyIdResponse";
import { SearchNaturalPerson } from "../definitions/SearchNaturalPerson";
import { SearchNaturalPersonResponse } from "../definitions/SearchNaturalPersonResponse";
import { SearchUndertaking } from "../definitions/SearchUndertaking";
import { SearchUndertakingResponse } from "../definitions/SearchUndertakingResponse";
import { SearchModifiedSince } from "../definitions/SearchModifiedSince";
import { SearchModifiedSinceResponse } from "../definitions/SearchModifiedSinceResponse";
import { SearchRemovedSince } from "../definitions/SearchRemovedSince";
import { SearchRemovedSinceResponse } from "../definitions/SearchRemovedSinceResponse";
import { GetCase } from "../definitions/GetCase";
import { GetCaseResponse } from "../definitions/GetCaseResponse";
import { GetLastUpdate } from "../definitions/GetLastUpdate";
import { GetLastUpdateResponse } from "../definitions/GetLastUpdateResponse";
import { SearchReportsSince } from "../definitions/SearchReportsSince";
import { SearchReportsSinceResponse } from "../definitions/SearchReportsSinceResponse";
import { GetCaseWithReports } from "../definitions/GetCaseWithReports";
import { GetCaseWithReportsResponse } from "../definitions/GetCaseWithReportsResponse";

export interface CirSoap {
    searchByDate(searchByDate: SearchByDate, callback: (err: any, result: SearchByDateResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchInsolvencyID(searchInsolvencyId: SearchInsolvencyId, callback: (err: any, result: SearchInsolvencyIdResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchNaturalPerson(searchNaturalPerson: SearchNaturalPerson, callback: (err: any, result: SearchNaturalPersonResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchUndertaking(searchUndertaking: SearchUndertaking, callback: (err: any, result: SearchUndertakingResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchModifiedSince(searchModifiedSince: SearchModifiedSince, callback: (err: any, result: SearchModifiedSinceResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchRemovedSince(searchRemovedSince: SearchRemovedSince, callback: (err: any, result: SearchRemovedSinceResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCase(getCase: GetCase, callback: (err: any, result: GetCaseResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    GetLastUpdate(getLastUpdate: GetLastUpdate, callback: (err: any, result: GetLastUpdateResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    searchReportsSince(searchReportsSince: SearchReportsSince, callback: (err: any, result: SearchReportsSinceResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCaseWithReports(getCaseWithReports: GetCaseWithReports, callback: (err: any, result: GetCaseWithReportsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
