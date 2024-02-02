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

<div class="articleLikeButton">
    <button on:click={incrementLikes}>
        <span class="thumb-icon">&#128077 {likes}
    </button>

    <button on:click={incrementDislikes}>
        <span class="thumb-icon">&#128078 {dislikes}
    </button>
</div>