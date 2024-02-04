<script>
    import "$lib/css/mainPage1.css";
    import { page } from "$app/stores";
  
  
    $: path = $page.url.pathname;
    
  </script>

<nav>
    <!-- The hyperlink of other page should be changed-->
    <ul>
      <li><a href="/" class:active={path === "/"}>Home</a></li>
      <li><a href="/Articles" class:active={path === "/"}>Articles</a></li>
      <li><a href="/FounderStory" class:active={path === "/"}>Founder Story</a></li>
      <button id="login"><a href="/" class:active={path === "/"}>Log in!</a></button>
      <!-- <a href="/ProfilePage"  class:active={path === "/"} >ProfilePage</a> -->
    </ul>
  </nav>

  