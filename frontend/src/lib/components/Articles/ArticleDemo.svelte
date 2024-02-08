<script>
  import {onMount} from 'svelte';
  import { COMMENT_URL } from "$lib/js/api-urls.js";
  import { invalidate } from "$app/navigation";
  export let data;

let article = {
    username: '',
    commentDate:'',
    headerPhoto: '',
    title: '',
    publishDate: '',
    author: '',
    content: ''
  };

//FETCH A COMMENT---------------------------------------------------------------------------------------------------------------------------


async function fetchComments() {

 
    try {
      const response = await fetch(`${COMMENT_URL}/${id}`);
        
        if (response.ok) {
          commentdata = await response.json();

      } else {
        throw new Error('Failed to fetch comments')
      }
        
        // Update the comments array with the fetched comments

    } catch (error) {
        console.error('Error fetching comments:', error.message);
    }

    
}

//CREATE A COMMENT---------------------------------------------------------------------------------------------------------------------------
  


// async function createComment() {
// let success = false;

//  try{
//       const response = await fetch(COMMENT_URL, {
//         method: "POST",
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({comment_content:comment_content})
//       });
//       if (!response.ok){
//       const errorMessage = await response.json();
//       throw new Error(errorMessage.error);
      
//     }
   
//    await fetchComments();
//    addComment(e);

//     success = true;
// }catch (error) {
//             console.error('Error creating article:', error.message);
//             alert('Error creating article: ' + error.message);
// }
// }


 //FETCH THE COMPONENTS WHEN THE PAGE LOADS----------------------------------------------------------------------------------------------------------------------------
let commentdata = [];
let id = data.id;
let comment_content ="";

 onMount(async () => {

  await addComment();
  invalidate(COMMENT_URL);



  });

//-----------------------------------------------------------------------------------------------------------------------------
  //To show or hide comments``````````
  let showComments = true;

  function toggleComments() {
    showComments = !showComments;
  }

  // Update the article object with new values
  article.username = 'Kelly Lamb';
  article.commentDate = 'Feburary 3, 2024';
  article.headerPhoto = '/src/lib/image/YellowCat.jpg'; 
  article.title = 'Adopt a Cat From Auckland';
  article.publishDate = 'January 26, 2024';
  article.author = 'Natalia Sharp';
  article.content = `
    <p><b>Introduction:</b><br> Meet Dorothy, a charming yellow cat with an energetic personality. I found Dorothy on the streets, and she quickly won my heart with her playful nature and affectionate demeanor. Despite my deep attachment to her, my frequent relocations prevent me from providing the stable home she deserves. As a result, I am reaching out to you, dear readers, in the hopes of finding a loving forever home for this delightful feline companion.</p>
    <p><b>About Dorothy:</b><br> Dorothy is a beautiful yellow cat with a distinct personality. Her vibrant coat matches her lively spirit, making her a delightful companion for any cat lover. She is playful, curious, and loves engaging with toys and exploring her surroundings. Dorothy is also extremely affectionate, often seeking out cuddles and belly rubs. Her endearing nature will undoubtedly bring joy and warmth to the lucky individual or family that welcomes her into their home.</p>
    <p>Ideal Home for Dorothy:<br> Dorothy deserves a secure and nurturing home environment where she can thrive and receive the love and attention she craves. Here are a few qualities that would make an ideal home for Dorothy:</p>
    <ol>
      <li>Loving Companionship: Dorothy thrives on human interaction and will greatly benefit from a home where she receives ample affection and attention.</li>
      <li>Playtime Opportunities: Given Dorothy's active nature, a home that provides plenty of playtime and stimulation is essential. Interactive toys, scratching posts, and climbing structures will keep her entertained and happy.</li>
      <li>Indoor Living: Dorothy's safety is of utmost importance. An indoor living environment will protect her from potential dangers such as traffic, predators, and harsh weather conditions.</li>
      <li>Patience and Understanding: Dorothy has experienced life on the streets, so it may take time for her to fully adjust to a new home. A patient and understanding owner who can provide a calm and supportive environment will help her transition smoothly.</li>
    </ol> 
    <p><b>How to Adopt Dorothy:</b><br> If you or someone you know is interested in providing Dorothy with a loving forever home, please consider the following steps:</p>
    <ol>
      <li>Contact Me: Reach out to me via the provided contact information to express your interest in adopting Dorothy. I will be more than happy to provide additional details and answer any questions you may have.</li>
      <li>Meet Dorothy: Arrange a meeting with Dorothy to get acquainted and assess compatibility. Spending time with her will allow you to gauge your connection and ensure a good fit.</li>
      <li>Adoption Process: If you decide to adopt Dorothy, a standard adoption process will be followed, which may include completing an adoption application, a home visit, and an adoption fee. These measures are in place to ensure Dorothy's well-being and guarantee a suitable environment for her.</li>
    </ol> 
    <p><b>Spread the Word:</b><br> Even if you are unable to adopt Dorothy yourself, you can still make a significant impact by sharing her story with your friends, family, and social networks. The more people who know about Dorothy's need for a new home, the higher the chances of finding her a loving family.</p>
    <p><b>Conclusion:</b><br> Dorothy, the yellow and active cat, is currently seeking a new home where she can receive the love, care, and stability she deserves. By spreading the word and considering adoption, you can play a crucial role in finding Dorothy her forever home. Let's work together to ensure she embarks on a new chapter filled with happiness and comfort. Together, we can make a difference in Dorothy's life and provide her with the loving home she deserves.</p>
`;

  let comments = [];

  async function addComment() {

    try{
      const response = await fetch(COMMENT_URL, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({comment_content:comment_content})
      });
      if (!response.ok){
      const errorMessage = await response.json();
      throw new Error(errorMessage.error);
    }
  
}catch (error) {
            console.error('Error creating article:', error.message);
            alert('Error creating article: ' + error.message);
}
await fetchComments();


    
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
      const comment = {
        username: data.username,
        commentDate: new Date().toLocaleDateString(),
        text: comment_content
      }
      comments = [...comments, comment];
      commentInput.value = '';
    }
  }

  // onMount(() => {
  //   // Scroll to the bottom of the page when a new comment is added
  //   const commentList = document.getElementById('comment-list');
  //   commentList.scrollTop = commentList.scrollHeight;
  // });
</script>


<!-- To do: Display user information: username, profile photo, etc. -->
<aside class="user-profile">
  <div class="profile-content">
    <img src="/src/lib/image/defaultPP-cat.png" alt="ProfilePhoto">
    <p><span id="author-label">Author: </span>{article.author}</p>
  </div>
</aside>

<main id="specificArticle-container">
  <article>
    <img src="{article.headerPhoto}" alt="HeaderPhoto" />
    <h1>{article.title}</h1>
    <p id="info-time-author">{article.publishDate} - {article.author}</p>
    <hr>
    <div class="content">{@html article.content}</div>


    
    <div id="comments-container">
      <hr>
      <form on:submit={addComment}>
        <label for="comment-input">Post Comments:</label>
        <textarea id="comment-input" rows="4" bind:value= {comment_content}></textarea>
        <button type="submit">Submit</button>
      </form>
      <hr>
<!---TO FETCH COMMENTS------------------------------------------------------------->


</div>
<!-------------------------------------------------------------------------->
  <div>    
<button id="show-hide-comments" on:click={toggleComments}>
        {#if showComments}
          Hide Comments
        {:else}
          Show Comments
        {/if}
      </button>

      {#if showComments}
      <ul id="comment-list">
        {#each comments as comments}
        <!-- {#each commentdata as  comments} -->
          <li>

            <div id="commentor-container">
              <!-- TO DO: change commentor's info -->
            <img id="commentor-PP" src="/src/lib/image/defaultPP-cat.png" alt="ProfilePhoto">
            
            
            <div id="commentor-info">
            <p id="commentor-name">User : <u>{comments.username}</u> - {comments.commentDate}</p>
            <p id="comment-content">{comments.text}</p>
            </div>

            <!-- TO DO: Add nest comment -->
            <button>Comment</button>
            </div>
          </li>
        {/each}
      </ul>
      {/if}
    </div>

  </article>
</main>