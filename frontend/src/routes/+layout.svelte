 <script>
  import "$lib/css/mainPage1.css";
  import { page } from "$app/stores";
  import NavBar from "../lib/components/NavBar/NavBar.svelte";


  $: path = $page.url.pathname;
  
</script>


<NavBar/>

<div class="container">
  <slot />

</div>
