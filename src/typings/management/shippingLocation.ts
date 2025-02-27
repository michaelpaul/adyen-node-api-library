/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';
import { Contact } from './contact';

export class ShippingLocation {
    'address'?: Address;
    'contact'?: Contact;
    /**
    * The unique identifier of the shipping location, for use as `shippingLocationId` when creating an order.
    */
    'id'?: string;
    /**
    * The unique name of the shipping location.
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "Contact"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ShippingLocation.attributeTypeMap;
    }
}

