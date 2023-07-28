/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { PlatformChargebackLogic } from './platformChargebackLogic';
import { Split } from './split';
import { ThreeDSecureData } from './threeDSecureData';

export class CancelRequest {
    /**
    * This field contains additional data, which may be required for a particular modification request.  The additionalData object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    'mpiData'?: ThreeDSecureData;
    /**
    * The original merchant reference to cancel.
    */
    'originalMerchantReference'?: string;
    /**
    * The original pspReference of the payment to modify. This reference is returned in: * authorisation response * authorisation notification  
    */
    'originalReference': string;
    'platformChargebackLogic'?: PlatformChargebackLogic;
    /**
    * Your reference for the payment modification. This reference is visible in Customer Area and in reports. Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information).
    */
    'splits'?: Array<Split>;
    /**
    * The transaction reference provided by the PED. For point-of-sale integrations only.
    */
    'tenderReference'?: string;
    /**
    * Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.
    */
    'uniqueTerminalId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "mpiData",
            "baseName": "mpiData",
            "type": "ThreeDSecureData"
        },
        {
            "name": "originalMerchantReference",
            "baseName": "originalMerchantReference",
            "type": "string"
        },
        {
            "name": "originalReference",
            "baseName": "originalReference",
            "type": "string"
        },
        {
            "name": "platformChargebackLogic",
            "baseName": "platformChargebackLogic",
            "type": "PlatformChargebackLogic"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>"
        },
        {
            "name": "tenderReference",
            "baseName": "tenderReference",
            "type": "string"
        },
        {
            "name": "uniqueTerminalId",
            "baseName": "uniqueTerminalId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CancelRequest.attributeTypeMap;
    }
}

