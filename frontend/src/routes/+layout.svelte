 <script>
  import "$lib/css/mainPage1.css";
  import { page } from "$app/stores";
  import NavBar from "../lib/components/NavBar.svelte";


  $: path = $page.url.pathname;
  
</script>

<NavBar />

<body>
<div class="container">
  <slot />

</div>


</body>


<style>

/* #login{
      color:#9da588;
      font-size: 1rem;
      font-weight: bold;
      text-decoration: none;
    } */


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
      margin: 0px;
      padding: 10px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    & a {
      color:#434e2a;
      font-size: 1.3rem;
      font-weight: bold;
      text-decoration: none;
    }
  }

  .container {
    width: 1200px;
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
