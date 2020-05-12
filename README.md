# svelte-monetization

> Web Monetization API plugin implemented for use with Svelte.

## Installation

```bash
$ npm install --save svelte-monetization
```

## Usage

### Add Svelte Monetization to your project

```svelte
<script>
  import SvelteMonetization from "svelte-monetization";
</script>

<SvelteMonetization>
  <div slot="loading">Loading message here</div>
  <div slot="monetized">Monetized content here</div>
  <div slot="not-monetized">Show ads here</div>
</SvelteMonetization>
```

### Events

You can also listen to [Web Monetization browser events](https://webmonetization.org/docs/api#browser-events) via Component events.

```svelte
<script>
  import SvelteMonetization from "svelte-monetization";

  function handleStart(event) {}
  function handleStop(event) {}
  function handlePending(event) {}
  function handleProgress(event) {}
</script>

<SvelteMonetization
  on:progress={handleProgress}
  on:start={handleStart}
  on:stop={handleStop}
  on:pending={handlePending}>
  <!-- Rest of your code -->
</SvelteMonetization>
```

## Use case examples

- Hide existing ads when Web Monetization is enabled
- Content that can be viewed only when Web Monetization is enabled
- Total amount of payment stored for each user in database etc, utilized for premium content

## To-Do

- [ ] Tests
- [ ] Example app

## License

This plugin is released under the [MIT License](LICENSE.md).
