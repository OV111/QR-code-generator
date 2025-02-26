const qrType = document.getElementById("qrType");
const qrInput = document.getElementById("qrInput");
const imageSize = document.getElementById("imageSize");

const generateBtn = document.getElementById("GenerateBtn");
const qrContainer = document.getElementById("QRimage");
const downloadBtn = document.getElementById("DownloadBtn");



if(qrType) {

}

const generateQR = () => {
        const typeData = qrType.value;
        const inputData = qrInput.value.trim();
        const imageSizeData = imageSize.value;

       const qrcode = new QRCode(qrContainer,{
            text: `https://` + inputData,
            width:imageSizeData,
            height:imageSize,
       });
       console.log(qrcode);
        // console.log(typeData,inputData,imageSizeData);
}   


generateBtn.addEventListener("click", generateQR);



//! change all function with arrow f
function check() {
    // check for valid and selected values in input fields!!!
}







function updateInputField() {

}
function updateImageSize() {

}