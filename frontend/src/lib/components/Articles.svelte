<script>
    import ReadMore from "./ReadMore.svelte";
    import AlignArticles from "./AlignArticles.svelte";
</script>

<div id="articleContainer">

<div>
<h1>View Articles</h1>
<img id="pawIcon" src="pawIcon.png" alt="paw Icon" />
</div>

    <div class="articleOrderButton">
        <div><a id="hotArticles" href="url" target="_blank">&#x1F525 Hot</a></div>
        <div><a id="NewArticles" href="url" target="_blank">&#x1F525 Newest</a></div>
    </div>

    <div id="articleMainPart">
        <AlignArticles />

        <ReadMore /> 
    </div>
</div>

