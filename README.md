This is a quick demo taken from https://developers.cloudflare.com/queues/get-started/. It contains a basic queue, and has access to a secret TEST_KEY. 

It logs test key in the fetch handler, and can be tested by:

- deploying the Worker via `wrangler deploy`
- running `wrangler tail`
- hitting the deployed endpoint

The secret value should be logged. To change the value run `wrangler secret put TEST_KEY`. No new deploy should be needed. Hit the endpoint again to see the new value logged.
