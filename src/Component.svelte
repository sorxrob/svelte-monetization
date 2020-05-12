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

    const events = ["start", "progress", "pending", "stop"];
    events.forEach(name => {
      document.monetization.addEventListener("monetization" + name, event => {
        dispatch(name, event.detail);

        if (name === "start") {
          isLoading = false;
          isMonetized = true;
        }
      });
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
