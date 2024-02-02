<script>
   import { fade } from 'svelte/transition';

  let showModal = false;
  function toggleModal() {
    showModal = !showModal;
  }

  let faqList = [
    { question: '▶ How can I publish articles?', answer: 'Articles -> Publish' },
    { question: '▶ How can I log in?', answer: 'NavBar -> Log in' },
    { question: '▶ Forget password', answer: 'Try to remember' },
    { question: '▶ How can I change my profile photo?', answer: 'Log in -> Profile page -> Change profile photo' },
    { question: '▶ When is Echo\'s Birthday?', answer: 'October 10' },
    { question: '▶ When is Natalia\'s Birthday?', answer: 'September 4' },
    { question: '▶ When is Yuraj\'s Birthday?', answer: 'December 1' },
    { question: '▶ When is Billy\'s Birthday?', answer: 'June 13' },
    { question: '▶ Other Problems?', answer: 'Good luck!!!' }
  ];

  let activeQuestion = null;

  function toggleAnswer(index) {
    activeQuestion = activeQuestion === index ? null : index;
}


</script>
<!-- Side nav bar part -->
<div class="sideNavBox">
    <img id="gingerCat" src="/src/lib/image/gingercat.png" alt="gingerCat">

    <div class = "sideNav">   
      <h2>Quick Guide</h2>
      <a href="/">Home</a>
      <a href="#articleContainer">Articles</a>
      <a href= #FounderStoryContainer>Founder story</a>
      <a href="#ContactContainer">Contact us</a>
    </div>

    <div class="customerService">
      <p>Any Problems?</p>
      <button on:click = { toggleModal }>Customer Service Here!</button>
    </div>
  </div>

  {#if showModal}
  <div class="pop-up-customerService">
    <button on:click={toggleModal}>✘</button>
    <div class="customerService-container">
      <h3 >Common Question</h3>

      {#each faqList as { question, answer }, index (index)}
      <div class="faq" on:click={() => toggleAnswer(index)}>
        {question}
      </div>
      {#if activeQuestion === index}
        <div in:fade class="answer active">{answer}</div>
      {/if}
    {/each}
    </div>
  </div>
  {/if}