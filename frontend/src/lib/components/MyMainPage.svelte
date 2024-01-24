<script>
    import LikeButtons from "./LikeButtons.svelte";
</script>

<h1>View Articles</h1>
<div>
    <div id="article-buttons">
        <button class="hot-new-buttons">HOT</button>
        <button class="hot-new-buttons">NEWEST</button>
    </div>
    
    <div class="article-info">
        <a href="url">Adopt a cat from Auckland</a>
        <LikeButtons/>
        <time datetime="2024-01-24">January 24, 2024</time>
    </div>    

    <div class="article-info">
        <a href="url">Adopt a cat from Auckland</a>
        <LikeButtons like= 200/>
        <time datetime="2024-01-24">January 24, 2024</time>
    </div>  
</div>




<style>
    div{
        font-size: 20px;
    }

    h1{
        background-color: #B9D8A8;
        color: #21492a;
        text-align: center;
        box-shadow: 0 5px 3px lightgray;
        margin: 20px;
        border: 50px;
    }

    .hot-new-buttons {
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        color: #ffffff;
        background-color: #ff4500;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
  
    .hot-new-buttons:hover {
        background-color: #ff5e00;
    }
    
    .hot-new-buttons:focus {
        outline: none;
    }
    
    .hot-new-buttons:active {
        background-color: #ff3300;
    }

    a{
        color: rgb(31, 28, 28);
        margin-left: 10px;
    }

    time{
        margin-left: 35px;
    }

</style>


<!-- 
<div class="article-container">
    <h1>Articles for view</h1>
    <div class="hot-new-buttons">
      <button >HOT</button>
      <button>NEWEST</button>
    </div>
   
    <div class="article-links">
        <div>
            <a href="url">Adopt a cat from Auckland</a>
            <i class="fa-solid fa-thumbs-up"></i>
            <p class="thumb-up">2093</p>
            <i class="fa-regular fa-thumbs-down"></i>
            <p class="thumb-down">2093</p>
            <time datetime="2024-01-24">January 24, 2024</time>
          </div>
         
          <div>
            <a href="url">Do you want a dog from Wellington?</a>
            <i class="fa-solid fa-thumbs-up"></i>
            <p class="thumb-up">1044</p>
            <i class="fa-regular fa-thumbs-down"></i>
            <p class="thumb-down">20</p>
            <time >July 8, 2024</time>
          </div>
          
          <div>
              <a href="url">Do you want a dog from Wellington?</a>
              <button id="thumb-up" onclick="increment()">
                <i class="fa-solid fa-thumbs-up"></i>
              </button>
              
              <p class="thumb-up-numbers">1044</p>
              <i class="fa-regular fa-thumbs-down"></i>
              <p class="thumb-down-numbers">20</p>
              <time>July 4, 2024</time>
          </div>
    </div>

</div>  

<style>

    h1{
        background-color: #B9D8A8;
        color: #21492a;
        text-align: center;
        box-shadow: 0 5px 3px lightgray;
        margin: 20px;
        border: 50px;
    }
 
    .article-container{
        margin-top: 20px;
        border: solid 1px green;
        border-radius: 10px;
    }

    p{
        display: inline-block;
    }

    button {
        margin-right: 10px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        color: #ffffff;
        background-color: #f57c50;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    
    button:hover {
        background-color: #ff5e00;
    }

    button:focus {
        outline: none;
    }

    button:active {
        background-color: #ff3300;
    }

    .article-links{
        font-size: 20px;
    }

    a{
        margin-right: 30px;
        color: rgb(17, 16, 16);
    }

    #thumb-up{
        margin-right: 20px;
       
    }

    time{
        margin-left: 40px;
    }


</style> -->