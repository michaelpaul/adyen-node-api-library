/*
 * The version of the OpenAPI document: v3
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class HULocalAccountIdentification {
    /**
    * The 24-digit bank account number, without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * **huLocal**
    */
    'type': HULocalAccountIdentification.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "HULocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return HULocalAccountIdentification.attributeTypeMap;
    }
}

export namespace HULocalAccountIdentification {
    export enum TypeEnum {
        HuLocal = 'huLocal'
    }
}
