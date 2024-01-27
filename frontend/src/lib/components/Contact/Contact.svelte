<script>
    import ContactBar from "./ContactBar.svelte";


</script>

<div id="ContactContainer">

    <div id="QRpart">
    <img id="QRcode" src="QRcode.png" alt="QRcode" /> 
    <p>Scan the QR Code!</p>
    </div>

    <div id="contactBar">
     <ContactBar />   
    </div>

    <div id="moreSuggestion">
      <p>More suggestions ?</p>
    <img src="send.svg" alt="moreSuggestion" />  
    </div>
</div>
