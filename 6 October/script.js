window.addEventListener("scroll",function(){
        console.log("scroll zala");
        console.log(this.scrolly);
        if(this.scrollY>1000){
            document.body.style.backgroundColor = "aqua";  
        }
        else{
            document.body.style.backgroundColor ="white";
        }
    });

// //-------------------------------------------



// window.addEventListener("wheel",function(event){
//         console.log("wheel firla");
//         console.log(event.deltaY);
//         if(event.deltaY > 0){
//             document.body.style.backgroundColor = "aqua";
//         }
//         else{
//             document.body.style.backgroundColor = "white";
//         }
//     });

// //----------------------------------------------



// let ball = document.querySelector(".ball")
// window.addEventListener("mousemove",function(event){
//         let x = event.clientX;
//         let y = event.clientY;
//         console.log("mouse palala");
//         console.log($,{x} , $,{y});
//         ball.style.top = y + "px";
//         ball.style.left = x + "px";
//        ball.style.backgroundColor =rgb($,{x , y}, $,{x},$,{y});
//     }
// );


//--------------------------------------------


// let body = document.body;
// let container = document.querySelector(".container");
// let link = document.querySelector("a");

// body.addEventListener("click",function () {
//     console.log("body clicked");
// },false);

// container.addEventListener("click",function () {
//     console.log("container clicked");
//     p.stopPropagation
// },true);


// link.addEventListener("click",function () {
//     console.log("link clicked");
//     e.stopPropagation
//     e.preventDefault
// },true);