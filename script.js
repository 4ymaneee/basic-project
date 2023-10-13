let input = document.querySelector("input");
let SendBtn = document.querySelector("button");
let output = document.querySelector("#output");
let isSubmited = false;

var value;
input.addEventListener("blur", function () {
  value = input.value;
  document.querySelector("h3").innerHTML = value;
});

SendBtn.addEventListener("click", function () {
  if(!isSubmited){
    let child = output.firstChild
    child.remove()
    isSubmited = true
  }


  let textNode = document.createTextNode(value);
  output.appendChild(textNode);

  let breakLine = document.createElement("br");
  output.appendChild(breakLine);

  let box2 = document.querySelector(".box2");
  box2.appendChild(output);

});

function hoverIn() {
  if (isSubmited) {
    output.style.backgroundColor = "green";
  } else {
    output.style.backgroundColor = "red";
  }
}
function hoverOut() {
  output.style.backgroundColor = "";
}
