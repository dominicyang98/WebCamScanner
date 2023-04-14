export default () => {
    if (process.client) {
        console._log = console.log;
        console.log = function (message) {
            console._log(message);
            const para = document.createElement("p");
            para.textContent = message;
            document.body.appendChild(para);
        }
    }
}
