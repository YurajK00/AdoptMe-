<script>
    import DividingLine from "$lib/components/DividingLine.svelte";

    let showModal = false;
    function toggleModal() {
      showModal = !showModal;
    }
  </script>

<div id="publishArticles-container">
    <label for="article_title"> Title</label>
    <textarea id="article_title" name="article_title" rows="1" cols="40" maxlength="20" required>
    Give me your title...
    </textarea>
    
    
    <label for="article_content"> Content</label>
    <textarea id="article_content" name="article_content" rows="4" cols="40" maxlength="1000" required>
    Something interesting?
    </textarea>
    
    <button id="submit" on:click = { toggleModal }> 
        Submit now!
    </button>

    {#if showModal}
    <div class="pop-up-publish">
        <p>Do you want to submit?</p>
        <button on:click={toggleModal}>Yes</button>
        <button on:click={toggleModal}>No</button>
    </div>
    {/if}

</div>

<DividingLine />