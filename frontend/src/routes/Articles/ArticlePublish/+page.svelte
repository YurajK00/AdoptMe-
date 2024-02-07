<script>
    import DividingLine from "$lib/components/DividingLine.svelte";
    import Contact from "$lib/components/MainPage/Contact/Contact.svelte";
    import ArticlePublish from "$lib/components/Articles/ArticlePublish.svelte";
    
    export let data;
let mf;
</script>

<svelte:head>
  <title>Adopt me</title>
</svelte:head>


<h1 id="articlePublishHeader">Publish your own article</h1>

{#if data.user}
<ArticlePublish data = {data.user}/>
<DividingLine />
<Contact/>
<DividingLine />

{/if}
