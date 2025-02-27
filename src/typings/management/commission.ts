/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Commission {
    /**
    * A fixed commission fee, in minor units.
    */
    'fixedAmount'?: number;
    /**
    * A variable commission fee, in basis points.
    */
    'variablePercentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fixedAmount",
            "baseName": "fixedAmount",
            "type": "number"
        },
        {
            "name": "variablePercentage",
            "baseName": "variablePercentage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Commission.attributeTypeMap;
    }
}

