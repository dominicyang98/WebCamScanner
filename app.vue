<template>
    <div id="header" style="background-color:lightblue; text-align:center ;">QR CODE SCANNER TEST</div>
    <div id="reader" width="400px"></div>
    <div>
        <input v-model="inputID" type="text" />
        <button @click="manuallysetID">Confirm</button>
    </div>
    <div id="result" style="background-color:lightblue; text-align:center ;">
        <p>Item found:</p>
        <ul>
            <li v-if="foundItem">{{ foundItem.id }}: {{ foundItem.Category }} - {{ foundItem.Manufacturer }} - Age: {{ foundItem.age }} months</li>
            <li v-else>No item found</li>
        </ul>
    </div>
</template>



<script>
import jsonData from './inventory-details.json';
import {Html5QrcodeScanner} from "html5-qrcode";



export default {
    data() {
        return {
            inputID: '',
            searchID: '',
            foundItem: null
        };
    },
    created() {
        const searchId = this.getSearchId();
        this.foundItem = jsonData.data.find(item => item.id === searchId);
    },

    methods: {
        getSearchId() {
            this.searchID = this.inputID;
            // 假设这里是某个函数返回的searchId值
            return this.searchID;
            console.log(this.searchID)
        }
    }
};

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    if (!consoleOutput[message]) {
        message = decodedResult;
        consoleOutput[message] = true;
        console.log(message)
        //console.log(`Code matched = ${decodedText}`, message);
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