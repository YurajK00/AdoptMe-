<script>
    import { PUBLIC_IMAGES_URL } from "$env/static/public";
    import DividingLine from "$lib/components/DividingLine.svelte";  
    import DeactivateAccount from "$lib/components/ProfilePage/DeactivateAccount.svelte";
    import Contact from "$lib/components/MainPage/Contact/Contact.svelte";
  
  </script>

  
<svelte:head>
  <title>Adopt me</title>
</svelte:head>

<!-- The profilepage to show -->
  <DeactivateAccount />

<!-- The second dividing line-->
  <DividingLine />

<!-- The contact bar-->
  <Contact/>

<!-- The last dividing line-->
  <DividingLine />