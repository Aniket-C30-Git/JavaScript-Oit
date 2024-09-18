//Name Function:(=>  Arrow).

// function ADD(a, b){
//     return a + b;
// };
//--------------------------------------------

//Anonymous Function:-
//There is No any name to function 
// var add = function (a,b){
//     return a + b;
// };
// var abc = add;
//--------------------------------------------

//Arrow Function:

// var Add = (a,b) =>{
//     return a + b;
// };

// let Avg = (a, b, c) =>{
//     return (a + b + c) / 3;
// };

let AVG = (a, b, c) => (a + b + c) / 3;

let Add = (a,b) => a + b;

let Squ = a => a*a;

let IsEven = a => a % 2 == 0;

let Isodd = a => a % 2 !== 0;

let Max = (a,b) => (a == b)? "Both are equal" :(a > b)? a:b; 

let Multi =  (a, b = 1, c = 1) => a*b*c;

let SayHo = () => console.log("Ho");


