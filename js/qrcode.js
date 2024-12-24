let qrCodeURL = localStorage.getItem("qrCodeURL");

if (qrCodeURL) {
    let qrCode = new QRCode(document.getElementById("qr-code"), {
        width: 225, height: 225,
    })

    qrCode.makeCode(qrCodeURL)
}

document.getElementById("download-button").addEventListener("click", () => {
    const qrCanvas = document.getElementById("qr-code");

    html2canvas(qrCanvas, {
        backgroundColor: null,
    }).then((canvas) => {
        const qrImageURL = canvas.toDataURL("image/png"); // Конвертируем QR-код в изображение
        const downloadLink = document.createElement("a");
        downloadLink.href = qrImageURL;
        downloadLink.download = "qr-code.png"; // Указываем имя файла
        downloadLink.click(); // Активируем скачивание
    });
});

document.getElementById("share-button").addEventListener("click", () => {
    const qrCodeElement = document.getElementById("qr-code");

    html2canvas(qrCodeElement, {
        backgroundColor: null, // Сохраняем прозрачный фон
    }).then((canvas) => {
        canvas.toBlob((blob) => {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]).then(() => {
                showAndHideElement("copy-information", 2500)
            }).catch((err) => {
                console.error("Ошибка копирования:", err);
            });
        });
    });
});

function showAndHideElement(elementId, duration) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.error(`Элемент с ID "${elementId}" не найден.`);
        return;
    }

    element.style.right = "15px";

    setTimeout(() => {
        element.style.right = "-190px";
    }, duration);
}

document.getElementById("logo").addEventListener("click", () => {
    window.location.href = "index.html";
})





