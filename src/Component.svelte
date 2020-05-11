<script>
  import { onMount } from "svelte";
  export let isLoading = true;
  export let isMonetized = false;
  export let start = {
    state: document.monetization && document.monetization.state,
    paymentPointer: null,
    requestId: null
  };
  export let progress = {
    assetCode: null,
    assetScale: null,
    totalAmount: 0
  };

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
      const { paymentPointer, requestId } = event.detail;
      const newMonetizationStart = {
        state: document.monetization.state,
        paymentPointer,
        requestId
      };
      start = Object.assign({}, newMonetizationStart);

      isLoading = false;
      isMonetized = true;
    });

    document.monetization.addEventListener("monetizationprogress", event => {
      const { amount, assetCode, assetScale } = event.detail;
      const totalAmount = (+amount * Math.pow(10, -assetScale)).toFixed(
        assetScale
      );
      const newMonetizationProgress = {
        assetCode,
        assetScale,
        totalAmount
      };
      progress = Object.assign({}, newMonetizationProgress);
    });
  });
</script>

<svelte:options accessors />
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
