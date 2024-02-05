 <script>
  import "$lib/css/mainPage1.css";
  import { page } from "$app/stores";
  import NavBar from "../lib/components/NavBar/NavBar.svelte";


  $: path = $page.url.pathname;
  export let data;
  
</script>


<NavBar {data}/>

<div class="container">
  <slot />

</div>
