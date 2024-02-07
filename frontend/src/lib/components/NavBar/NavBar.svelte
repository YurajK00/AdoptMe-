<script>
    import "$lib/css/mainPage1.css";
    import { page } from "$app/stores";
    import { AUTH_URL } from "$lib/js/api-urls.js";
    import { invalidateAll } from "$app/navigation";
  
    $: path = $page.url.pathname;

    export let data;

    let showModal = false;

    function toggleModal() {
    showModal = !showModal;
    }

    async function handleLogout() {

      // isLoggedIn= false;

    const response = await fetch(AUTH_URL, {
      method: "DELETE",
      credentials: "include"
    });
    if(response.ok){
      showModal = !showModal;
      window.location.href = "/";
      await invalidateAll();

    }
  }
    


  </script>

<nav>
    <!-- The hyperlink of other page should be changed-->
    <ul>
      <li><a href="/" class:active={path === "/"}>Home</a></li>
      <li><a href="/Articles" class:active={path === "/"}>Articles</a></li>
      <li><a href="/FounderStory" class:active={path === "/"}>Founder Story</a></li>
      {#if data.isLoggedIn}
       <li><a href="/ProfilePage/ProfilePageShow"  class:active={path === "/"} >Profile Page</a></li>
       <li><button on:click={toggleModal} id = "logout">Logout</button></li>
       
       {#if showModal}
      <div class="pop-up-logout">
        <p>Do you want to logout?</p>
        <button on:click={handleLogout}>Yes</button>
        <button on:click={toggleModal}>No</button>
    </div>
    {/if}
       
    {:else} 
       <button id="login"><a href="/login" class:active={path === "/login"}>Log in!</a></button> 
    {/if} 
    </ul>
  </nav>

  

  