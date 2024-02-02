<script>
    import ArticleButton from "./ArticleButton.svelte";
    import ArticleLikeButton from "./ArticleLikeButton.svelte";
    
    let articlesToShow = [
    { title: 'Adopt a cat from Auckland', publisher: 'Default user',  time:'January 20, 2024'},
    { title: 'Do you want a dog from Hamilton?', publisher: 'Default user',  time:'January 18, 2024'},
    { title: 'Finding a new home for a cute rabbit!', publisher: 'Default user',  time:'January 15, 2024'},
    { title: 'My life, my rules, my style, my attitude', publisher: 'Default user',  time:'January 13, 2024'},
    { title: 'Just call me Angel my morning Angel', publisher: 'Default user',  time:'January 11, 2024'},
    { title: 'One Piece is Peak Fiction', publisher: 'Default user',  time:'January 6, 2024'},
    { title: 'Here\'s how to adopt a Tiger in New Zealand', publisher: 'Default user',  time:'January 1, 2024'},
    { title: 'Taylor Swift is overrated', publisher: 'Default user',  time:'December 24, 2023'},
    { title: 'One Piece is Peak Fiction. Period', publisher: 'Default user',  time:'December 21, 2023'},
    { title: 'I\'m not superstitious but I\'m a little stitious', publisher: 'Default user',  time:'December 18, 2023'}
  ];
</script>

<div class="article-container">
    
    <ArticleButton />

   <div class = "article-links">

        <div class = "LinksofArticles">

                {#each articlesToShow as { title, publisher, time }, index (index)}
            <div id = "articleTitle">
                <img class="send" src="/src/lib/image/send.svg" alt="icon" /> 
                <a href="/Articles/SpecificArticle"> {title}</a>
            </div>

            <div id = "articleLikeButton">
                <ArticleLikeButton />
            </div>

            <div class="info">
                <img class="pokemon" src="/src/lib/image/pokemon.svg" alt="icon" />
                <span class="publisher">{publisher}</span>
                <span class="time">&#x23F1 {time}</span>
            </div>

                {/each}
            
        </div> 

       
    </div>
</div>
