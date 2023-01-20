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


export default class TerminalSettingsStoreLevelApi extends Service {
    /**
     * @summary Get the terminal logo
     * @param merchantId The unique identifier of the merchant account.
     * @param reference The reference that identifies the store.
     * @param model The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
     */
    public async getTerminalLogo(merchantId: string, reference: string, requestOptions?: IRequest.Options): Promise<Logo> {
        const localVarPath = "/merchants/{merchantId}/stores/{reference}/terminalLogos"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'reference' + '}', encodeURIComponent(String(reference)));
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
     * @param merchantId The unique identifier of the merchant account.
     * @param reference The reference that identifies the store.
     */
    public async getTerminalSettings(merchantId: string, reference: string, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const localVarPath = "/merchants/{merchantId}/stores/{reference}/terminalSettings"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'reference' + '}', encodeURIComponent(String(reference)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, TerminalSettings>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }
    /**
     * @summary Get the terminal logo
     * @param storeId The unique identifier of the store.
     * @param model The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
     */
    public async getTerminalLogoByStoreId(storeId: string, requestOptions?: IRequest.Options): Promise<Logo> {
        const localVarPath = "/stores/{storeId}/terminalLogos"
            .replace('{' + 'storeId' + '}', encodeURIComponent(String(storeId)));
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
     * @param storeId The unique identifier of the store.
     */
    public async getTerminalSettingsByStoreId(storeId: string, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const localVarPath = "/stores/{storeId}/terminalSettings"
            .replace('{' + 'storeId' + '}', encodeURIComponent(String(storeId)));
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
     * @param merchantId The unique identifier of the merchant account.
     * @param reference The reference that identifies the store.
     * @param model The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T
     * @param logo 
     */
    public async updateTerminalLogo(merchantId: string, reference: string, logo: Logo, requestOptions?: IRequest.Options): Promise<Logo> {
        const localVarPath = "/merchants/{merchantId}/stores/{reference}/terminalLogos"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'reference' + '}', encodeURIComponent(String(reference)));
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
     * @param merchantId The unique identifier of the merchant account.
     * @param reference The reference that identifies the store.
     * @param terminalSettings 
     */
    public async updateTerminalSettings(merchantId: string, reference: string, terminalSettings: TerminalSettings, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const localVarPath = "/merchants/{merchantId}/stores/{reference}/terminalSettings"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'reference' + '}', encodeURIComponent(String(reference)));
        const resource = new ManagementResource(this, localVarPath);
        const request: TerminalSettings = ObjectSerializer.serialize(terminalSettings, "TerminalSettings");
        const response = await getJsonResponse<TerminalSettings, TerminalSettings>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }
    /**
     * @summary Update the terminal logo
     * @param storeId The unique identifier of the store.
     * @param model The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
     * @param logo 
     */
    public async updateTerminalLogoByStoreId(storeId: string, logo: Logo, requestOptions?: IRequest.Options): Promise<Logo> {
        const localVarPath = "/stores/{storeId}/terminalLogos"
            .replace('{' + 'storeId' + '}', encodeURIComponent(String(storeId)));
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
     * @param storeId The unique identifier of the store.
     * @param terminalSettings 
     */
    public async updateTerminalSettingsByStoreId(storeId: string, terminalSettings: TerminalSettings, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const localVarPath = "/stores/{storeId}/terminalSettings"
            .replace('{' + 'storeId' + '}', encodeURIComponent(String(storeId)));
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
