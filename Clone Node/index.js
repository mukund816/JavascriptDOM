var target = document.querySelector(".list1");
var Add = target.children[0].cloneNode(true);
console.log(Add)

document.querySelector(".list2").appendChild(Add);
document.querySelector(".test").appendChild(Add);

var target2 = document.querySelector(".list1");
var add_target = target2.children[1].cloneNode(true);

document.querySelector(".test").appendChild(add_target);
