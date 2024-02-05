<script>
    import ContactBar from "./ContactBar.svelte";


</script>

<div id="ContactContainer">

    <div id="QRpart">
    <img id="QRcode" src="/src/lib/image/QRcode.png" alt="QRcode" /> 
    <p>Scan the QR Code!</p>
    </div>

    <div id="contactBar">
     <ContactBar />   
    </div>

    <div id="moreSuggestion">
      <p>More suggestions ?</p>
    <img src="/src/lib/image/send.svg" alt="moreSuggestion" />  
    </div>
</div>
