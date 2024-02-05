<script>
    import ReadMore from "./ReadMore.svelte";
    import AlignArticles from "./AlignArticles.svelte";
</script>

<div id="articleContainer">

<div>
<h1>View Articles</h1>
<img id="pawIcon" src="/src/lib/image/pawIcon.png" alt="paw Icon" />
</div>

    <div class="articleOrderButton">
        <button id="hotArticles" >&#x1F525 Hot</button>
        <button id="NewArticles" >&#x1F525 Newest</button>
    </div>

    <div id="articleMainPart">
        <AlignArticles />

        <ReadMore /> 
    </div>
</div>

