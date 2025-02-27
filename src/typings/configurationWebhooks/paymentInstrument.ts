/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Card } from './card';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';

export class PaymentInstrument {
    /**
    * The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.
    */
    'balanceAccountId': string;
    /**
    * Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.
    */
    'bankAccount'?: IbanAccountIdentification | USLocalAccountIdentification;
    'card'?: Card;
    /**
    * Your description for the payment instrument, maximum 300 characters.
    */
    'description'?: string;
    /**
    * The unique identifier of the payment instrument.
    */
    'id': string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.
    */
    'issuingCountryCode': string;
    /**
    * The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.
    */
    'paymentInstrumentGroupId'?: string;
    /**
    * Your reference for the payment instrument, maximum 150 characters.
    */
    'reference'?: string;
    /**
    * The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **Active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **Requested**.  Possible values:    * **Active**:  The payment instrument is active and can be used to make payments.    * **Requested**: The payment instrument has been requested. This state is applicable for physical cards.   * **Inactive**: The payment instrument is inactive and cannot be used to make payments.    * **Suspended**: The payment instrument is temporarily suspended and cannot be used to make payments.    * **Closed**: The payment instrument is permanently closed. This action cannot be undone.   * **Stolen**    * **Lost**   
    */
    'status'?: PaymentInstrument.StatusEnum;
    /**
    * Type of payment instrument.  Possible value: **card**, **bankAccount**. 
    */
    'type': PaymentInstrument.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balanceAccountId",
            "baseName": "balanceAccountId",
            "type": "string"
        },
        {
            "name": "bankAccount",
            "baseName": "bankAccount",
            "type": "IbanAccountIdentification | USLocalAccountIdentification"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "issuingCountryCode",
            "baseName": "issuingCountryCode",
            "type": "string"
        },
        {
            "name": "paymentInstrumentGroupId",
            "baseName": "paymentInstrumentGroupId",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentInstrument.StatusEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentInstrument.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrument.attributeTypeMap;
    }
}

export namespace PaymentInstrument {
    export enum StatusEnum {
        Active = 'Active',
        Closed = 'Closed',
        Inactive = 'Inactive',
        Lost = 'Lost',
        Requested = 'Requested',
        Stolen = 'Stolen',
        Suspended = 'Suspended',
        Blocked = 'blocked',
        Discarded = 'discarded'
    }
    export enum TypeEnum {
        BankAccount = 'bankAccount',
        Card = 'card'
    }
}
