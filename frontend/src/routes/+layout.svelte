 <script>
  import "$lib/css/app.css";
  import { page } from "$app/stores";


  $: path = $page.url.pathname;
  
</script>

<nav>
  <!-- The hyperlink of other page should be changed-->
  <ul>
    <li><a href="/" class:active={path === "/"}>Home</a></li>
    <li><a href="/" class:active={path === "/"}>Articles</a></li>
    <li><a href="/" class:active={path === "/"}>Founder Story</a></li>
    <button id="login"><a href="/" class:active={path === "/"}>Log in!</a></button>
  </ul>
</nav>

<body>
<div class="container">
  <slot />

</div>
</body>


<style>
    
    @font-face {
      font-family: 'ADR';
      src: url('lib/font/ArchitectsDaughter-Regular.tff');
    }


#login {
      margin: 5px;
      background-color: #B9D8A8;
      border: none;
      border-radius: 12px;
      padding: 15px 32px;
      color:#87a803;
      font-size: 1rem;
      font-weight: bold;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transition-duration: 0.8s;
        border-radius: 12px;
      }

    }


  nav {
    background-color: #9BC07C;
    padding-left: 20px;
    box-shadow: 0 5px 3px lightgray;

    & > ul {
      list-style: none;
      margin: 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 300px;
    }

    & li {
      margin: 5px;
      padding: 10px;

      &:hover {
        /* background-color: rgba(255, 255, 255, 0.2); */
        transition-duration: 0.8s;
        border-radius: 12px;
        transform: scale(1.1);

      }
    }

    & a {
      color:#434e2a;
      font-family: "ADR";
      font-size: 1.3rem;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        color: #d27a7b;
        transition-duration: 0.8s;

      }
    }
  }

  .container {
    position: relative;
    width: 1500px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.362);

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  body{
    background: url("Background.png") no-repeat;
    height: 100%;
    width: 100%;
    background-size: cover;
  }
</style>
