<script>
  import { PUBLIC_IMAGES_URL } from "$env/static/public";
  import MessageView from "$lib/components/MessageView.svelte";
  export let data;
  
  // var imageList = [{
  //   src: "scroll-1.png",
  //   alt: "cat1"
  // }, {
  //   src: "scroll-2.png",
  //   alt: "cat2"
  // } ];

  // SnapSwiper(imageList, '.snap-swiper-index');

  // SnapSwiper.prototype.clickHandler(document.querySelector(".snap-swiper-index"), function () {
  //   console.log('[元素被点击了]');
  // })

</script>

<svelte:head>
  <!-- <script src = "$lib/components/snap-swiper.js"></script> -->
  <title>Adopt me</title>
</svelte:head>

<h1 id="header">Adopt me!</h1>
<img id="pawIcon" src="pawIcon.png" alt="paw Icon" />
<img id="rawPaw" src="rawPaw.png" alt="a row of paws" />

<!-- First part: Introduction + Scroll picture display + side nav bar -->
<div id="firstPart">

    <!-- Slide show part -->
  <div id="slideshow">
    <div id = "images-container">
      <img class="list" src="scroll-1.png" alt="cat1"  />
      <img class="list" src="scroll-2.png" alt="cat2"  />
      <img class="list" src="scroll-3.png" alt="cat3"  />
      <img class="list" src="scroll-4.png" alt="cat1"  />
      <img class="list" src="scroll-5.png" alt="cat1"  />
    </div>
  </div>

    <!-- Introduction part -->
    <div id="introduction-box">
      <h2 id="mainHeading">Who are we ?</h2>
      <h2 id="subheading">--Introdution of "Adopt me"</h2>
      <p>"Adopt Me" serves as a digital non-profit platform facilitating the exchange of pet adoption information among the public, with a commitment to providing affectionate homes for all stray animals. </p>
      <p>Users can either share details about pets available for adoption or search for their desired companions. </p>
      <p>To uphold the rights and interests of everyone involved and prevent any external discrepancies, all platform users are required to undergo real-name authentication. </p>
      <p>For additional inquiries, please refer to the contact information at the bottom of this page.</p>
      </div>


  <div id = "sideNav">
    <h2>Quick Guide</h2>
    <a href="/">Home</a>
    <a href="/">Articles</a>
    <a href="/">Founder story</a>
    <a href="/">Contact us</a>

  </div>

</div>

<h2>Messages from server</h2>
{#each data.messages as message (message.id)}
  <MessageView {message} />
{/each}

<style>

@font-face {
    font-family: 'heyhoo';
    src: url('lib/font/heyhoo-lgnmd.ttf');
    }

@font-face {
    font-family: 'ADR';
    src: url('lib/font/ArchitectsDaughter-Regular.ttf');
    }

 #header {
    background: linear-gradient(to right, transparent, #B9D8A8);
    color: #21492a;
    text-align: center;
    box-shadow: 0 5px 3px lightgray;
    margin: 20px;
    border: 50px;
    font-family: "heyhoo";
    font-size: 60px;
    letter-spacing: 20px;
    text-shadow: 
    1px 1px 0 #D2D478,
    2px 2px 0 #277025,
    3px 3px 0 #277025,
    4px 4px 0 #D2D478;
  }

  #pawIcon {
    position:absolute;
    left: 430px;
    top: 20px;
    width: 80px;
  }

  #rawPaw {
    position:absolute;
    right: 200px;
    top: -25px;
    width: 300px;
  }



#firstPart{
  display: flex;
  padding: 20px;
  margin: 20px;
  overflow: hidden;
}

  #introduction-box {
    background: 
    linear-gradient(to right, transparent, 50%, pink),
    url("pawBG.png");
    background-size: 250%;
    border: 0.3rem outset #efaaa5;
    outline: 0.3rem solid #B9D8A8;
    border-radius: 12px;
    width: 400px;
    padding: 20px;
    margin: 20px;

    &:hover {
        transition-duration: 1.5s;
        transform: scale(1.03);
      }

    & #mainHeading {
      color: #277025;
      text-align: lef;
      font-size: 30px;
      margin: 5px;
      padding: 10px;
      font-family: "heyhoo";
      letter-spacing: 5px;
      text-shadow: 
      1px 1px 0 #d27a7b,
      2px 2px 0 #dfdaa3,
      3px 3px 0 #d27a7b,
      4px 4px 0 #dfdaa3;
    }

    & #subheading {
      color: #277025;
      text-align: right;
      font-size: 20px;
      margin: 0;
      font-family: "heyhoo";
      letter-spacing: 5px;
      text-shadow: 
      1px 1px 0 #d27a7b,
      2px 2px 0 #dfdaa3,
      3px 3px 0 #d27a7b,
      4px 4px 0 #dfdaa3;
    }

    & p {
      color: #277025;
      margin: 10px;
      padding: 10px;
      text-align: left;
      font-size: 18px;
      text-indent: 20px;
      font-family: cursive;
      font: bold;
    }
  } 
  
  #slideshow {
    width: 650px;
    height: 450px;
    position: relative;
    overflow: hidden;
    margin: 20px;
    border: 0.5rem outset #efaaa5;
    outline: 0.5rem solid #B9D8A8;
    border-radius: 12px;
  }

  #images-container{
    position: absolute;
    left: 0; 
    top: 0;
    animation: slideshow 20s linear infinite;
    display: flex;
    transform: translate3d(0, 0, 0);
  } 

  .list {
    width: 650px;
    height: 450px;
    float: left;
    margin-right: 10px;
  }

  @keyframes slideshow{
    0% {transform: translate(0,0);}
    15% {transform: translate(0,0);} 

    20% {transform: translate(-20%,0);} 
    35% {transform: translate(-20%,0);}

    40% {transform: translate(-40%,0);}
    55% {transform: translate(-40%,0);}

    60% {transform: translate(-60%,0);}
    75% {transform: translate(-60%,0);}

    80% {transform: translate(-80%,0);}
    95% {transform: translate(-80%,0);}

    100% {transform: translate(0,0);} 
  }

  #sideNav {
    position: fixed;
    right: 30px;
    top: 200px;
    background: 
    linear-gradient(to right, transparent, 20%, pink);
    background-size: 250%;
    border: 0.3rem outset #efaaa5;
    outline: 0.3rem solid #B9D8A8;
    border-radius: 12px;
    width: 150px;
    height: 420px;
    padding: 20px;
    margin: 20px;
    z-index: 1;
    transition: 0.5s; 

    & h2 {
    color: #21492a;
    margin: 0;
    font-family: "heyhoo";
    font-size: 20px;
    text-shadow: 
    1px 1px 0 #d27a7b,
    2px 2px 0 #dfdaa3,
    3px 3px 0 #d27a7b,
    4px 4px 0 #dfdaa3;
    }

    &:hover {
        transition-duration: 1.5s;
        transform: scale(1.03);
      }
  }

  #sideNav a {
    padding: 0px, 0px, 20px, 20px;
    margin: 5px;
    text-decoration: none;
    text-align: left;
    font-size: 25px;
    color: #277025;
    display: block;
    transition: 0.3s;
   
    &:hover {
        transition-duration: 0.5s;
        color: #d27a7b;
      }
}

  </style>


