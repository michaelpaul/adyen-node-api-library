/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RecurringDetail } from './recurringDetail';

export class PaymentSetupResponse {
    /**
    * The encoded payment session that you need to pass to the SDK.
    */
    'paymentSession'?: string;
    /**
    * The detailed list of stored payment details required to generate payment forms. Will be empty if oneClick is set to false in the request.
    */
    'recurringDetails'?: Array<RecurringDetail>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentSession",
            "baseName": "paymentSession",
            "type": "string"
        },
        {
            "name": "recurringDetails",
            "baseName": "recurringDetails",
            "type": "Array<RecurringDetail>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentSetupResponse.attributeTypeMap;
    }
}

