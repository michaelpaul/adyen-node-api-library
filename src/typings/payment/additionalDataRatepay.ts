/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataRatepay {
    /**
    * Amount the customer has to pay each month.
    */
    'ratepay_installmentAmount'?: string;
    /**
    * Interest rate of this installment.
    */
    'ratepay_interestRate'?: string;
    /**
    * Amount of the last installment.
    */
    'ratepay_lastInstallmentAmount'?: string;
    /**
    * Calendar day of the first payment.
    */
    'ratepay_paymentFirstday'?: string;
    /**
    * Date the merchant delivered the goods to the customer.
    */
    'ratepaydata_deliveryDate'?: string;
    /**
    * Date by which the customer must settle the payment.
    */
    'ratepaydata_dueDate'?: string;
    /**
    * Invoice date, defined by the merchant. If not included, the invoice date is set to the delivery date.
    */
    'ratepaydata_invoiceDate'?: string;
    /**
    * Identification name or number for the invoice, defined by the merchant.
    */
    'ratepaydata_invoiceId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ratepay_installmentAmount",
            "baseName": "ratepay.installmentAmount",
            "type": "string"
        },
        {
            "name": "ratepay_interestRate",
            "baseName": "ratepay.interestRate",
            "type": "string"
        },
        {
            "name": "ratepay_lastInstallmentAmount",
            "baseName": "ratepay.lastInstallmentAmount",
            "type": "string"
        },
        {
            "name": "ratepay_paymentFirstday",
            "baseName": "ratepay.paymentFirstday",
            "type": "string"
        },
        {
            "name": "ratepaydata_deliveryDate",
            "baseName": "ratepaydata.deliveryDate",
            "type": "string"
        },
        {
            "name": "ratepaydata_dueDate",
            "baseName": "ratepaydata.dueDate",
            "type": "string"
        },
        {
            "name": "ratepaydata_invoiceDate",
            "baseName": "ratepaydata.invoiceDate",
            "type": "string"
        },
        {
            "name": "ratepaydata_invoiceId",
            "baseName": "ratepaydata.invoiceId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataRatepay.attributeTypeMap;
    }
}

