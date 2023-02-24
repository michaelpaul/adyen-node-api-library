/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class IdentificationData {
    /**
    * The card number of the document that was issued (AU only).
    */
    'cardNumber'?: string;
    /**
    * The expiry date of the document, in YYYY-MM-DD format.
    */
    'expiryDate'?: string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.
    */
    'issuerCountry'?: string;
    /**
    * The state or province where the document was issued (AU only).
    */
    'issuerState'?: string;
    /**
    * Applies only to individuals in the US. Set to **true** if the individual does not have an SSN. To verify their identity, Adyen will require them to upload an ID document.
    */
    'nationalIdExempt'?: boolean;
    /**
    * The number in the document.
    */
    'number'?: string;
    /**
    * Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.  When providing ID numbers: * For **individual**, the `type` values can be **driversLicense**, **identityCard**, **nationalIdNumber**, or **passport**.  When uploading photo IDs: * For **individual**, the `type` values can be **identityCard**, **driversLicense**, or **passport**.  When uploading other documents: * For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, or **proofOfIndustry**.   * For **individual**, the `type` values can be **identityCard**, **driversLicense**, **passport**, **proofOfNationalIdNumber**, **proofOfResidency**, **proofOfIndustry**, or **proofOfIndividualTaxId**.  * For **soleProprietorship**, the `type` values can be **constitutionalDocument**, **proofOfAddress**, or **proofOfIndustry**.  * Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
    */
    'type': IdentificationData.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardNumber",
            "baseName": "cardNumber",
            "type": "string"
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "string"
        },
        {
            "name": "issuerCountry",
            "baseName": "issuerCountry",
            "type": "string"
        },
        {
            "name": "issuerState",
            "baseName": "issuerState",
            "type": "string"
        },
        {
            "name": "nationalIdExempt",
            "baseName": "nationalIdExempt",
            "type": "boolean"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IdentificationData.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IdentificationData.attributeTypeMap;
    }
}

export namespace IdentificationData {
    export enum TypeEnum {
        BankStatement = 'bankStatement',
        DriversLicense = 'driversLicense',
        IdentityCard = 'identityCard',
        NationalIdNumber = 'nationalIdNumber',
        Passport = 'passport',
        ProofOfAddress = 'proofOfAddress',
        ProofOfNationalIdNumber = 'proofOfNationalIdNumber',
        ProofOfResidency = 'proofOfResidency',
        RegistrationDocument = 'registrationDocument',
        VatDocument = 'vatDocument',
        ProofOfOrganizationTaxInfo = 'proofOfOrganizationTaxInfo',
        ProofOfIndustry = 'proofOfIndustry',
        ConstitutionalDocument = 'constitutionalDocument'
    }
}
