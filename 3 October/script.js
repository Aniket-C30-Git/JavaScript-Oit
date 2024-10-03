
let inputBox = document.querySelector("#name")
let hero = document.querySelector("#hero")

inputBox.addEventListener("input",function(){
    console.log(this.value);
    Name = this.value
    hero.textContent = `Input: ${this.value}`;
})
// inputBox.addEventListener("focus",function(){
//     console.log("focused");
// })

// inputBox.addEventListener("blur",function(){
//     console.log("blured");
// })

// inputBox.addEventListener("change",function(){
//     console.log(this.value);
// })

let form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault
    console.log(submit);
})
