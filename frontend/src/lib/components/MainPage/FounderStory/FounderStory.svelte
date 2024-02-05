<script>
import ReadMore from "$lib/components/MainPage/FounderStory/ReadMore.svelte";
</script>

<div id="FounderStoryContainer">


<h1>Founder Story</h1>
<img id="pawIcon" src="/src/lib/image/pawIcon.png" alt="paw Icon" />

    <div id="StoryInformation">
        <p>"Adopt me" was designed and developed by four IT students from the University of Auckland.</p>
    </div>

    <div id="FounderStoryMainPart">

        <div id="Natalia">
                <img  src="/src/lib/image/Natalia.png" alt="Natalia"  />
                <p class="name">Natalia</p>
        </div>

        <div id="Echo">
                <img src="/src/lib/image/Echo.png" alt="Echo"  />
                <p class="name">Echo</p>
        </div>

        <div id="Billy">
                <img src="/src/lib/image/Billy.png" alt="Billy"  />
                <p class="name">Billy</p>
        </div>

        <div id="Yuraj">
                <img src="/src/lib/image/Yuraj.png" alt="Yuraj"  />
                <p class="name">Yuraj</p>
        </div>
    </div>

    <ReadMore />
</div>