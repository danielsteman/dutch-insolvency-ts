import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { SearchByDate } from "./definitions/SearchByDate";
import { SearchByDateResponse } from "./definitions/SearchByDateResponse";
import { SearchInsolvencyId } from "./definitions/SearchInsolvencyId";
import { SearchInsolvencyIdResponse } from "./definitions/SearchInsolvencyIdResponse";
import { SearchNaturalPerson } from "./definitions/SearchNaturalPerson";
import { SearchNaturalPersonResponse } from "./definitions/SearchNaturalPersonResponse";
import { SearchUndertaking } from "./definitions/SearchUndertaking";
import { SearchUndertakingResponse } from "./definitions/SearchUndertakingResponse";
import { SearchModifiedSince } from "./definitions/SearchModifiedSince";
import { SearchModifiedSinceResponse } from "./definitions/SearchModifiedSinceResponse";
import { SearchRemovedSince } from "./definitions/SearchRemovedSince";
import { SearchRemovedSinceResponse } from "./definitions/SearchRemovedSinceResponse";
import { GetCase } from "./definitions/GetCase";
import { GetCaseResponse } from "./definitions/GetCaseResponse";
import { GetLastUpdate } from "./definitions/GetLastUpdate";
import { GetLastUpdateResponse } from "./definitions/GetLastUpdateResponse";
import { SearchReportsSince } from "./definitions/SearchReportsSince";
import { SearchReportsSinceResponse } from "./definitions/SearchReportsSinceResponse";
import { GetCaseWithReports } from "./definitions/GetCaseWithReports";
import { GetCaseWithReportsResponse } from "./definitions/GetCaseWithReportsResponse";
import { SearchByDate1 } from "./definitions/SearchByDate1";
import { SearchByDateResponse1 } from "./definitions/SearchByDateResponse1";
import { SearchInsolvencyId1 } from "./definitions/SearchInsolvencyId1";
import { SearchInsolvencyIdResponse1 } from "./definitions/SearchInsolvencyIdResponse1";
import { SearchNaturalPerson1 } from "./definitions/SearchNaturalPerson1";
import { SearchNaturalPersonResponse1 } from "./definitions/SearchNaturalPersonResponse1";
import { SearchUndertaking1 } from "./definitions/SearchUndertaking1";
import { SearchUndertakingResponse1 } from "./definitions/SearchUndertakingResponse1";
import { SearchModifiedSince1 } from "./definitions/SearchModifiedSince1";
import { SearchModifiedSinceResponse1 } from "./definitions/SearchModifiedSinceResponse1";
import { SearchRemovedSince1 } from "./definitions/SearchRemovedSince1";
import { SearchRemovedSinceResponse1 } from "./definitions/SearchRemovedSinceResponse1";
import { GetCase1 } from "./definitions/GetCase1";
import { GetCaseResponse1 } from "./definitions/GetCaseResponse1";
import { SearchReportsSince1 } from "./definitions/SearchReportsSince1";
import { SearchReportsSinceResponse1 } from "./definitions/SearchReportsSinceResponse1";
import { GetCaseWithReports1 } from "./definitions/GetCaseWithReports1";
import { GetCaseWithReportsResponse1 } from "./definitions/GetCaseWithReportsResponse1";
import { Cir } from "./services/Cir";

export interface CirAsmxClient extends SoapClient {
    Cir: Cir;
    searchByDateAsync(searchByDate: SearchByDate): Promise<[result: SearchByDateResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchInsolvencyIDAsync(searchInsolvencyId: SearchInsolvencyId): Promise<[result: SearchInsolvencyIdResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchNaturalPersonAsync(searchNaturalPerson: SearchNaturalPerson): Promise<[result: SearchNaturalPersonResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchUndertakingAsync(searchUndertaking: SearchUndertaking): Promise<[result: SearchUndertakingResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchModifiedSinceAsync(searchModifiedSince: SearchModifiedSince): Promise<[result: SearchModifiedSinceResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchRemovedSinceAsync(searchRemovedSince: SearchRemovedSince): Promise<[result: SearchRemovedSinceResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCaseAsync(getCase: GetCase): Promise<[result: GetCaseResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetLastUpdateAsync(getLastUpdate: GetLastUpdate): Promise<[result: GetLastUpdateResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchReportsSinceAsync(searchReportsSince: SearchReportsSince): Promise<[result: SearchReportsSinceResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCaseWithReportsAsync(getCaseWithReports: GetCaseWithReports): Promise<[result: GetCaseWithReportsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchByDateAsync(searchByDate: SearchByDate1): Promise<[result: SearchByDateResponse1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchInsolvencyIDAsync(searchInsolvencyId: SearchInsolvencyId1): Promise<[result: SearchInsolvencyIdResponse1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchNaturalPersonAsync(searchNaturalPerson: SearchNaturalPerson1): Promise<[result: SearchNaturalPersonResponse1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchUndertakingAsync(searchUndertaking: SearchUndertaking1): Promise<[result: SearchUndertakingResponse1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchModifiedSinceAsync(searchModifiedSince: SearchModifiedSince1): Promise<[result: SearchModifiedSinceResponse1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchRemovedSinceAsync(searchRemovedSince: SearchRemovedSince1): Promise<[result: SearchRemovedSinceResponse1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCaseAsync(getCase: GetCase1): Promise<[result: GetCaseResponse1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetLastUpdateAsync(getLastUpdate: GetLastUpdate): Promise<[result: GetLastUpdateResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchReportsSinceAsync(searchReportsSince: SearchReportsSince1): Promise<[result: SearchReportsSinceResponse1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCaseWithReportsAsync(getCaseWithReports: GetCaseWithReports1): Promise<[result: GetCaseWithReportsResponse1, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CirAsmxClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CirAsmxClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
