//let box = document.querySelector(".container")
//let list = document.querySelector(".list")

//item add:

//method 01:
// let newElem = document.createElement('li')
// let text = document.createTextNode("test 5")
// newElem.appendChild(text)
// list.appendChild(newElem)
// newElem.id = "c5";
// newElem.className = "listitem5"

//method 02:
// let e = document.createElement('li')
// e.textContent = "test 6";
// list.appendChild(e)
// e.id = "c6";
// e.className = "listitem6";
//==================================================

// add element in before or after in li:-
// let newElem = document.createElement("li")
// newElem.textContent = "test 0";
// let list = document.querySelector(".list")
//let c2 = list.firstElementChild.nextElementSibling
//list.insertBefore(newElem,c2);

// let c = list.lastElementChild
// list.insertBefore(newElem,c)

//==============================================================
// Remove a Elemnt in a list id : 
// let list = document.querySelector(".list")
// let target = list.children[1]
// list.removeChild(target)
//=======================================================
//if true then all properties are 
//if false then only sigle class is shown .

let box = document.querySelector(".container");
let list = document.querySelector(".list");
let copyedlist = list.cloneNode(true)
console.log(copyedlist);
box.appendChild(copyedlist)
