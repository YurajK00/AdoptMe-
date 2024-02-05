<script>
    export let likes = 300;
    export let dislikes = 24;
  
    function incrementLikes() {
      likes += 1;
    }
  
    function incrementDislikes() {
      dislikes += 1;
    }
</script>

<div class="likeButton">
    <button class="thumb-button"  on:click={incrementLikes}>
        <span class="thumb-icon">&#128077 Likes: {likes}
    </button>

    <button class="thumb-button" on:click={incrementDislikes}>
        <span class="thumb-icon">&#128078 Dislikes: {dislikes}
    </button>
</div>