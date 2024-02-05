<script>
    import "$lib/css/mainPage1.css";
    import { page } from "$app/stores";
    import { AUTH_URL } from "$lib/js/api-urls.js";
    import { invalidateAll } from "$app/navigation";
  
    $: path = $page.url.pathname;

    export let data;

    async function handleLogout() {
    const response = await fetch(AUTH_URL, {
      method: "DELETE",
      credentials: "include"
    });
    await invalidateAll();
  }
    
  </script>

<nav>
    <!-- The hyperlink of other page should be changed-->
    <ul>
      <li><a href="/" class:active={path === "/"}>Home</a></li>
      <li><a href="/Articles" class:active={path === "/"}>Articles</a></li>
      <li><a href="/FounderStory" class:active={path === "/"}>Founder Story</a></li>
      <li><a href="/ProfilePage/ProfilePageShow"  class:active={path === "/"} >ProfilePage</a></li>
      {#if data.isLoggedIn}
       <li><button on:click={handleLogout} id = "logout">Logout</button></li> 
    {:else} 
       <button id="login"><a href="/login" class:active={path === "/login"}>Log in!</a></button> 
    {/if} 
    </ul>
  </nav>


  
  <style>
    #logout{
  position: relative;
  bottom: 15px;
     margin: 5px;
    background-color: #B9D8A8;
    border: none;
    border-radius: 12px;
    padding: 15px 32px;
    color:#87a803;
    font-size: 2rem;
    font-weight: bold;
    font-family: "thewonder";
  
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transition-duration: 0.8s;
      border-radius: 12px;
    }
  
    }
  </style>
  

  