// Use of useCapture method.

document.getElementById("b").addEventListener("click", function (){
    alert("This is black");
}, true)
document.getElementById("c").addEventListener("click", function(){
    alert("this is not black")
}, true)