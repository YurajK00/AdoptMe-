<script>
  import { PUBLIC_IMAGES_URL } from "$env/static/public";
  import MessageView from "$lib/components/MessageView.svelte";
  export let data;
</script>

<svelte:head>
  <title>Adopt me</title>
</svelte:head>

<h1>Adopt me!</h1>
<p>This is the homepage.</p>

<!-- This image is stored on our Express server. -->
<img src={`${PUBLIC_IMAGES_URL}/Dragonite.png`} alt="Dragonite" style="width: 320px" />

<!-- This image is stored in the frontend's "static" folder -->
<img src="Amber%20Axolotls.png" alt="Amber Axolotls" style="width: 320px" />

<h2>Messages from server</h2>
{#each data.messages as message (message.id)}
  <MessageView {message} />
{/each}

<style>

  h1{
    background-color: #B9D8A8;
    color: #21492a;
    text-align: center;
    box-shadow: 0 5px 3px lightgray;
    margin: 20px;
    border: 50px;
  }

  </style>
