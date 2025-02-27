/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { CapitalGrant } from "../../typings/transfers/models";
import { CapitalGrantInfo } from "../../typings/transfers/models";
import { CapitalGrants } from "../../typings/transfers/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/transfers/models";

export class CapitalApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/btl/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get a capital account
    * @param counterpartyAccountHolderId {@link string } The counterparty account holder id.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link CapitalGrants }
    */
    public async getCapitalAccount(requestOptions?: IRequest.Options): Promise<CapitalGrants> {
        const endpoint = `${this.baseUrl}/grants`;
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, CapitalGrants>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "CapitalGrants");
    }

    /**
    * @summary Get grant reference details
    * @param id {@link string } The unique identifier of the grant.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link CapitalGrant }
    */
    public async getGrantReferenceDetails(id: string, requestOptions?: IRequest.Options): Promise<CapitalGrant> {
        const endpoint = `${this.baseUrl}/grants/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, CapitalGrant>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "CapitalGrant");
    }

    /**
    * @summary Request a grant payout
    * @param capitalGrantInfo {@link CapitalGrantInfo } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link CapitalGrant }
    */
    public async requestGrantPayout(capitalGrantInfo: CapitalGrantInfo, requestOptions?: IRequest.Options): Promise<CapitalGrant> {
        const endpoint = `${this.baseUrl}/grants`;
        const resource = new Resource(this, endpoint);
        const request: CapitalGrantInfo = ObjectSerializer.serialize(capitalGrantInfo, "CapitalGrantInfo");
        const response = await getJsonResponse<CapitalGrantInfo, CapitalGrant>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CapitalGrant");
    }
}
