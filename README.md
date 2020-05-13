# svelte-monetization

> A minimal and lightweight wrapper for the Web Monetization API.

![GitHub](https://img.shields.io/github/license/sorxrob/svelte-monetization)
![GitHub repo version](https://img.shields.io/npm/v/svelte-monetization)
![GitHub last commit](https://img.shields.io/github/last-commit/sorxrob/svelte-monetization)

## Sample Project

```bash
$ cd example
$ npm install
$ npm run dev
```

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

<SvelteMonetization
  let:isMonetized
  let:isLoading
  on:progress={handleProgress}>
  {#if isLoading}
    <div>Loading message here</div>
  {:else if isMonetized}
    <div>Monetized/premium content here</div>
  {:else}
    <div>Show ads here</div>
  {/if}
</SvelteMonetization>
```

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
- [x] Example app

## License

This plugin is released under the [MIT License](LICENSE.md).
