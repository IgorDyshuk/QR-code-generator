function makeQRCode() {
  var url = document.getElementById("url-input");

  if (!url.value) {
    url.placeholder = "Please enter a URL";
    url.classList.add("red-placeholder");
    document.querySelector(".url-input").style.border = "3px solid red";
    return;
  }

  localStorage.setItem('qrCodeURL', url.value);

  window.location.href = "qr-code.html";

}

document.getElementById("url-submit").addEventListener("click", function () {
  makeQRCode();
})

document.getElementById("url-input").addEventListener("focus", function () {
  this.classList.remove("red-placeholder");
  document.querySelector(".url-input").style.border = "3px solid var(--color-blue)";
});
