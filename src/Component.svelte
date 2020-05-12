<script>
  import { onMount, createEventDispatcher } from "svelte";
  export let isLoading = true;
  export let isMonetized = false;

  const dispatch = createEventDispatcher();

  onMount(() => {
    if (!document.monetization) {
      isLoading = false;
      isMonetized = false;
      return;
    }

    const { state } = document.monetization;

    if (state === "stopped") {
      isLoading = false;
      isMonetized = false;
    }

    document.monetization.addEventListener("monetizationstart", event => {
      dispatch("start", event.detail);

      isLoading = false;
      isMonetized = true;
    });

    document.monetization.addEventListener("monetizationprogress", event => {
      dispatch("progress", event.detail);
    });

    document.monetization.addEventListener("monetizationpending", event => {
      dispatch("pending", event.detail);
    });

    document.monetization.addEventListener("monetizationstop", event => {
      dispatch("stop", event.detail);
    });
  });
</script>

{#if isLoading}
  <slot name="loading">
    <span>Your loading content here.</span>
  </slot>
{:else if isMonetized}
  <slot name="monetized">
    <span>Monetized content here.</span>
  </slot>
{:else}
  <slot name="not-monetized">
    <span>Your ads here.</span>
  </slot>
{/if}
