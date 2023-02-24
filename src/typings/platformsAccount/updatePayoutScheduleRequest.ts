/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class UpdatePayoutScheduleRequest {
    /**
    * Direction on how to handle any payouts that have already been scheduled. Permitted values: * `CLOSE` will close the existing batch of payouts. * `UPDATE` will reschedule the existing batch to the new schedule. * `NOTHING` (**default**) will allow the payout to proceed.
    */
    'action'?: UpdatePayoutScheduleRequest.ActionEnum;
    /**
    * The reason for the payout schedule update. > This field is required when the `schedule` parameter is set to `HOLD`.
    */
    'reason'?: string;
    /**
    * The payout schedule to which the account is to be updated. Permitted values: `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`. `HOLD` will prevent scheduled payouts from happening but will still allow manual payouts to occur.
    */
    'schedule': UpdatePayoutScheduleRequest.ScheduleEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "UpdatePayoutScheduleRequest.ActionEnum"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "UpdatePayoutScheduleRequest.ScheduleEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePayoutScheduleRequest.attributeTypeMap;
    }
}

export namespace UpdatePayoutScheduleRequest {
    export enum ActionEnum {
        Close = 'CLOSE',
        Nothing = 'NOTHING',
        Update = 'UPDATE'
    }
    export enum ScheduleEnum {
        BiweeklyOn1StAnd15ThAtMidnight = 'BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT',
        Daily = 'DAILY',
        DailyAu = 'DAILY_AU',
        DailyEu = 'DAILY_EU',
        DailySg = 'DAILY_SG',
        DailyUs = 'DAILY_US',
        Hold = 'HOLD',
        Monthly = 'MONTHLY',
        Weekly = 'WEEKLY',
        WeeklyOnTueFriMidnight = 'WEEKLY_ON_TUE_FRI_MIDNIGHT'
    }
}
