/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	TEST_QUEUE: Queue<any>;
	TEST_KEY: String;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    console.log("🚀 ~ file: index.ts:19 ~ fetch ~ env.TEST_KEY:", env.TEST_KEY)
    let log = {
      url: request.url,
      method: request.method,
      headers: Object.fromEntries(request.headers),
    };
    await env.TEST_QUEUE.send(log);
    return new Response('Success!');
  },
	async queue(batch: MessageBatch<any>, env: Env): Promise<void> {
		console.log("🚀 ~ file: index.ts:29 ~ fetch ~ env.TEST_KEY:", env.TEST_KEY)
    let messages = JSON.stringify(batch.messages);
    console.log(`consumed from our queue: ${messages}`);
  },
};
