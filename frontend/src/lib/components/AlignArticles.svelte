<script>
    import LikeButtons from "./LikeButtons.svelte";
</script>

<div class="line">
    <a href="url" class="link" target="_blank">Adopt a cat from Auckland</a>
    <LikeButtons />
    <span class="date">January 24, 2024</span>
</div>

<div class="line">
    <a href="url" class="link" target="_blank">Do you want a dog from Hamilton?</a>
    <LikeButtons />
    <span class="date">March 3, 2025</span>
</div>

<div class="line">
    <a href="url" class="link" target="_blank">Finding a new home for a cute rabbit! </a>
    <LikeButtons />
    <span class="date">March 3, 2025</span>
</div>

<style>
    .line {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  
    .link {
        flex: 0.7;
        color: rgb(31, 28, 28);
        margin-left: 10px;
    }

    span{
        margin-left: 40px;
    }


</style>