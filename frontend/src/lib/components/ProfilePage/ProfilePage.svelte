<script>
     
import { onMount } from 'svelte';
  import { USERPROFILE_URL } from "$lib/js/api-urls.js";
   export let user; 

let data;
let id = user.id;
  let username = user.username;
  let firstName = user.firstName
  let lastName = user.lastName;
  let birthday = user.birthday;
  let Introduction = user.Introduction;
  let profilePicture= user.profilePicture;
  let showProfileChange = false;
  let showDeactivateAccount = false;
  let showModalDelete = false;
  let error = false;
 let success = false;

  async function fetchData(id) {
    try {
      const response = await fetch(`${USERPROFILE_URL}/${id}`);

      if (response.ok) {
         data = await response.json(); 
        username = data[0].username;
        firstName = data[0].firstName;
        lastName = data[0].lastName;
        birthday = data[0].birthday;
        Introduction = data[0].Introduction;
        profilePicture = data[0].profilePicture;
        
      } else {
        console.log("Error fetching user profile");
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  onMount(async () => {
    console.log(user.username);
    const id= user.id;
    await fetchData(id);
  });


  //-------------------------------------------------------------------------------------------------------

  async function handleSave() {
    error = false;
    success = false;
    showProfileChange = !showProfileChange;
    profilePicture = images[currentImage];
    console.log(profilePicture);
    const response = await fetch(`${USERPROFILE_URL}/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, firstName, lastName, birthday, Introduction, profilePicture})
    });

    success = response.status === 204;
    error = !success;

    // if (success) invalidate(USERPROFILE_URL);
  }

  function toggleProfile() {
    showProfileChange = !showProfileChange;
  }

  function toggleDeactivateAccount() {
    showDeactivateAccount = !showDeactivateAccount;
  }

  function toggleModalDelete() {
    showModalDelete = !showModalDelete;
  }

let images =["/src/lib/image/defaultPP-cat.png", "/src/lib/image/defaultPP-dog.png", "/src/lib/image/defaultPP-hamster.png","/src/lib/image/defaultPP-duck.png", "/src/lib/image/defaultPP-pig.png"];
let currentImage = 0;
  function nextImage() {
    // Implement nextImage functionality
    currentImage = (currentImage + 1) % images.length;
  }

  function prevImage() {
    // Implement prevImage functionality
    currentImage = (currentImage - 1 + images.length) % images.length;
  }


  </script>

<h1 id="profilePage-header">Profile page</h1>

<div id="profilePage-container">

<div id="PP">
    <img src={profilePicture} alt="PP" /> 
    <button on:click = { toggleProfile }>Edit information</button>
    <button on:click = { toggleDeactivateAccount }>Deactivate Account</button>  
</div>



<div id="all-infomation">
    
    <!-- To do: Update user's information -->
    <div id="user-information">

        <span>
         <p class="info-title" >User name: </p>
         <p> {username}</p>
        </span>
         
        <span>
         <p class="info-title">Real name: </p>
         <p>{firstName} {lastName} </p>  
        </span>
        
        <span>
         <p class="info-title">Birthday: </p>
         <p>{birthday}</p>  
        </span>
        
        <span>
         <p class="info-title">Individual information: </p>
         <p id="individual-info">{Introduction}</p>  
        </span>
    </div>

    <div id="articles-you-published">
        <p class="info-title">Articles you published: </p>
        <button on:click = { toggleModalDelete }>Delete</button>
        <button><a href="/Articles/ArticleEdit">Edit</a></button>
    </div>

    <div id="comments-you-published">
        <p class="info-title">Comments you published:</p>

        <button on:click = { toggleModalDelete }>Delete</button>
    </div>
</div>


    <!-- To Do: click Yes to delete article/ comments -->
    {#if showModalDelete}
    <div class="pop-up-delete">
        <p>Do you want to delete?</p>
        <button on:click={toggleModalDelete}>Yes</button>
        <button on:click={toggleModalDelete}>No</button>
    </div>
    {/if}

    <!-- To Do: click Yes to cancel accounter -->
    {#if showDeactivateAccount}
    <div class="pop-up-deactivate">
        <div id="deactivateinfo-container">
        <p id="deactivate-alert"> &#9888 Do you want to deactivate your account?</p>
        <p id="deactivate">*Once you deactivate your account, all your personal account information will be cleared and cannot be retrieved, including all articles and comments you published. </p>
        </div>
        <button on:click={toggleDeactivateAccount}><a href="/ProfilePage/ProfilePageDeactivate">Yes</a></button>
        <button on:click={toggleDeactivateAccount}>No</button>
    </div>
    {/if}


    <!-- To Do: save new info to database -->
    {#if showProfileChange}

    <div class="pop-up-profileChange" >
        <p>Edit your information</p>
        
        <div id="profile-info">

        <div id="profile-container">
            <button id="last" on:click={prevImage}>◀</button>
            <img src={images[currentImage]} alt="pic">
            <button id="next" on:click={nextImage}>▶</button>
        </div>

        <div id="info-container">
            <span id="username-container">
            <label for="username-change" class="info-title">User name: </label>
            <input type="text" id="username-change" bind:value={username} disabled/> 
            <p id="username-alert">*The unique username can not be changed</p>
           </span>
            
           <span>
            <label for="realname-change" class="info-title">First name: </label>
            <input type="text" id="realname-change"  bind:value={firstName} required/>
           </span>

           <span>
            <label for="realname-change" class="info-title">Last name: </label>
            <input type="text" id="realname-change"  bind:value={lastName} required/>
           </span>
           
           <span>
            <label for="birthday-change"class="info-title">Birthday: </label>
            <input type="date" id="birthday-change" bind:value={birthday}/> 
           </span>
           
            <span>
            <label for="indicidual-info-change" class="info-title">Introduction: </label>
            <input type="text" id="individual-info-change" bind:value={Introduction} required/>
           </span>
        </div>

        </div>


        <div>
            <button on:click|preventDefault={handleSave}>
            Save</button>
            <button on:click={toggleProfile}>Cancel</button>
        </div>
    </div>
        
    {/if}


</div>