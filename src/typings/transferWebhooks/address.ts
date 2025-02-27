/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Address {
    /**
    * The name of the city.
    */
    'city'?: string;
    /**
    * The two-character ISO 3166-1 alpha-2 country code. For example, **US**, **NL**, or **GB**.
    */
    'country': string;
    /**
    * First line of the street address.
    */
    'line1'?: string;
    /**
    * Second line of the street address.
    */
    'line2'?: string;
    /**
    * The postal code. Maximum length: * 5 digits for an address in the US. * 10 characters for an address in all other countries.
    */
    'postalCode'?: string;
    /**
    * The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada. > Required for the US and Canada.
    */
    'stateOrProvince'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "stateOrProvince",
            "baseName": "stateOrProvince",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}

