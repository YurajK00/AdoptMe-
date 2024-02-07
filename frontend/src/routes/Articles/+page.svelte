<script>
    import ArticlePage from "$lib/components/Articles/ArticlePage.svelte";
    import DividingLine from "$lib/components/DividingLine.svelte";
    import Contact from "$lib/components/MainPage/Contact/Contact.svelte";
export let data;

</script>

<svelte:head>
  <title>Adopt me</title>
</svelte:head>

<!-- The header -->
<h1 id="articlesHeader">Articles for view</h1>

<!-- The dividing line after header -->
<DividingLine />

<!-- The main part to show the articless -->
<ArticlePage user = {data.user}  />

<!-- The dividing line after main part -->
<DividingLine />

<!-- The contact part -->
<Contact />

<!-- The last dividing line -->
<DividingLine />


