function myFunction(){
var newText = document.createTextNode("this is Append Child");
console.log(newText);

var newElement = document.createElement("h1");
console.log(newElement);

// var newComment = document.createComment("This is a comment");


newElement.appendChild(newText);
document.querySelector(".test").appendChild(newElement);

// To generate comment
var newComment = document.createComment("This is a comment");
console.log(newComment);
document.querySelector(".test").appendChild(newComment);

}

// function createComment(){
//     var newComment = document.createComment("This is a comment");
//     document.querySelector(".test").appendChild(newComment);
// }

function myFunction1(){
//  var newText1 = document.createTextNode("this is a text");
// console.log(newText1);
// var newElement1 = document.createElement("h3");
// console.log(newElement1);
// newElement1.appendChild(newText1);
// var target = document.querySelector(".test");
// target.insertBefore(newElement1, target.childNodes[0]);

var ne = document.createElement("h1");
var nt = document.createTextNode("This is Insert Before");
ne.appendChild(nt);
var target = document.querySelector(".test");
target.insertBefore(ne, target.childNodes[0]);
}

// Insert Adjacent Method

  //optimize

  function insertAdjecentElement() {
    var newE = document.createElement("h2");
    var newText = document.createTextNode("This is insertAdjecentElement- beforebegin");
    newE.appendChild(newText);
    var target1 = document.querySelector(".test");
    target1.insertAdjacentElement("beforebegin", newE)
  }
  
  function insertAdjecentElement1() {
    var newE = document.createElement("h2");
    var newText = document.createTextNode("This is insertAdjecentElement- AfterBegin");
    newE.appendChild(newText);
    var target1 = document.querySelector(".test");
    target1.insertAdjacentElement("afterbegin", newE)
  }

  function insertHTML(){
    var target = document.querySelector(".test");
    var el = "<h1>This is insertAdjacentHTML </h1>";
    target.insertAdjacentHTML("afterend", el)
  }

  function insert() {
    var target = document.querySelector(".test");
    var el = "<h1>This is insertAdjacentHTML </h1>";
    target.insertAdjacentHTML("afterbegin", el)
  }

  function text() {
    var target = document.querySelector(".test");
    var et = "This is a simple Text.";
    target.insertAdjacentText("beforeend", et)
  }