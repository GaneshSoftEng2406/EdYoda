//higher order function

//functions that operate on or with other functions

//-- it can accept any other function as an argument
// -- return a function


function sayHellotwice(f){
    f();
    f();
}
function hola(){
    console.log("hola guyssss!!!")
}
function bye(){
    console.log("bye guys :(")
}

/* sayHellotwice(hola) // u r passing hola function inside sayHellotwice function
sayHellotwice(bye) */

function randomChoice(f1,f2){
    let randVal=Math.random() // 0 to 1 
    console.log(randVal)
    if(randVal < 0.5){
        f1();
    }
    else{
        f2();
    }
}
randomChoice(hola,bye)

//callback functions

/* 
a callback function is a function that accepts another function as an argument
*/

/* function congrats(){
    alert("hey ! many congrats to u !!!")
} */

/* setTimeout(congrats, 5000); */

//anonymous function 
/* setTimeout(()=>{
    alert("hey ! many congrats to u again !!!")
}, 5000);
 */

function ram(a,b){
   return a+b;
}
const val=ram(2,3)
console.log(val)


