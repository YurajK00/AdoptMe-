<script>
    import { PUBLIC_IMAGES_URL } from "$env/static/public";
    import DividingLine from "$lib/components/DividingLine.svelte";  
    import ProfilePage from "$lib/components/ProfilePage/ProfilePage.svelte";
    import Contact from "$lib/components/MainPage/Contact/Contact.svelte";
  export let data;
  </script>

  
<svelte:head>
  <title>Adopt me</title>
</svelte:head>

<!-- The profilepage to show -->
  <ProfilePage user = {data.user}/>

<!-- The second dividing line-->
  <DividingLine />

<!-- The contact bar-->
  <Contact/>

<!-- The last dividing line-->
  <DividingLine />
