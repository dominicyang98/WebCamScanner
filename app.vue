<template>
  <div id="header" style="background-color:lightblue; text-align:center ;">QR CODE SCANNER TEST</div>
  <div id="reader" width="600px"></div>

</template>

<script>

  const consoleOutput = window.consoleOutput || {};

  var message = 'This is a unique message.';



  export default {
      mounted(){
          const script = document.createElement('script')
          script.src = './clientConsole.js'
          document.head.appendChild(script)
      }
  }
  // To use Html5QrcodeScanner (more info below)
  import {Html5QrcodeScanner} from "html5-qrcode";
 // var resultContainer = document.getElementById('reader')

  // To use Html5Qrcode (more info below)
  // import {Html5Qrcode} from "html5-qrcode";


  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
      if (!consoleOutput[message]){
          message = decodedResult;
          consoleOutput[message] = true;
          console.log(`Code matched = ${decodedText}`, decodedResult);
      }
  }

  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }

  if (process.client){

    let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

  }

</script>