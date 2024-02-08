<script>
    import ArticleButton from "./ArticleButton.svelte";
    import ArticleLikeButton from "./ArticleLikeButton.svelte";
    import { onMount } from 'svelte';
     import { ARTICLE_URL } from "$lib/js/api-urls.js" ;
     import { PATCH_URL } from "$lib/js/api-urls.js" ;

    export let user;

    let searchTerm = "";
    let searchResults = [];
    let showResults = false;
    let selectedDate = "";

    onMount(async () => {
    
    await fetchArticleData();
});


//--------------------------------------------------------------------------------------------------
  let articles = [];
  let articleToShow = [];
 
async function fetchArticleData() {
    
    try {

      const response = await fetch(ARTICLE_URL);

      if (response.ok) {
        articles = await response.json(); 
        articleToShow = articles;
       

      } else {
        console.log("Error fetching user profile");
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }


  //-------------------------------------------------------------------------------------------------------------------

  function search() {
    searchResults = articles.filter(({ article_title, date_published }) =>
      (article_title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm.trim() === "") &&
      (date_published && date_published.includes(selectedDate) || selectedDate.trim() === "")
    );

    articleToShow = searchResults;
    showResults = true;
  }

  function resetSearch() {
    articleToShow = articles;
    searchTerm = "";
    selectedDate = "";
    showResults = false;
  }
//-------------------------------------------------------------------------------------------------------------------


let likes = 0;
let dislikes = 0;

console.log(likes);
console.log(dislikes);
let id = 2;

async function handleLikeClick(action) {
    try {

      let updatedDislikes = dislikes;
      let updatedLikes = likes;
      

        if (action === 'like') {
            updatedLikes += 1;
        } else if (action=== 'dislike') {
            updatedDislikes += 1;
        }
    const response = await fetch(`${PATCH_URL}/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ likes: updatedLikes, dislikes: updatedDislikes })
        });

        if (response.status === 204) {
            likes = updatedLikes;
            dislikes = updatedDislikes;
            console.log("Likes:", likes);
            console.log("Dislikes:", dislikes);
        } else {
            console.error("Failed to update likes and dislikes.");
        }
    } catch (error) {
        console.error("Error while updating likes and dislikes:", error);
    }
}
//--------------------------------------------------------------------------------------------------zzz

// async function handleLikeClick() {
//     try {
      

//         const response = await fetch(`${PATCH_URL}/${id}`, {
//             method: "PATCH",
//             credentials: "include",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ likes: likes +=1 , dislikes: dislikes})
//         });

//         if (response.status === 204) {
         
//             console.log("Likes:", likes);
//         } else {
//             console.error("Failed to update likes and dislikes.");
//         }
//     } catch (error) {
//         console.error("Error while updating likes and dislikes:", error);
//     }
// }

// async function handleDislikeClick() {
//     try {
      

//         const response = await fetch(`${PATCH_URL}/${id}`, {
//             method: "PATCH",
//             credentials: "include",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ likes : likes, dislikes: dislikes+=1 })
//         });

//         if (response.status === 204) {
         
//             console.log("Dislikes:", dislikes);
//         } else {
//             console.error("Failed to update likes and dislikes.");
//         }
//     } catch (error) {
//         console.error("Error while updating likes and dislikes:", error);
//     }
// }




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

            {#each articleToShow as  articleToShow (articleToShow.article_id)}
 
            <div id = "articleTitle">
                <img class="send" src="/src/lib/image/send.svg" alt="icon" /> 
                <a href="/Articles/SpecificArticle0"> {articleToShow.article_title}</a>
      
            </div>

            <div id = "articleLikeButton">
              <div class="articleLikeButton">
                 
                <button on:click={handleLikeClick('like')} >
                    <span class="thumb-icon">&#128077 {articleToShow.likes}

                </button>
            
                <button on:click={handleLikeClick('dislike')}>
                    <span class="thumb-icon">&#128078 {articleToShow.dislikes}
                </button>
            </div>
            </div>

            <div class="info">
                <img class="pokemon" src="/src/lib/image/pokemon.svg" alt="icon" />
                <span class="publisher">{articleToShow.author_name}</span>
                <span class="time">&#x23F1 {articleToShow.date_published}</span>
            </div>

            {/each}

            {#if showResults && searchResults.length == 0 && (searchTerm.trim() !== "" || selectedDate.trim() !== "")}
            <p id="no-match">No matching articles found.</p>
            {/if}
            
        </div> 

       
    </div>
</div>
