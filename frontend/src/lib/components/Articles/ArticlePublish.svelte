<script>
    import DividingLine from "$lib/components/DividingLine.svelte";

    let showModal = false;
    function toggleModal() {
      showModal = !showModal;
    }

  </script>

<div id="publishArticles-container">
    <label for="article_title"> Title</label>
    <input type="text" id="article_title" name="article_title" maxlength="20" minlength="1" required value="something interesting?"/>
    
    <div>
    <label for="article_content"> Content</label>
    
    <span class="fileinput-button">
      <span id="text">Add image</span>
      <input type="file" id="content-image" name="content-image" accept="image/*"/>
    </span>
    
    </div>

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