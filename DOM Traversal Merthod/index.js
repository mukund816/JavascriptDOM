// Use of ParentElement and Parent Node
var a = document.querySelector(".a1").parentElement;
console.log(a);
var b = document.querySelector(".a1").parentNode;
console.log(b);

document.querySelector(".a1").parentElement.style.background = "Black";

// Use of Children Node and child Element

var c = document.querySelector(".parent").childNodes;
console.log(c);

document.querySelector(".parent").childNodes[1].innerHTML = "Hi";

var d = document.querySelector(".parent").children;
console.log(d);

document.querySelector(".parent").children[1].innerHTML = "Mom!";

// Use of first child & first Element Child, last Child & last Element Node
var e = document.querySelector(".parent").firstChild;
console.log(e);
var f = document.querySelector(".parent").lastChild;
console.log(f);
var g = document.querySelector(".parent").firstElementChild;
console.log(g);
var h = document.querySelector(".parent").lastElementChild;
console.log(h);

// Last element Child
document.querySelector(".parent").lastElementChild.style.background = 
"Yellow";
// First Element child
document.querySelector(".parent").firstElementChild.style.background = "blue";

/*
Use of next Sibling Element, next Sibling, previous Element Sibling, previous Sibling
*/
var i = document.querySelector(".a3").nextElementSibling;
console.log(i);
var j = document.querySelector(".a3").nextSibling; //Fix : Never use
console.log(j);
var k = document.querySelector(".a3").previousElementSibling;
console.log(k);
var l = document.querySelector(".a3").previousSibling; //Fix : Never use
console.log(l);

// Use of Next Sibling Element and Previous SIbling Element

document.querySelector(".a3").nextElementSibling.style.background = "#782382";
document.querySelector(".a3").previousElementSibling.style.background = "skyblue";