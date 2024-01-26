<script>
  import { PUBLIC_IMAGES_URL } from "$env/static/public";
  import MyMainPage from "../lib/components/MyMainPage.svelte";
  export let data;
  import Introduction from "$lib/components/Introduction.svelte";
  import SideNavBar from "../lib/components/SideNavBar.svelte";
  import LeftPart from "../lib/components/LeftPart.svelte";
  import DividingLine from "../lib/components/DividingLine.svelte";


</script>

<svelte:head>
  <title>Adopt me</title>
</svelte:head>

<h1 id="header">Adopt me!</h1>

<!-- The dividing line after header -->
<DividingLine />

<!-- Two images on header -->
<img id="pawIcon" src="pawIcon.png" alt="paw Icon" />
<img id="rawPaw" src="rawPaw.png" alt="a row of paws" />

<!-- First part: Introduction + Scroll picture display + activity notices + side nav bar -->
<div id="firstPart">

    <LeftPart />

    <Introduction />

    <SideNavBar />

</div>


  <DividingLine />




<MyMainPage />