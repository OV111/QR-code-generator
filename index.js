const qrType = document.getElementById("qrType");
const qrInput = document.getElementById("qrInput");
const imageSize = document.getElementById("imageSize");

const generateBtn = document.getElementById("GenerateBtn");
const qrContainer = document.getElementById("QRimage");
const downloadBtn = document.getElementById("DownloadBtn");


const generateQR = () => {
    const typeData = qrType.value;             // the type of qr
    const inputData = qrInput.value.trim();    // what we write in input field
    const imageSizeData = imageSize.value;     // size of image
    let data;


    
    
    if(typeData !== "choose") {
        if(typeData === "url") {
            data = `https://${inputData}`;             
        } else if(typeData === "phone") {
            data = `tel:${inputData}`;
        } else if(typeData === "email") {
            data = `mailto:${inputData}`;
        } else if(typeData === "wifi") {
            data = `WIFI:T:WPA;S:${inputData}`;
        } else if(typeData === "gps") {
            let x = inputData.split(",");
            if(x.length === 2) {
                let latitude = x[0].trim();
                let longitude = x[1].trim();
                data = `geo:${latitude},${longitude}`;
            }
        } else {
            alert("Pls enter Valid Type!");
        }
    } else {
        alert("Pls Choose Type!");
        return;
    }
    if(inputData === "") {
        alert("Pls Enter Data!");
        return;
    }
    if(imageSizeData === "size") {
        alert("Pls Enter image size!");
        return;
    }
    
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text: data,
        width: imageSizeData,
        height: imageSizeData,
    });
    
    
  

    qrInput.value = "";
}   

generateBtn.addEventListener("click", generateQR);




const downloadQR = () => {          
    
    let canvas = document.querySelector("#QRimage canvas");
    let saveDat = canvas.toDataURL("image/png");
    // console.log(saveDat)
    const link = document.createElement("a");
    link.href = saveDat;
    link.download = "qr_code.png";
    link.click();
}
downloadBtn.addEventListener("click",downloadQR);

// downloadBtn.addEventListener("click",() => {
//     downloadQR;
// });

//! change all function with arrow f           and add show/hide spinner like loading 