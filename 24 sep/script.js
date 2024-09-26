// let student = {
//     name: "Aniket",
//     percentage: 82.34,
//     subjects: ["math", "science","English"],
//     ispassed: true,

//     AniketBetaHelloBolo:function(){
//         console.log("Hello Friends..")
//     }
// };

// console.log(student);
// student.percentage=85.59
// console.log(student);

// console.log(student.subjects[2]);

var arr = ["apple","mango","orange"]
console.log(arr.toString());
console.log(arr.join("/"));//apple/mango/orange.
console.log(arr.slice(2));//['orange']  In js the No. always start from [0]

var str = "Apple kiwi orange"
console.log(str.split(" "));//['Apple', 'kiwi', 'orange'].
console.log(str.toLocaleLowerCase());//apple kiwi orange.
console.log(str.toUpperCase());//APPLE KIWI ORANGE.
console.log(str.endsWith("e"));//(true) always ans in true or false.
console.log(str.charAt(9));// (i)  show number in string.
console.log(str.length);// 17 Count total number in a string.