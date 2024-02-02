<script>
  import { onMount } from 'svelte';
  let images = ["/src/lib/image/scroll-1.png", "/src/lib/image/scroll-2.png", "/src/lib/image/scroll-3.png", "/src/lib/image/scroll-4.png", "/src/lib/image/scroll-5.png"];
  let currentImage = 0;
  let interval;

  function toggleImage() {
    currentImage = (currentImage + 1) % images.length;
  }

  function nextImage() {
    currentImage = (currentImage + 1) % images.length;
  }

  function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
  }

  function startAutoPlay() {
    interval = setInterval(nextImage, 3000); // Switch picture interval, unit: milliseconds
  }

  function stopAutoPlay() {
    clearInterval(interval);
  }

  function handleClickNext() {
    stopAutoPlay(); 
    nextImage(); 
    startAutoPlay(); 
  }

  function handleClickLast() {
    stopAutoPlay(); 
    prevImage(); 
    startAutoPlay(); 
  }

  onMount(() => {
    startAutoPlay();
  });
</script>


<!-- Slide show part + activity notices-->

   <div class="leftPart">
        <div class="slideshow" >
            <div id = "images-container" style={`transform: translateX(-${currentImage * 100}%)`}>
              {#each images as img (img)}
                <img src={img} alt="pic">
              {/each}
            </div>
            <button id="last" on:click={handleClickLast}>◀</button>
            <button id="next" on:click={handleClickNext}>▶</button>
        </div>
    
        <div class="activityBox">
          <div class="activity">
          <h3>New activities: Pet Beauty Photo Contest!</h3>
          <p>Come and post beautiful photos of your pets!</p>
          </div>
    
        <div>
          <img id= "loudspeaker" src = "/src/lib/image/loudspeaker.png" alt="loudspeaker"  />
        </div>
    </div>
  </div>
  