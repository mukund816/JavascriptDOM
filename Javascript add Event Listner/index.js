// Idea:- Only use ID selector
document.getElementById("n").onclick = function abs(){
    this.style.background = "green";
}
document.getElementById("n").addEventListener("click", function abc(){
    this.style.background ="red";
})
//idea:- Use of addEventListner
document.getElementById("a").addEventListener("click", function (){
    this.style.background = "red";
})
//Optimize:- One Element with differnt DOM technique
document.querySelector("#a").addEventListener("mouseover", function(){
    this.style.border = "1px solid red";
})

document.getElementById("a").addEventListener("mouseover", function(){
    this.style.cursor ="pointer"
})

//Use of removeEvent

document.getElementById("n").addEventListener("click", function (){
    this.removeEventListener('click', abc);
})
// It is not working
document.getElementById("n").addEventListener("click", abc1());
function abc1(){
document.getElementById("n").removeEventListener("click", abc())
}