<script>
  import { onMount, createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let isLoading = true;
  let isMonetized = false;

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

<slot {isLoading} {isMonetized} />
