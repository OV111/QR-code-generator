const qrType = document.getElementById("qrType");
const qrInput = document.getElementById("qrInput");
const imageSize = document.getElementById("imageSize");
const generateBtn = document.getElementById("GenerateBtn");
const qrContainer = document.getElementById("QRimage");
const downloadBtn = document.getElementById("DownloadBtn");
const marginMap = {
    "200": "10px 600px 0px",
    "300": "10px 550px 0px",
    "400": "30px 500px 0px",
    "500": "30px 450px 0px",
};

const generateQR = () => {
    const typeData = qrType.value;
    const inputData = qrInput.value.trim();
    const imageSizeData = imageSize.value;
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
            alert("Pls enter Valid QR Type!");
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
    qrContainer.style.margin = marginMap[imageSizeData] || qrContainer.style.margin;
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text: data,
        width: imageSizeData,
        height: imageSizeData,
    });
    qrInput.value = "";
}   

const downloadQR = () => {          
    const canvas = document.querySelector("#QRimage canvas");
    if(!canvas) {alert("Pls Generate QR Code First!"); return; };
    const saveDat = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = saveDat;
    link.download = "qr_code.png";
    link.click();
    setTimeout(() => {
        qrContainer.innerHTML = "";
    },3000);
}

generateBtn.addEventListener("click", generateQR);
downloadBtn.addEventListener("click",downloadQR);
//! and add show/hide spinner like loading