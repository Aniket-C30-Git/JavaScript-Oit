// let arr = [2,4,5,6,7];
// let drr = [];

//  foreach function does not return array.
// arr.forEach(function(val){
//     drr.push(val * 2);
// })
// console.log(drr);

// map function always return value  array.
// let drrr = arr.map(function(val){
//     return val * 2;
// })
// console.log(drrr);
//--------------------------------------------------------------
//Ex.2)
// let marks = [82,72,94,74,57,60];

// let UpdatedMarks = marks.map(function(marks){
//     return marks + 2;
// })
// console.log(UpdatedMarks);
//--------------------------------------------------------------
//Ex.3)
//filter function always return a boolean value like true or false formate.
// let numbers = [1,2,3,4,5,6];

// let evenNUmbers = numbers.filter(function(val){
//     return val % 2 == 0;
// });
// console.log(evenNUmbers);
//----------------------------------------------------------------

//Ex.4)
// let marks = [34,56,67,78,89,23,55,32];
// let failedmarks = marks.filter(function(mark){
//     return mark < 35;
// });
// console.log(failedmarks.length);//o/p = 3.
//----------------------------------------------------------------

//Ex.5)
//return the value..
// let numbers = [3,5,6,8,9];

// let sum = numbers.reduce(function(a,b){
//     return a + b;
// });
// console.log(sum);//o/p = 31.
//-----------------------------------------------------

//Ex.6)

let marks = [56,67,78,89,,98,76,65];

let total = marks.reduce(function(a,b){
    return a + b;
});
console.log(total/marks.length);//o/p = 66.125
