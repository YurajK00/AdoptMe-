<script>
    import DividingLine from "$lib/components/DividingLine.svelte";

    let showModal = false;
    function toggleModal() {
      showModal = !showModal;
    }
  </script>


<!-- To Do: show the original title and article in textarea so that they can be editted directly-->
<div id="publishArticles-container">
    
  <div>
  <p>Title</p>
  <textarea id="article_title" rows="1" cols="40" maxlength="20" required></textarea>
  </div>

  <div id="content-upload">
  <div>
    <p> Content</p>
    <textarea id="article_content"  rows="4" cols="40" maxlength="1000" required></textarea>
  </div>

  <div class="fileinput-button">
    <span id="text">Add image</span>
    <input type="file" id="content-image" name="content-image" accept="image/*"/>
  </div>
</div>
    

    <!-- To Do: click Yes to save the new article-->
  <div class="edit-button">
    <button on:click = { toggleModal }> 
        Submit now!
    </button>

    <button><a href="/ProfilePage/ProfilePageShow">Cancel</a></button>
  </div>

    {#if showModal}
    <div class="pop-up-publish">
        <p>Do you want to submit?</p>
        <button on:click={toggleModal}>Yes</button>
        <button on:click={toggleModal}>No</button>
    </div>
    {/if}

</div>

<DividingLine />