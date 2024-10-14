//Thread in Multithreading :-
//thread is lightweight smallet unit of program execution
// which controls the program operation under single sequence
// to perform multitasking in system.
//-------------------------------------------------

// Ex.1) snynchronous function:
// console.log("line 1 executed");
// console.log("line 2 executed");
// function execute(){
//     console.log("line 3 executed");
// }
// execute();
// console.log("line 5 executed");
// console.log("line 6 executed");


//-------------------------------------------------

//Ex.2) ashynchronous functon :- setTimeout(),setInterval(),Promises(),fetch(),HTTPS Request/Responce.
// console.log("create connection");
// query = "select * form student";
// console.log("sent query",query);

// let data = function(){
//     console.log(data);
// }
//--------------------------------------------------------
console.log("line 1 executed");
console.log("line 2 executed");
console.log("line 3 executed");
function execute(){
    console.log("line 4 executed");
}
setTimeout(execute,5000);
console.log("line 5 executed");
console.log("line 6 executed");