<script>
    import { invalidate } from "$app/navigation";
    import { USER_URL } from "$lib/js/api-urls.js";
  
    export let user;
  
    let article_title = user.article_title;
    let article_content = user.article_content;
    let error = false;
    let success = false;
    let showModal = false;
  
    function toggleModal() {
      showModal = !showModal;
    }
  
    async function handleSave() {
      error = false;
      success = false;
  
      
        const response = await fetch(USER_URL, {
          method: "PATCH",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ article_title, article_content })
          
        });
  
        success = response.status === 204;
      error = !success;
  
      if (success) invalidate(USER_URL);
  
     
    }
  </script>
  
  <form on:submit|preventDefault={handleSave}>
  
    <div id="publishArticles-container">
      <label for="article_title"> Title</label>
      <textarea id="article_title" bind:value={article_title} rows="1" cols="40" maxlength="20" required></textarea>
  
  
      <label for="article_content"> Content</label>
      <textarea id="article_content" bind:value={article_content} rows="4" cols="40" maxlength="1000" required></textarea>
  
      <button id="submit">Submit now!</button>
  
      {#if showModal}
      <div class="pop-up-publish">
        <p>Do you want to submit?</p>
        <button on:click={handleSave}>Yes</button>
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