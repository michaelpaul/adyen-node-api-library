/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SweepSchedule {
    /**
    * The schedule type.  Possible values:  * **cron**: push out funds based on a cron expression.  * **daily**: push out funds daily at 07:00 AM CET.  * **weekly**: push out funds every Monday at 07:00 AM CET.  * **monthly**: push out funds every first of the month at 07:00 AM CET.  * **balance**: pull in funds instantly if the balance is less than or equal to the `triggerAmount`. You can only use this for sweeps of `type` **pull** and when the source is a `merchantAccount` or `transferInstrument`.If the source is transferInstrument, merchant account identifier is still required, with which you want to process the transaction.
    */
    'type'?: SweepSchedule.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SweepSchedule.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return SweepSchedule.attributeTypeMap;
    }
}

export namespace SweepSchedule {
    export enum TypeEnum {
        Daily = 'daily',
        Weekly = 'weekly',
        Monthly = 'monthly',
        Balance = 'balance',
        Cron = 'cron'
    }
}
