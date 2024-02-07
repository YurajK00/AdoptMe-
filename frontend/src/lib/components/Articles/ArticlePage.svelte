<script>
    import ArticleButton from "./ArticleButton.svelte";
    import ArticleLikeButton from "./ArticleLikeButton.svelte";
    import { onMount } from 'svelte';
     import { ARTICLE_URL } from "$lib/js/api-urls.js" ;

    export let user;

    let searchTerm = "";
    let searchResults = [];
    let showResults = false;
    let selectedDate = "";



    onMount(async () => {
    
    await fetchArticleData();
  });

  
  let articles = [];

  let articleToShow = [];
 
async function fetchArticleData() {
    
    try {

      const response = await fetch(ARTICLE_URL);

      if (response.ok) {
        articles = await response.json(); 
        console.log(articles);
        console.log("Hey it works");

        articleToShow = articles;

      } else {
        console.log("Error fetching user profile");
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

 console.log("article to show:" , articleToShow);

  function search() {
    if (searchTerm.trim() !== "" || selectedDate.trim() !== "") {
      searchResults = articles.filter(article => 
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm.trim() === "") &&
        (article.date.includes(selectedDate) || selectedDate.trim() === "")
      );
      articleToShow = searchResults;
      showResults = true;
    } else {
        showResults = false;
    }
  }

  function resetSearch() {
    articleToShow = articles;
    searchTerm = "";
    showResults = false;
  }



</script>



<div class="article-container">


{#if user}
    <ArticleButton />

    {:else}
    <div class="ArticleButtons">
     <button >HOT</button>
     <button>NEWEST</button>
 </div>
 {/if}
    

   <div class = "article-links">
    

        <div class="search">
            <label for="searchInput">Enter Article Title:</label>
            <input type="text" id="searchInput" bind:value={searchTerm} />
          
            <label for="dateInput">Filter by Date:</label>
            <input type="text" id="dateInput" bind:value={selectedDate} />
          
            <button on:click={search}>Search</button>
            <button on:click={resetSearch}>Clear Search</button>
        </div>

        <div class = "LinksofArticles">

            {#each articleToShow as { article_title, author_name, date_published }}
 
            <div id = "articleTitle">
                <img class="send" src="/src/lib/image/send.svg" alt="icon" /> 
                <a href="/Articles/SpecificArticle0"> {article_title}</a>
      
            </div>

            <div id = "articleLikeButton">
                <ArticleLikeButton />
            </div>

            <div class="info">
                <img class="pokemon" src="/src/lib/image/pokemon.svg" alt="icon" />
                <span class="publisher">{author_name}</span>
                <span class="time">&#x23F1 {date_published}</span>
            </div>

            {/each}

            {#if showResults && searchResults.length == 0 && (searchTerm.trim() !== "" || selectedDate.trim() !== "")}
            <p id="no-match">No matching articles found.</p>
            {/if}
            
        </div> 

       
    </div>
</div>
