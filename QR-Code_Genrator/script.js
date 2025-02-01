let userInput = document.getElementById("userInput");
let GenerateBtn = document.getElementById("btn");
let downloadBtn = document.getElementById("downloadBtn");
        
GenerateBtn.addEventListener("click", ()=> {

    if(!userInput.value){
        alert("Please Enter a URL");
        return;
    }
    let qrCode = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value} `;
    let qrbox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");

    qrImage.src = qrCode;
    qrbox.style.display = "flex";
});