function newElement() {
  var inputValue = document.getElementById("task").value;

  if (inputValue === "") {
    hideToast("Listeye bos eklmeme yapamazsiniz");
    return;
  }

  var ul = document.getElementById("list");
  var li = document.createElement("li");
  var closeButton = document.createElement("span");
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  ul.appendChild(li);
 
  // li ye tiklandiginda cizgi ekleme
  li.addEventListener("click", function () {
    if (this.style.textDecoration === "line-through") {
      this.style.textDecoration = "none";
    this.style.backgroundColor = "transparent";
    } else {
      this.style.textDecoration = "line-through";
     this.style.backgroundColor = "blue";
    }
  });



  closeButton.innerHTML = "&times;";
  closeButton.className = "close-button";
  li.appendChild(closeButton);

  closeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    ul.removeChild(li);
  });

 

  document.getElementById("task").value = "";
}

function hideToast() {
  $(".toast").toast("show");
}
