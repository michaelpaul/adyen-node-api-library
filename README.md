
![Node js](https://user-images.githubusercontent.com/62436079/207373079-9cf9377f-f530-4b02-a515-9b64ef7b06e7.png)

# Adyen API library for Node.js/TypeScript
![Node.js CI](https://github.com/Adyen/adyen-node-api-library/workflows/Node.js%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/Adyen/adyen-node-api-library/badge.svg?branch=main)](https://coveralls.io/github/Adyen/adyen-node-api-library?branch=main)
[![Downloads](https://img.shields.io/npm/dm/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@adyen/api-library.svg)
[![Version](https://img.shields.io/npm/v/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Adyen_adyen-node-api-library&metric=alert_status)](https://sonarcloud.io/dashboard?id=Adyen_adyen-node-api-library)

This is the official Adyen API library for Node.js that we recommend for integrating with Adyen APIs.

## Supported APIs

This library supports the following:

| API name | API version | Description | API object |
|----------|:-----------:|-------------|------------|
| [BIN Lookup API](https://docs.adyen.com/api-explorer/BinLookup/54/overview) | v54 | The BIN Lookup API provides endpoints for retrieving information based on a given BIN. | [BinLookup](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/binLookupApi.ts) |
| [Checkout API](https://docs.adyen.com/api-explorer/Checkout/70/overview) | v70 | Our latest integration for accepting online payments. | [CheckoutAPI](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/checkout/index.ts) |
| [Configuration API](https://docs.adyen.com/api-explorer/balanceplatform/2/overview) | v2 | The Configuration API enables you to create a platform where you can onboard your users as account holders and create balance accounts, cards, and business accounts. | [BalancePlatform](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/balancePlatform/index.ts) |
| [DataProtection API](https://docs.adyen.com/development-resources/data-protection-api) | v1 | Adyen Data Protection API provides a way for you to process [Subject Erasure Requests](https://gdpr-info.eu/art-17-gdpr/) as mandated in GDPR. Use our API to submit a request to delete shopper's data, including payment details and other related information (for example, delivery address or shopper email) | [DataProtection](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/dataProtectionApi.ts) |
| [Legal Entity Management API](https://docs.adyen.com/api-explorer/legalentity/3/overview) | v3 | Manage legal entities that contain information required for verification. | [LegalEntityManagement](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/legalEntityManagement/index.ts) |
| [Local/Cloud-based Terminal API](https://docs.adyen.com/point-of-sale/terminal-api-reference) | - | Our point-of-sale integration. | [TerminalLocalAPI](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/terminalLocalAPI.ts) or [TerminalCloudAPI](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/terminalCloudAPI.ts) |
| [Management API](https://docs.adyen.com/api-explorer/Management/1/overview) | v1 | Configure and manage your Adyen company and merchant accounts, stores, and payment terminals. | [Management](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/management/index.ts) |
| [Payments API](https://docs.adyen.com/api-explorer/Payment/68/overview) | v68 | Our classic integration for online payments. | [ClassicIntegrationAPI](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/paymentApi.ts) |
| [Payouts API](https://docs.adyen.com/api-explorer/Payout/68/overview) | v68 | Endpoints for sending funds to your customers. | [Payout](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/payout/index.ts) |
| [Platforms APIs](https://docs.adyen.com/platforms/api) | - | Set of APIs when using Adyen for Platforms. This API is used for the classic integration. | [Platforms](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/platforms.ts) |
| [Account API](https://docs.adyen.com/api-explorer/Account/6/overview) | v6 | Provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and verification-related documents. | [Account](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/platforms.ts) |
| [Fund API](https://docs.adyen.com/api-explorer/Fund/6/overview) | v6 | Provides endpoints for managing the funds in the accounts on your platform. These management operations include, for example, the transfer of funds from one account to another, the payout of funds to an account holder, and the retrieval of balances in an account. | [Fund](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/platforms.ts) |
| [Hosted onboarding API](https://docs.adyen.com/api-explorer/Hop/6/overview) | v6 | Provides endpoints that you can use to generate links to Adyen-hosted pages, such as an onboarding page or a PCI compliance questionnaire. You can provide these links to your account holders so that they can complete their onboarding. | [HostedOnboardingPage](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/platforms.ts) |
| [Notification Configuration API](https://docs.adyen.com/api-explorer/NotificationConfiguration/6/overview) | v6 | Provides endpoints for setting up and testing notifications that inform you of events on your platform, for example when a verification check or a payout has been completed. | [NotificationConfiguration](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/resource/platforms/notificationConfiguration.ts) |
| [POS Terminal Management API](https://docs.adyen.com/api-explorer/postfmapi/1/overview) | v1 | Endpoints for managing your point-of-sale payment terminals. | [TerminalManagement](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/terminalManagementApi.ts) |
| [Recurring API](https://docs.adyen.com/api-explorer/Recurring/68/overview) | v68 | Endpoints for managing saved payment details. | [Recurring](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/recurringApi.ts) |
| [Stored Value API](https://docs.adyen.com/payment-methods/gift-cards/stored-value-api) | v46 | Manage both online and point-of-sale gift cards and other stored-value cards. | [StoredValue](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/storedValueApi.ts) |
| [Transfers API](https://docs.adyen.com/api-explorer/transfers/3/overview) | v3 | The Transfers API provides endpoints that can be used to get information about all your transactions, move funds within your balance platform or send funds from your balance platform to a transfer instrument. | [Transfers](https://github.com/Adyen/adyen-node-api-library/blob/main/src/services/transfers/index.ts) |

## Supported Webhook versions
The library supports all webhooks under the following model directories:

| Webhooks                                                                                          | Description                                                                                                                                                                             | Model Name                                                     | Supported Version |
|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|-------------------|
| [Configuration Webhooks](https://docs.adyen.com/api-explorer/balanceplatform-webhooks/1/overview) | You can use these webhooks to build your implementation. For example, you can use this information to update internal statuses when the status of a capability is changed.              | [ConfigurationNotification](src/typings/configurationWebhooks) | **v1**            |
| [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/3/overview)             | You can use these webhooks to build your implementation. For example, you can use this information to update balances in your own dashboards or to keep track of incoming funds.        | [TransferNotification](src/typings/transferWebhooks)           | **v3**            |
| [Report Webhooks](https://docs.adyen.com/api-explorer/report-webhooks/1/overview)                 | You can download reports programmatically by making an HTTP GET request, or manually from your Balance Platform Customer Area                                                           | [ReportNotification](src/typings/reportWebhooks)               | **v1**            |
| [Notification Webhooks](https://docs.adyen.com/api-explorer/Webhooks/1/overview)                  | We use webhooks to send you updates about payment status updates, newly available reports, and other events that you can subscribe to. For more information, refer to our documentation | [Notification](src/typings/notification)                       | **v1**            |
For more information, refer to our [documentation](https://docs.adyen.com/) or the [API Explorer](https://docs.adyen.com/api-explorer/).

## Before you begin

Before you begin to integrate:

- [Create an Adyen test account](https://docs.adyen.com/get-started-with-adyen#test-account).
- [Set up your API credentials](https://docs.adyen.com/development-resources/api-credentials).
- [Install Node.js](https://nodejs.org/en/download/) version 18 or later.

## Installation

Install the [Node.JS package](https://www.npmjs.com/package/@adyen/api-library):

``` bash
npm install --save @adyen/api-library
```

Alternatively, you can download the [release on GitHub](https://github.com/Adyen/adyen-node-api-library/releases).

## Updating

To update the Node.JS package:

``` bash
npm update @adyen/api-library
```

Check for breaking changes on the [releases page](https://github.com/Adyen/adyen-node-api-library/releases/).

## Usage

``` javascript
// Step 1: Require the parts of the module you want to use
const { Client, CheckoutAPI} = require('@adyen/api-library');

// Step 2: Initialize the client object
const client = new Client({apiKey: "YOUR_API_KEY", environment: "TEST"}); 

// Step 3: Initialize the API object
const checkoutApi = new CheckoutAPI(client);

// Step 4: Create the request object
  const paymentRequest = {
    amount: {
      currency: "USD",
      value: 1000 // value in minor units
    },
    reference: "Your order number",
    paymentMethod: {
      type: "scheme",
      encryptedCardNumber: "test_4111111111111111",
      encryptedExpiryMonth: "test_03",
      encryptedExpiryYear: "test_2030",
      encryptedSecurityCode: "test_737"
    },
    shopperReference: "YOUR_UNIQUE_SHOPPER_ID_IOfW3k9G2PvXFu2j",
    storePaymentMethod: true,
    shopperInteraction: "Ecommerce",
    recurringProcessingModel: "CardOnFile",
    returnUrl: "https://your-company.com/...",
    merchantAccount: "YOUR_MERCHANT_ACCOUNT"
  };
  
// Step 5: Make the request
checkoutAPI.payments(paymentRequest)
  .then(paymentResponse => console.log(paymentResponse.pspReference))
  .catch(error => console.log(error));
```

### Step 1: Require the parts of the module you want to use

Use the Node.js `require` function to load the `Client` and API objects from the Adyen module. For the name of the API objects, see [Supported APIs](#supported-apis).

For example, to use the [Checkout API](https://docs.adyen.com/api-explorer/Checkout/70/overview):

``` javascript
const { Client, CheckoutAPI} = require('@adyen/api-library');
```

### Step 2: Initialize the client object

Initialize the client object, passing the following:
- `apiKey`: The API key you [generated from the Customer Area](https://docs.adyen.com/development-resources/api-credentials#generate-api-key).
- `environment`: For the test environment, use **TEST**. For the live environment, use **LIVE**.

For example:

``` javascript
const client = new Client({apiKey: "YOUR_API_KEY", environment: "TEST"}); 
```

### Step 3: Initialize the API object

Initialize the API object you want to use, passing the `client` object from the previous step. 

For example, for the [Checkout API](https://docs.adyen.com/api-explorer/Checkout/70/overview):

``` javascript
const checkoutApi = new CheckoutAPI(client);
```

### Step 4: Create the request object

Create a the request object. For example, for a request to the `/payments` endpoint:

``` javascript
  const paymentRequest = {
    amount: {
      currency: "USD",
      value: 1000 // value in minor units
    },
    reference: "Your order number",
    paymentMethod: {
      type: "scheme",
      encryptedCardNumber: "test_4111111111111111",
      encryptedExpiryMonth: "test_03",
      encryptedExpiryYear: "test_2030",
      encryptedSecurityCode: "test_737"
    },
    shopperReference: "YOUR_UNIQUE_SHOPPER_ID_IOfW3k9G2PvXFu2j",
    storePaymentMethod: true,
    shopperInteraction: "Ecommerce",
    recurringProcessingModel: "CardOnFile",
    returnUrl: "https://your-company.com/...",
    merchantAccount: "YOUR_MERCHANT_ACCOUNT"
  };
```

### Step 5: Make the request

Use the API object's method to make the request. For example, to make a request to the `/payments` endpoint using the `CheckoutAPI` object:

```
checkoutAPI.payments(paymentRequest)
  .then(paymentResponse => console.log(paymentResponse.pspReference))
  .catch(error => console.log(error));
```
## Client setup when going live

For APIS that require your [Live URL Prefix](https://docs.adyen.com/development-resources/live-endpoints#live-url-prefix) (Binlookup, BalanceControl, Checkout, Payout and Recurring) the client is set up as follows in order to start processing live payments:
``` typescript
const { Client } = require('@adyen/api-library');

const client = new Client({apiKey: "YOUR_API_KEY", environment: "TEST", liveEndpointUrlPrefix: "YOUR_LIVE_URL_PREFIX"}); 
```

## Usage in TypeScript

Alternatively, you can use the `Types` included in this module for Typescript and `async` syntax.

``` typescript
  const { Client, CheckoutAPI, Types } = require('@adyen/api-library');
  const client = new Client({apiKey: "YOUR_API_KEY", environment: "TEST"});

  const makePaymentsRequest = async () => {
    const paymentsRequest : Types.checkout.PaymentRequest = {
      amount: {
        currency: "USD",
        value: 1000 // Value in minor units.
      },
      reference: "Your order number",
      paymentMethod: {
        type: Types.checkout.CardDetails.TypeEnum.Scheme,
        encryptedCardNumber: "test_4111111111111111",
        encryptedExpiryMonth: "test_03",
        encryptedExpiryYear: "test_2030",
        encryptedSecurityCode: "test_737"
      },
      shopperReference: "YOUR_UNIQUE_SHOPPER_ID_IOfW3k9G2PvXFu2j",
      storePaymentMethod: true,
      shopperInteraction: Types.checkout.PaymentRequest.ShopperInteractionEnum.Ecommerce,
      recurringProcessingModel: Types.checkout.PaymentRequest.RecurringProcessingModelEnum.CardOnFile,
      returnUrl: "https://your-company.com/...",
      merchantAccount: "YOUR_MERCHANT_ACCOUNT"
    };
    const checkoutAPI = new CheckoutAPI(client);
    const paymentResponse : Types.checkout.PaymentResponse = await checkoutAPI.payments(paymentsRequest);
    console.log(paymentResponse.pspReference);
  }

  makePaymentsRequest();
```
 
## Custom HTTP client configuration

By default, [Node.js https](https://nodejs.org/api/https.html) is used to make API requests. Alternatively, you can set a custom `HttpClient` for your `Client` object.

For example, to set `axios` as your HTTP client:

``` javascript
const {Client, Config} = require('@adyen/api-library');
const axios = require("axios");
// ... more code
const config = new Config();
const client = new Client({
  config,
  httpClient: {
    async request(endpoint, json, config, isApiKeyRequired, requestOptions) {
        const response = await axios({
            method: 'POST',
            url: endpoint,
            data: JSON.parse(json),
            headers: {
                "X-API-Key": config.apiKey,
                "Content-type": "application/json"
            },
        });

        return response.data;
    }
  }
});
// ... more code
```

## Parsing and Authenticating Banking Webhooks
Parse an AccountHolderNotificationRequest webhook;
``` typescript
let bankingWebhookHandler = new BankingWebhookHandler(YOUR_BANKING_WEBHOOK);
const accountHolderNotificationRequest: AccountHolderNotificationRequest = bankingWebhookHandler.getAccountHolderNotificationRequest();
const genericWebhook = bankingWebhookHandler.getGenericWebhook();
```
Parse a generic Banking webhook;
``` typescript
let bankingWebhookHandler = new BankingWebhookHandler(YOUR_BANKING_WEBHOOK);
const genericWebhook = bankingWebhookHandler.getGenericWebhook();
```
Verify the authenticity (where you retrieve the hmac key from the CA and the signature from the webhook header);
``` typescript
const isValid = hmacValidator.validateBankingHMAC("YOUR_HMAC_KEY", "YOUR_HMAC_SIGNATURE", jsonString)
```

## Proxy configuration

To configure a proxy connection, set the `proxy` property of your `HttpURLConnectionClient` object.

For example:

``` javascript
const {HttpURLConnectionClient, Client, Config} = require('@adyen/api-library');
// ... more code
const config = new Config();
const client = new Client({ config });
const httpClient = new HttpURLConnectionClient();
httpClient.proxy = { host: "http://google.com", port: 8888,  };

client.setEnvironment('TEST');
client.httpClient = httpClient;

// ... more code
```

## Feedback
We value your input! Help us enhance our API Libraries and improve the integration experience by providing your feedback. Please take a moment to fill out [our feedback form](https://forms.gle/A4EERrR6CWgKWe5r9) to share your thoughts, suggestions or ideas. 

## Example integration

Clone our [Node.js example integration](https://github.com/adyen-examples/adyen-node-online-payments) to see how the Adyen API library for Node.js can be used. The integration includes code comments that highlight key features and concepts.

## Contributing 

We strongly encourage you to contribute to this repository by:

* Adding new features and functionality.
* Fixing bugs and issues.
* Making general improvements.

To learn how to create a pull request, read our [contribution guidelines](CONTRIBUTING.md).

## Support

To request a feature, report a bug, or report a security vulnerability, [create a GitHub issue](https://github.com/Adyen/adyen-node-api-library/issues/new/choose). 

For other questions, contact our [support team](https://www.adyen.help).

## License

This repository is available under the [MIT license](LICENSE).

## See also

* [Example integration](https://github.com/adyen-examples/adyen-node-online-payments)
