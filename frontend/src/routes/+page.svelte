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

<!-- First part: Introduction + Scroll picture display -->
<div id="firstPart">

  <!-- Introduction part -->
  <div id="introduction-box">
    <h2 id="mainHeading">Who are we ?</h2>
    <h2 id="subheading">--Introdution of "Adopt me"</h2>
    <p>"Adopt Me" serves as a digital non-profit platform facilitating the exchange of pet adoption information among the public, with a commitment to providing affectionate homes for all stray animals. </p>
    <p>Users can either share details about pets available for adoption or search for their desired companions. </p>
    <p>To uphold the rights and interests of everyone involved and prevent any external discrepancies, all platform users are required to undergo real-name authentication. </p>
    <p>For additional inquiries, please refer to the contact information at the bottom of this page.</p>
    </div>

  <div id="slideshow">
    <div id = "images-container">
      <img class="list" src="scroll-1.png" alt="cat1"  />
      <img class="list" src="scroll-2.png" alt="cat2"  />
      <img class="list" src="scroll-3.png" alt="cat3"  />
      <img class="list" src="scroll-4.png" alt="cat1"  />
      <img class="list" src="scroll-5.png" alt="cat1"  />
    </div>
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
}

  #introduction-box {
    background: 
    linear-gradient(to right, transparent, 40%, rgba(166,233,143,255)),
    url("pawBG.png");
    background-size: 200%;
    border: 1px solid mistyrose;
    box-shadow: 0 10px 10px lightgray;
    width: 450px;
    padding: 20px;
    margin: 20px;

    & #mainHeading {
      color: #277025;
      text-align: lef;
      font-size: 30px;
      margin: 0;
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
      color: #d27a7b;
      text-align: left;
      font-size: 18px;
      text-indent: 20px;
      font-family: cursive;
      font: bold;
    }
  } 
  
  #slideshow {
    width: 700px;
    height: 500px;
    position: relative;
    overflow: hidden;
    margin: 20px;
    border: 1px solid black;
  }

  #images-container{
    /* background: url("PhotoList.png"); */
    position: absolute;
    left: 0; 
    top: 0;
    animation: slideshow 20s linear infinite;
    display: flex;
    transform: translate3d(0, 0, 0);
  } 

  .list {
    width: 700px;
    height: 500px;
    float: left;
    margin-right: 10px;
  }

  @keyframes slideshow{
    0% {transform: translate(0,0);}
    15% {transform: translate(0,0);} /* 停留1500ms */

    20% {transform: translate(-20%,0);} /* 切换500ms 位移-20% */
    35% {transform: translate(-20%,0);}

    40% {transform: translate(-40%,0);}
    55% {transform: translate(-40%,0);}

    60% {transform: translate(-60%,0);}
    75% {transform: translate(-60%,0);}

    80% {transform: translate(-80%,0);}
    95% {transform: translate(-80%,0);}

    100% {transform: translate(0,0);} /* 复位到第一张图片 */
  }

  </style>


