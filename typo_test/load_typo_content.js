var iframe = document.createElement("iframe");
iframe.style.display = "none";
iframe.onload = function () {
  var wrapperElm = iframe.contentDocument.querySelector("#wrapper");
  document.body.innerHTML = wrapperElm.innerHTML;
};
iframe.src = "../typo.css/typo.html";
document.body.appendChild(iframe);
