<script>
    import '@fortawesome/fontawesome-free/css/all.css';
    import { navigate } from 'svelte-routing';

    function goToArticlePage() {
        navigate('/');
    }
</script>

<div class="button-container">
    <button on:click={goToArticlePage}>
        <i class="fa-solid fa-arrow-right"></i>
        Read more
    </button>
</div>
 

<style>
    .button-container{
        justify-content: flex-end;
        display: flex;
    }

    button{
        background-color: white;
        font-size: 16px;
    }

</style>