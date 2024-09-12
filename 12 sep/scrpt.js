// loops in Javascript:
// Standard for loop
// while loop
// do loop
//---------------------------------------------------------------------------------------
// Ex.1) Print 1 to 100 ?
//--->
// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }
//---------------------------------------------------------------------------------------
// Ex.2) Print table of 5 ?
//--->
// var n = 5;
// for(let i = 1; i <= 10; i++){
//     console.log(n +" x "+ i + " = "+ n*i)
// }
//---------------------------------------------------------------------------------------
// Ex.3) learn Break ?
//--->
//  loop1 :for(let i = 1; i <= 10; i++){
//     console.log(i);
//     if(i == 5){
//         break loop1;// break the loop1 because of name decalred to the loop.
//     }
// }
//---------------------------------------------------------------------------------------
// Ex.4) learn Continue...?
//--->
// loop1 :for(let i = 0; i <= 10; i++){
//     if(i == 5){
//         continue loop1;
//     }
//     console.log(i);
// }
//---------------------------------------------------------------------------------------
//Ex.5) Print all even numbers which is divisible by 6 from 20 to 50.?
//--->
// for(i = 20; i <= 50; i++){
//     if(i % 6 == 0){
//         console.log(i);
//     }
// }
//---------------------------------------------------------------------------------------
//Ex.6) Print all numbers between 1 to 500 which are divisible by 4 as well as 7 ..?
//--->

// for(i = 1;i <= 500; i++){
//     if(i % 4 == 0 && i % 7 == 0){
//         console.log(i);
//     }
// }
//---------------------------------------------------------------------------------------
// Ex.7) print number is Prime or not..?
//--->
// var flag = 1;
// var n = 37;
// for(let i = 2; i<= n / 2; i++){
//     if(n % i == 0){
//         flag = 0 
//     }
// }
// if(flag === 1){
//     console.log("Number is Prime ");
// }
// else{
//     console.log("Number is not Prime");
// }
//---------------------------------------------------------------------------------------
//Ex.8) print 1 to 25 using nested for..? 
//--->
// let count = 1;
// for(i = 1; i <= 25; i++){
//     for(j = 1; j <= 25; j++){ 
//         console.log(count++);
//     }
// }
//---------------------------------------------------------------------------------------
//Ex.9)Print Pattern ?
//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1
//--->
// for(let i = 1; i <= 5; i++){
//     let pattern = "";
//     for(let j = 1; j <= 5-i+1; j++){
//         pattern += j+" ";
//     }
//     console.log(pattern);
// }
//---------------------------------------------------------------------------------------
//Ex.10)Accept a password from user and give only 3 chance to unlock device:
//--->
// var pass;
// for(let i = 1;i <= 3;i++){
//     var pass = prompt("Enter pass :")
//     if(pass === "1234"){
//         console.log("Device unlocked")
//         break
//     }
// }
