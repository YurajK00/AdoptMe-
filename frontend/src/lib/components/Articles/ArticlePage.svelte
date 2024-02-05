<script>
    import ArticleButton from "./ArticleButton.svelte";
    import ArticleLikeButton from "./ArticleLikeButton.svelte";
    let searchTerm = "";
    let searchResults = [];
    let showResults = false;
    let selectedDate = "";
    export let data;
    

    let articles = [
    { title: 'Adopt a cat from Auckland', publisher: 'Default user',  date:'2024-01-20'},
    { title: 'Do you want a dog from Hamilton?', publisher: 'Default user',  date:'2024-01-18'},
    { title: 'Finding a new home for a cute rabbit!', publisher: 'Default user',  date:'2024-01-15'},
    { title: 'My life, my rules, my style, my attitude', publisher: 'Default user',  date:'2024-01-12'},
    { title: 'Just call me Angel my morning Angel', publisher: 'Default user',  date:'2024-01-08'},
    { title: 'One Piece is Peak Fiction', publisher: 'Default user',  date:'2024-01-01'},
    { title: 'Here\'s how to adopt a Tiger in New Zealand', publisher: 'Default user',  date:'2023-12-28'},
    { title: 'Taylor Swift is overrated', publisher: 'Default user',  date:'2023-12-24'},
    { title: 'One Piece is Peak Fiction. Period', publisher: 'Default user',  date:'2023-12-20'},
    { title: 'I\'m not superstitious but I\'m a little stitious', publisher: 'Default user',  date:'2023-12-15'}
  ];

 let articleToShow = articles;
  
 for (let index = 0; index < articles.length; index++) {
 
  let articleNo = articles[index].index;


  console.log(`Index: ${index}`);
  console.log(articleNo);
  console.log(articles[index]);
}

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


{#if data.isLoggedIn}
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

            {#each articleToShow as { title, publisher, date }, index (index)}
       
          

 


            <div id = "articleTitle">
                <img class="send" src="/src/lib/image/send.svg" alt="icon" /> 
                <a href="/Articles/SpecificArticle0"> {title}</a>
      
            </div>

            <div id = "articleLikeButton">
                <ArticleLikeButton />
            </div>

            <div class="info">
                <img class="pokemon" src="/src/lib/image/pokemon.svg" alt="icon" />
                <span class="publisher">{publisher}</span>
                <span class="time">&#x23F1 {date}</span>
            </div>

            {/each}

            {#if showResults && searchResults.length == 0 && (searchTerm.trim() !== "" || selectedDate.trim() !== "")}
            <p id="no-match">No matching articles found.</p>
            {/if}
            
        </div> 

       
    </div>
</div>
