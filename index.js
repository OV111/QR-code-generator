const qrType = document.getElementById("qrType");
const qrInput = document.getElementById("qrInput");
const imageSize = document.getElementById("imageSize");

const generateBtn = document.getElementById("GenerateBtn");
const qrContainer = document.getElementById("QRimage");
const downloadBtn = document.getElementById("DownloadBtn");


const generateQR = () => {
    const typeData = qrType.value;             // the type of qr
    const inputData = qrInput.value.trim();    // what we write input field
    const imageSizeData = imageSize.value;     // size of image
    let data;
    if(typeData !== "choose") {                       //! need to think about input validation
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
                let latitude = x[0];
                let longitude = x[1];
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


//! change all function with arrow f           and add show/hide spinner like loading 