<script>
  import { PUBLIC_IMAGES_URL } from "$env/static/public";
  import DividingLine from "$lib/components/DividingLine.svelte";
  import FounderStory from "$lib/components/FounderStory/FounderStory.svelte";
  import Contact from "$lib/components/MainPage/Contact/Contact.svelte";


</script>

<svelte:head>
  <title>Adopt me</title>
</svelte:head>

<!-- The header -->
<div class="founderHeader">
  <h1>About us</h1>
  <h2>--The Founder Story</h2>
</div>

<!-- The dividing line after header -->
<DividingLine />

<!-- Display pictures -->
<FounderStory />

<!-- The dividing line -->
<DividingLine />

<!-- The contact bar -->
<Contact />

<!-- The last dividing line -->
<DividingLine />


