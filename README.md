# Svelte Web Monetization

> Web Monetization API plugin implemented for use with Svelte.

## Installation

```bash
$ npm install svelte-web-monetization
```

## Usage

### Add Web Monetization to your Svelte project

```svelte
<script>
  import WebMonetization from "svelte-web-monetization";
</script>

<WebMonetization>
  <div slot="loading">Loading message here</div>
  <div slot="monetized">Monetized content here</div>
  <div slot="not-monetized">Show ads here</div>
</WebMonetization>
```

### Get Web Monetization Status and Progress

```svelte
<script>
  import { onMount } from 'svelte';
  import WebMonetization from "svelte-web-monetization";
  let wmRef;

  onMount(() => {
	console.log(wmRef.start);
	// {
	// 	state: document.monetization && document.monetization.state,
	// 	paymentPointer: YOUR-PAYMENT-POINTER,
	// 	requestId: String
	// }

	console.log(wmRef.progress)
	// {
	// 	assetCode: String,
	// 	assetScale: Number,
	// 	totalAmount: Number
	// }
  });
</script>

<WebMonetization bind:this={wmRef}></WebMonetization>
```

## Use case examples

- Hide existing ads when Web Monetization is enabled
- Content that can be viewed only when Web Monetization is enabled
- Total amount of payment stored for each user in database etc, utilized for premium content

## To-Do

- [ ] Tests

## License

This plugin is released under the [MIT License](LICENSE.md).
