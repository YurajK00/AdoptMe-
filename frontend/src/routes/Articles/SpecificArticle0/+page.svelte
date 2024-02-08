<script>
  import { PUBLIC_IMAGES_URL } from "$env/static/public";
  import ArticleDemo from "$lib/components/Articles/ArticleDemo.svelte";
  export let data;
</script>

<svelte:head>
  <title>Adopt me</title>
</svelte:head>

<ArticleDemo data = {data.user} />

