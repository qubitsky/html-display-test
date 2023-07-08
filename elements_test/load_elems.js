var iframe = document.createElement("iframe");
iframe.style.display = "none";
iframe.onload = function () {
  var htmlCode = iframe.contentDocument.body.innerHTML;
  document.body.innerHTML = htmlCode;
};
iframe.src = "../html5-test-page/index.html";
document.body.appendChild(iframe);
