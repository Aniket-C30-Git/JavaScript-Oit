//While loop
/*
syntax:

 while(condition){
     code to be executed
 }

*/
//Ex.1)
// let i = 0;
// while(i<=10){
//     i++;
//     console.log(i);
// }

//Ex.2)
// let i = 0;
//  firstloop :while(i <= 20){
//     i++
//     console.log(i);
//     if(i == 5){
//         break firstloop;
//     }
// }

//Ex.3)
// let i = 0;
//  firstloop :while(i <= 20){
//     i++
//     if(i == 5){
//         continue firstloop;
//     }
//     console.log(i);
// }

//Ex.4)
// let i = 1;
// let count = 1;
// while(i <= 5){
//     let j = 1;
//     while(j <= 5){
//         console.log(count++);
//         j++;
//     }
//     i++;
// }

//Ex.5)
// let i = 1;
// let count = 1;
// while(i <= 5){
//     let j = 1;
//     for(let j = 1; j <= 5; j++){
//         console.log(count++);
//     }

//     i++;
// }

//Ex.6)
// let i = 1;
// let count = 1;
//     for(let i = 1; i <= 5; i++){
//         let j = 1;
//         while(j <= 5){
//             console.log(count++);
//             j++;
//         }
//     }

//Ex.7)
// let a;
// a = Number(prompt("enter your number:"))

//Ex.7.1)
// num = Math.floor(Math.random() * 100)+ 1;
// flag = 1;
// count = 0;

// while(flag == 1){
//     count++;
//     guess = Number(prompt("Enter your Number: "));
//     if(guess === num){
//         console.log("You Win..!");
//         flag = 0; 
//     }else if(guess > num){
//         console.log("guess small number than:" + guess);
//     }else{
//         console.log("guess big number than:" + guess);
//     }
// }
// console.log("You Take",count,"guesses");
// document.write("Win")

//Ex.8) do while loop
// let i = 1;
// count = 1;
// for(let i = 1; i <= 5; i++){
//     let j = 1;
//     do{
//         console.log(count++);
//         j++;
//     }while(j <= 5)
// }
// let i = 1;
// let count = 1;
// while(i <= 5){
//     let j = 1;
//     for(let j = 1; j <= 5; j++){
//         console.log(count++);
//     }

//     i++;
// }
//Ex.9)
let i = 1;
count = 1;
do{
    let j = 1;
    for(let j = 1; j <= 5; j++){
        console.log(count++);
    }
}while(i <= 5)
