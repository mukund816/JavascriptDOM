function replace(){
var newElement = document.createElement("li");
var newText = document.createTextNode("Replace");

newElement.appendChild(newText);

var target = document.getElementById("test");
var oldElement = target.children[1];
target.replaceChild(newElement, oldElement);
}

function removeElement(){
    var target = document.getElementById("test");
    var oldElement = target.children[0];
target.removeChild(oldElement);
}