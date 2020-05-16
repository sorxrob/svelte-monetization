<script>
  import { onMount } from "svelte";
  import Nav from "./components/Nav.svelte";
  import Footer from "./components/Footer.svelte";
  import Advertisement from "./components/Advertisement.svelte";
  import SvelteMonetization from "svelte-monetization";
  import { addWatermark } from "./utils";
  const imageUrl = "https://i.imgur.com/tMxofag.png";
  let src = imageUrl;

  onMount(async () => {
    src = await addWatermark(imageUrl);
  });
</script>

<svelte:head>
  <meta
    name="monetization"
    content="$coil.xrptipbot.com/701298d5-481d-40ff-9945-336671ab2c42" />
</svelte:head>

<!-- Nav -->
<Nav />
<!-- Main -->
<main>
  <div class="container">
    <div class="section">
      <h4>Lorem ipsum dolor sit amet, consectetur adipisicing</h4>
      <p>Oct 1, 2020 · 11 min read</p>
      <div style="text-align: center;">
        <img {src} alt="banner" class="responsive-img" />
      </div>
      <SvelteMonetization
        let:isMonetized
        let:isLoading
        on:start={() => (src = imageUrl)}>
        {#if isLoading}
          <div>Loading...</div>
        {:else if isMonetized}
          <div>
            {#each [...Array(10).keys()] as item}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                eveniet accusantium voluptate ex, dignissimos fuga assumenda
                quidem! Voluptatum, illo! Architecto sed ullam doloremque
                voluptatum tenetur ipsam maiores accusamus, necessitatibus
                voluptates laudantium facilis corrupti ut saepe praesentium,
                obcaecati odio nulla expedita.
              </p>
            {/each}
          </div>
        {:else}
          <div>
            {#each [...Array(2).keys()] as item}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                eveniet accusantium voluptate ex, dignissimos fuga assumenda
                quidem! Voluptatum, illo! Architecto sed ullam doloremque
                voluptatum tenetur ipsam maiores accusamus, necessitatibus
                voluptates laudantium facilis corrupti ut saepe praesentium,
                obcaecati odio nulla expedita.
              </p>
            {/each}
            <Advertisement />
          </div>
        {/if}
      </SvelteMonetization>
    </div>
  </div>
</main>
<!-- Footer -->
<Footer />
