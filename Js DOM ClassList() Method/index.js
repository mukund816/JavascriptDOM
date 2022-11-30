// Use of ClassList -> .add()
document.querySelector(".name").addEventListener("click", function(){
this.classList.add("name2")
this.classList.add("name3")
})

//Use of ClassList -> .remove()
document.querySelector(".name").addEventListener("click", function(){
    this.classList.remove("name2")
    })

// Use of ClassList() -> length
// Method - 1 
var a = document.querySelector(".name").addEventListener("click", function(){
    console.log(this.classList.length);
})
// Method - 2
var a = document.querySelector(".name").addEventListener("click", function(){
    var a = this.classList;
    console.log(a);
})
// Use of ClassList() -> Toggle

document.querySelector(".a").addEventListener("click",function(){
    this.classList.toggle("a2")
})

// Use of ClassList() -> item(index)

document.querySelector(".a").addEventListener("click" , function(){
    var b = this.classList.item(1);
    console.log(b)
}) 

// Use of ClassList() -> contains (Class)

document.querySelector(".a").addEventListener("click" , function(){
    var c = this.classList.contains("b");
    console.log(c)
}) 