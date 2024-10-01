let box = document.querySelector(".container")

//Applied all properties in Css by using Js...
//Method - 01:
// box.style.backgroundColor = "orange"// Applied a color in html content
// box.style.padding = "30px"
// box.style.fontWeight = "700"
// box.style.text
//===========================================================================
//Method - 02:
// box.style.cssText = `
// background-Color:yellow;
// padding:40px;
// font-size:20px;
// font-weight:700;` 

box.classList.add("my-style");
//box.classList.replace("my-style","my-new-style")
box.classList.toggle("my-new-style")
box.classList.remove("my-style")