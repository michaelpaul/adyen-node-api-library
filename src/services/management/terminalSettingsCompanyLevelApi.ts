/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
/* tslint:disable:no-unused-locals */
import { Logo } from '../../typings/management/models';
import { TerminalSettings } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class TerminalSettingsCompanyLevelApi extends Service {
    /**
     * @summary Get the terminal logo
     * @param companyId The unique identifier of the company account.
     * @param model The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
     */
    public async getTerminalLogo(companyId: string, requestOptions?: IRequest.Options): Promise<Logo> {
        const localVarPath = "/companies/{companyId}/terminalLogos"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, Logo>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Logo");
    }
    /**
     * @summary Get terminal settings
     * @param companyId The unique identifier of the company account.
     */
    public async getTerminalSettings(companyId: string, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const localVarPath = "/companies/{companyId}/terminalSettings"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, TerminalSettings>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }
    /**
     * @summary Update the terminal logo
     * @param companyId The unique identifier of the company account.
     * @param model The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
     * @param logo 
     */
    public async updateTerminalLogo(companyId: string, logo: Logo, requestOptions?: IRequest.Options): Promise<Logo> {
        const localVarPath = "/companies/{companyId}/terminalLogos"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: Logo = ObjectSerializer.serialize(logo, "Logo");
        const response = await getJsonResponse<Logo, Logo>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Logo");
    }
    /**
     * @summary Update terminal settings
     * @param companyId The unique identifier of the company account.
     * @param terminalSettings 
     */
    public async updateTerminalSettings(companyId: string, terminalSettings: TerminalSettings, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const localVarPath = "/companies/{companyId}/terminalSettings"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: TerminalSettings = ObjectSerializer.serialize(terminalSettings, "TerminalSettings");
        const response = await getJsonResponse<TerminalSettings, TerminalSettings>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }
}
