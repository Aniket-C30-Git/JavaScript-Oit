// function add(){
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

//Immediately Invoked Function Expression:
(function add(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
})(2,4,7,9);