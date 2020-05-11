# Svelte Web Monetization

> Web Monetization API plugin implemented for use with Svelte.

## Installation

```bash
$ npm install svelte-web-monetization
```

## Usage

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

## To-Do

- [ ] Tests

## License

This plugin is released under the [MIT License](LICENSE.md).
