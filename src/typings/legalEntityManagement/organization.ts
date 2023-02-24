/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';
import { PhoneNumber } from './phoneNumber';
import { StockData } from './stockData';
import { TaxInformation } from './taxInformation';
import { TaxReportingClassification } from './taxReportingClassification';
import { WebData } from './webData';

export class Organization {
    /**
    * The date when the organization was incorporated in YYYY-MM-DD format.
    */
    'dateOfIncorporation'?: string;
    /**
    * Your description for the organization.
    */
    'description'?: string;
    /**
    * The organization\'s trading name, if different from the registered legal name.
    */
    'doingBusinessAs'?: string;
    /**
    * The email address of the legal entity.
    */
    'email'?: string;
    /**
    * The organization\'s legal name.
    */
    'legalName': string;
    'phone'?: PhoneNumber;
    'principalPlaceOfBusiness'?: Address;
    'registeredAddress': Address;
    /**
    * The organization\'s registration number.
    */
    'registrationNumber'?: string;
    'stockData'?: StockData;
    /**
    * The tax information of the organization.
    */
    'taxInformation'?: Array<TaxInformation>;
    'taxReportingClassification'?: TaxReportingClassification;
    /**
    * Type of organization.   Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
    */
    'type'?: Organization.TypeEnum;
    /**
    * The reason the organization has not provided a VAT number.  Possible values: **industryExemption**, **belowTaxThreshold**.
    */
    'vatAbsenceReason'?: Organization.VatAbsenceReasonEnum;
    /**
    * The organization\'s VAT number.
    */
    'vatNumber'?: string;
    'webData'?: WebData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dateOfIncorporation",
            "baseName": "dateOfIncorporation",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "doingBusinessAs",
            "baseName": "doingBusinessAs",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "legalName",
            "baseName": "legalName",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "PhoneNumber"
        },
        {
            "name": "principalPlaceOfBusiness",
            "baseName": "principalPlaceOfBusiness",
            "type": "Address"
        },
        {
            "name": "registeredAddress",
            "baseName": "registeredAddress",
            "type": "Address"
        },
        {
            "name": "registrationNumber",
            "baseName": "registrationNumber",
            "type": "string"
        },
        {
            "name": "stockData",
            "baseName": "stockData",
            "type": "StockData"
        },
        {
            "name": "taxInformation",
            "baseName": "taxInformation",
            "type": "Array<TaxInformation>"
        },
        {
            "name": "taxReportingClassification",
            "baseName": "taxReportingClassification",
            "type": "TaxReportingClassification"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Organization.TypeEnum"
        },
        {
            "name": "vatAbsenceReason",
            "baseName": "vatAbsenceReason",
            "type": "Organization.VatAbsenceReasonEnum"
        },
        {
            "name": "vatNumber",
            "baseName": "vatNumber",
            "type": "string"
        },
        {
            "name": "webData",
            "baseName": "webData",
            "type": "WebData"
        }    ];

    static getAttributeTypeMap() {
        return Organization.attributeTypeMap;
    }
}

export namespace Organization {
    export enum TypeEnum {
        AssociationIncorporated = 'associationIncorporated',
        GovernmentalOrganization = 'governmentalOrganization',
        ListedPublicCompany = 'listedPublicCompany',
        NonProfit = 'nonProfit',
        PartnershipIncorporated = 'partnershipIncorporated',
        PrivateCompany = 'privateCompany'
    }
    export enum VatAbsenceReasonEnum {
        IndustryExemption = 'industryExemption',
        BelowTaxThreshold = 'belowTaxThreshold'
    }
}
