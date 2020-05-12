# svelte-monetization

> A minimal and lightweight wrapper for the Web Monetization API.

## Installation

```bash
$ npm install --save svelte-monetization
```

## Usage

### Add Svelte Monetization to your project

```svelte
<script>
  import SvelteMonetization from "svelte-monetization";

  function handleProgress(event) {
    console.log(event.detail);
  }
</script>

<SvelteMonetization on:progress={handleProgress}>
  <div slot="loading">Loading message here</div>
  <div slot="monetized">Monetized content here</div>
  <div slot="not-monetized">Show ads here</div>
</SvelteMonetization>
```

### Slots

- `loading`

  This should contain your loading message or element.

- `monetized`

  A place to put your monetized/premium content.

- `not-monetized`

  A place to put your ads.

### Events

You can also listen to [Web Monetization browser events](https://webmonetization.org/docs/api#browser-events) via Component events.

- `start`

  Fires when Web Monetization has started actively paying.

- `progress`

  Fires when a payment comes in.

- `stop`

  Used to determine when Web Monetization has stopped.

- `pending`

  Used to determine when Web Monetization is enabled

## Use case examples

- Hide existing ads when Web Monetization is enabled
- Content that can be viewed only when Web Monetization is enabled
- Total amount of payment stored for each user in database etc, utilized for premium content

## To-Do

- [ ] Tests
- [ ] Example app

## License

This plugin is released under the [MIT License](LICENSE.md).
