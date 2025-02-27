/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ClassicCheckoutSDKApi } from "./classicCheckoutSDKApi";
import { ModificationsApi } from "./modificationsApi";
import { OrdersApi } from "./ordersApi";
import { PaymentLinksApi } from "./paymentLinksApi";
import { PaymentsApi } from "./paymentsApi";
import { RecurringApi } from "./recurringApi";
import { UtilityApi } from "./utilityApi";

import Service from "../../service";
import Client from "../../client";

export default class CheckoutAPI extends Service {
    
    public constructor(client: Client) {
        super(client);
    }

    public get ClassicCheckoutSDKApi() {
        return new ClassicCheckoutSDKApi(this.client);
    }

    public get ModificationsApi() {
        return new ModificationsApi(this.client);
    }

    public get OrdersApi() {
        return new OrdersApi(this.client);
    }

    public get PaymentLinksApi() {
        return new PaymentLinksApi(this.client);
    }

    public get PaymentsApi() {
        return new PaymentsApi(this.client);
    }

    public get RecurringApi() {
        return new RecurringApi(this.client);
    }

    public get UtilityApi() {
        return new UtilityApi(this.client);
    }
}
