<script>
    import LikeButtons from "./LikeButtons.svelte";
    import ReadMore from "./ReadMore.svelte";
    import AlignArticles from "./AlignArticles.svelte";
</script>

<h1>View Articles</h1>


<div id="article-container">

    <div>
        <a class="hot-new-articles" href="url" target="_blank">HOT</a>
        <a class="hot-new-articles" href="url" target="_blank">NEWEST</a>
    </div>

    <AlignArticles />

    <ReadMore /> 
</div>

<h1>Founders' Story</h1>

<style>


    #article-container{
        margin: 30px 30px 50px 30px;
        border: dashed 1px;
        padding: 15px;
    }

    .hot-new-articles {
        margin-bottom: 5px;
        margin-right: 10px;
        display: inline-block;
        padding: 10px 20px;
        background-color: #d1f339;
        color: #070707;
        text-decoration: none;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
    }

    div{
        font-size: 20px;
    }

    h1{
        background-color: #B9D8A8;
        color: #21492a;
        text-align: center;
        box-shadow: 0 5px 3px lightgray;
        margin: 20px;
        border: 50px;
    }


  

</style>

