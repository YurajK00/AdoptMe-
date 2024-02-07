<script>
 
  import { ARTICLE_URL } from "$lib/js/api-urls.js";
  
  

let article_title = "";
let article_content = "";
let error = false;
let success = false;


    let showModal = false;
    function toggleModal() {
      showModal = !showModal;
    }

//-----------------------------------------------------------------
  async function createArticle() {
    error = false;
    success = false;

    try{
    
      const response = await fetch(ARTICLE_URL, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ article_title :article_title, article_content:article_content })
      
      });
      alert('Article created successfully');
      console.log(article_title)

    if (!response.ok){
      const errorMessage = await response.json();
      throw new Error(errorMessage.error);
    }
    

    article_content = "";
    article_title = "";
  }

    catch (error) {
            console.error('Error creating article:', error.message);
            alert('Error creating article: ' + error.message);

  }

}


    

  </script>

<form on:submit|preventDefault={createArticle}>

  <div id="publishArticles-container">
    
    <div>
    <p>Title</p>
    <textarea id="article_title" bind:value={article_title} rows="1" cols="40" maxlength="20" required></textarea>
    </div>

    <div id="content-upload">
    <div>
      <p> Content</p>
      <textarea id="article_content" bind:value={article_content} rows="4" cols="40" maxlength="1000" required></textarea>
    </div>

    <div class="fileinput-button">
      <span id="text">Add image</span>
      <input type="file" id="content-image" name="content-image" accept="image/*"/>
    </div>
  </div>

    <div>
    <button id="submit">Submit now!</button>
    </div>

    {#if showModal}
    <div class="pop-up-publish">
      <p>Do you want to submit?</p>
      <button on:click={createArticle}>Yes</button>
      <button on:click={toggleModal}>No</button>
    </div>
    {/if}

    {#if error}<span class="error">Could not save!</span>{/if}
    {#if success}<span class="success">Saved!</span>{/if}
    
   </div>
</form>


<style>

.error,
  .success {
    font-weight: bold;
    padding: 5px;
    text-align: center;
  }

  .error {
    color: darkred;
    background-color: lightcoral;
  }

  .success {
    color: darkgreen;
    background-color: lightgreen;
  }

</style>
