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
    <button on:click = { toggleProfile }>Change Profile Photo</button>  
</div>



<div id="user-infomation">
    <p>Username: </p>

    <div id="articles-you-published">
        <p>Articles you published: </p>
        <button on:click = { toggleModalDelete }>Delete</button>
        <button><a href="/Articles/ArticleEdit">Edit</a></button>
    </div>

    <div id="comments-you-published">
        <p>Comments you published:</p>

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


    <!-- To Do: save new profile photo to database -->
    {#if showProfileChange}
    <div class="pop-up-profileChange" >

        <div>
         <p>Which one you prefer?</p>
        </div>
        
        <div class="profile-container">
            <button id="last" on:click={prevImage}>◀</button>
            <img src={images[currentImage]} alt="pic">
            <button id="next" on:click={nextImage}>▶</button>
        </div>

        <div>
            <button on:click={toggleImage}>Pick</button>
            <button on:click={toggleProfile}>Cancel</button>
        </div>
        
    </div>
    {/if}

</div>