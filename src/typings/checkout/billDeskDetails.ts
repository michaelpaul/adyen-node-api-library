/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BillDeskDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The issuer id of the shopper\'s selected bank.
    */
    'issuer': string;
    /**
    * **billdesk**
    */
    'type': BillDeskDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BillDeskDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BillDeskDetails.attributeTypeMap;
    }
}

export namespace BillDeskDetails {
    export enum TypeEnum {
        BilldeskOnline = 'billdesk_online',
        BilldeskWallet = 'billdesk_wallet',
        OnlinebankingIn = 'onlinebanking_IN',
        WalletIn = 'wallet_IN'
    }
}
