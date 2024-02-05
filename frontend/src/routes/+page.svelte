<script>
  import { PUBLIC_IMAGES_URL } from "$env/static/public";

  import Header from "$lib/components/MainPage/Header/Header.svelte";
  import FirstPart from "$lib/components/MainPage/FirstPart/FirstPart.svelte";
  import DividingLine from "$lib/components/DividingLine.svelte";
  import Articles from "$lib/components/MainPage/Articles/Articles.svelte";
  import FounderStory from "$lib/components/MainPage/FounderStory/FounderStory.svelte";
  import Contact from "$lib/components/MainPage/Contact/Contact.svelte";


</script>

<svelte:head>
  <title>Adopt me</title>
</svelte:head>


<!-- The Header -->
<Header />

<!-- The first part -->
<FirstPart />

<!-- The dividing line after first part -->
<DividingLine />

<!-- The article part -->
<Articles />

<!-- The dividing line after article part -->
<DividingLine />

<!-- The founder story part -->
<FounderStory />

<!-- The dividing line after founder story part -->
<DividingLine />

<!-- The contact part -->
<Contact />

<!-- The last dividing line -->
<DividingLine />
