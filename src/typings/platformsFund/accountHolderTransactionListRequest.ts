/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionListForAccount } from './transactionListForAccount';

export class AccountHolderTransactionListRequest {
    /**
    * The code of the account holder that owns the account(s) of which retrieve the transaction list.
    */
    'accountHolderCode': string;
    /**
    * A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included.
    */
    'transactionListsPerAccount'?: Array<TransactionListForAccount>;
    /**
    * A list of statuses to include in the transaction list. If left blank, all transactions will be included. >Permitted values: >* `PendingCredit` - a pending balance credit. >* `CreditFailed` - a pending credit failure; the balance will not be credited. >* `Credited` - a credited balance. >* `PendingDebit` - a pending balance debit (e.g., a refund). >* `CreditClosed` - a pending credit closed; the balance will not be credited. >* `CreditSuspended` - a pending credit closed; the balance will not be credited. >* `DebitFailed` - a pending debit failure; the balance will not be debited. >* `Debited` - a debited balance (e.g., a refund). >* `DebitReversedReceived` - a pending refund reversal. >* `DebitedReversed` - a reversed refund. >* `ChargebackReceived` - a received chargeback request. >* `Chargeback` - a processed chargeback. >* `ChargebackReversedReceived` - a pending chargeback reversal. >* `ChargebackReversed` - a reversed chargeback. >* `Converted` - converted. >* `ManualCorrected` - manual booking/adjustment by Adyen. >* `Payout` - a payout. >* `PayoutReversed` - a reversed payout. >* `PendingFundTransfer` - a pending transfer of funds from one account to another. >* `FundTransfer` - a transfer of funds from one account to another.
    */
    'transactionStatuses'?: Array<AccountHolderTransactionListRequest.TransactionStatusesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "transactionListsPerAccount",
            "baseName": "transactionListsPerAccount",
            "type": "Array<TransactionListForAccount>"
        },
        {
            "name": "transactionStatuses",
            "baseName": "transactionStatuses",
            "type": "Array<AccountHolderTransactionListRequest.TransactionStatusesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderTransactionListRequest.attributeTypeMap;
    }
}

export namespace AccountHolderTransactionListRequest {
    export enum TransactionStatusesEnum {
        BalanceNotPaidOutTransfer = 'BalanceNotPaidOutTransfer',
        BalancePlatformSweep = 'BalancePlatformSweep',
        BalancePlatfromSweepReturned = 'BalancePlatfromSweepReturned',
        Chargeback = 'Chargeback',
        ChargebackCorrection = 'ChargebackCorrection',
        ChargebackCorrectionReceived = 'ChargebackCorrectionReceived',
        ChargebackReceived = 'ChargebackReceived',
        ChargebackReversed = 'ChargebackReversed',
        ChargebackReversedCorrection = 'ChargebackReversedCorrection',
        ChargebackReversedCorrectionReceived = 'ChargebackReversedCorrectionReceived',
        ChargebackReversedReceived = 'ChargebackReversedReceived',
        Converted = 'Converted',
        CreditClosed = 'CreditClosed',
        CreditFailed = 'CreditFailed',
        CreditReversed = 'CreditReversed',
        CreditReversedReceived = 'CreditReversedReceived',
        CreditSuspended = 'CreditSuspended',
        Credited = 'Credited',
        DebitFailed = 'DebitFailed',
        DebitReversedReceived = 'DebitReversedReceived',
        Debited = 'Debited',
        DebitedReversed = 'DebitedReversed',
        DepositCorrectionCredited = 'DepositCorrectionCredited',
        DepositCorrectionDebited = 'DepositCorrectionDebited',
        Fee = 'Fee',
        FundTransfer = 'FundTransfer',
        FundTransferReversed = 'FundTransferReversed',
        InvoiceDeductionCredited = 'InvoiceDeductionCredited',
        InvoiceDeductionDebited = 'InvoiceDeductionDebited',
        ManualCorrected = 'ManualCorrected',
        ManualCorrectionCredited = 'ManualCorrectionCredited',
        ManualCorrectionDebited = 'ManualCorrectionDebited',
        MerchantPayin = 'MerchantPayin',
        MerchantPayinReversed = 'MerchantPayinReversed',
        Payout = 'Payout',
        PayoutReversed = 'PayoutReversed',
        PendingCredit = 'PendingCredit',
        PendingDebit = 'PendingDebit',
        PendingFundTransfer = 'PendingFundTransfer',
        ReCredited = 'ReCredited',
        ReCreditedReceived = 'ReCreditedReceived',
        SecondChargeback = 'SecondChargeback',
        SecondChargebackCorrection = 'SecondChargebackCorrection',
        SecondChargebackCorrectionReceived = 'SecondChargebackCorrectionReceived',
        SecondChargebackReceived = 'SecondChargebackReceived'
    }
}
