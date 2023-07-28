/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RepaymentTerm } from './repaymentTerm';
import { ThresholdRepayment } from './thresholdRepayment';

export class Repayment {
    /**
    * The repayment that is deducted daily from incoming net volume, in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).
    */
    'basisPoints': number;
    'term'?: RepaymentTerm;
    'threshold'?: ThresholdRepayment;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "basisPoints",
            "baseName": "basisPoints",
            "type": "number"
        },
        {
            "name": "term",
            "baseName": "term",
            "type": "RepaymentTerm"
        },
        {
            "name": "threshold",
            "baseName": "threshold",
            "type": "ThresholdRepayment"
        }    ];

    static getAttributeTypeMap() {
        return Repayment.attributeTypeMap;
    }
}

