<script>

    //Change profile photo pop-up window
    let showProfileChange = false;
    function toggleProfile() {
        showProfileChange = !showProfileChange;
    }

    //Cancel button pop-up window
    let showModalDelete = false;
    function toggleModalDelete() {
      showModalDelete = !showModalDelete;
    }

    //Change profile photo
    let images = ["/src/lib/image/defaultPP-cat.png", "/src/lib/image/defaultPP-dog.png", "/src/lib/image/defaultPP-duck.png", "/src/lib/image/defaultPP-pig.png", "/src/lib/image/defaultPP-hamster.png"];
    let currentImage = 0;

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
    }

    function prevImage() {
        currentImage = (currentImage - 1 + images.length) % images.length;
    }

    //Change profile photo
    //To do: To replace let newImage by user's current PP, "cat" is just an example
    let newImage = "/src/lib/image/defaultPP-cat.png";
    function toggleImage() {
    showProfileChange = !showProfileChange;
        newImage = images[currentImage];
    }


  </script>

<h1 id="profilePage-header">Profile page</h1>

<div id="profilePage-container">

<div id="PP">
    <img src={newImage} alt="PP" /> 
    <button on:click = { toggleProfile }>Edit information</button>  
</div>



<div id="all-infomation">
    
    <!-- To do: Update user's information -->
    <div id="user-information">

        <span>
         <p class="info-title">User name: </p>
         <p>Default</p>   
        </span>
         
        <span>
         <p class="info-title">Real name: </p>
         <p>Default</p>  
        </span>
        
        <span>
         <p class="info-title">Birthday: </p>
         <p>2000-10-10</p>  
        </span>
        
        <span>
         <p class="info-title">Individual information: </p>
         <p id="individual-info">Love you</p>  
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
            <span >
            <label for="username-change" class="info-title">User name: </label>
            <input type="text" id="username-change" value="Default" /> 
           </span>
            
           <span>
            <label for="realname-change" class="info-title">Real name: </label>
            <input type="text" id="realname-change" value="Default">
           </span>
           
           <span>
            <label for="birthday-change"class="info-title">Birthday: </label>
            <input type="date" id="birthday-change"/> 
           </span>
           
            <span>
            <label for="indicidual-info-change" class="info-title">Individual information: </label>
            <input type="text" id="individual-info-change" value="Love you"/>
           </span>
        </div>

        </div>


        <div>
            <button on:click={toggleImage}>Save</button>
            <button on:click={toggleProfile}>Cancel</button>
        </div>
    </div>
        
    {/if}


</div>