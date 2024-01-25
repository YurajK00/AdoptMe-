<script>
    export let likes = 300;
    export let dislikes = 24;
    import '@fortawesome/fontawesome-free/css/all.css';
  
    function incrementLikes() {
      likes += 1;
    }
  
    function incrementDislikes() {
      dislikes += 1;
    }
</script>


<div class="thumb-button">
    <button on:click={incrementLikes}>
        <span class="thumb-icon">&#128077;
    </button>
    <span>Likes: {likes}</span>
</div>

<div class="thumb-button">
    <button on:click={incrementDislikes}>
        <span class="thumb-icon">&#128078;
    </button>
    <span>Dislikes: {dislikes}</span>
</div>
  
<style>
    .thumb-button {
        display: inline-block;
        align-items: center;
    }

    .thumb-icon {
        font-size: 24px;
        margin-right: 8px;
    }

    button{
        border: none;
        background-color: none;
        border-radius: 50%;
        margin-left: 50px;
    }
    
    button:hover {
        background-color: #d1f339;
        cursor: pointer;
    }

    button:active {
        background-color: #1a1818;
    }

</style>

