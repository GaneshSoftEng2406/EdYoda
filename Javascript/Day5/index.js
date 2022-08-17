let a; //undefined
a=1234;
console.log(a, typeof a)
/* a= a + "gargi" // "1234"+"gargi" //number --> string
console.log(a, typeof a) //1234gargi string */

/* a= a * 5;
console.log(a, typeof a) */

a= a - 5;
console.log(a, typeof a)  //NaN number

let myName=parseInt("100gargi")
console.log(`myName ${myName}`)
let myName1=parseInt("gargi100gargi")
console.log(`myName1 ${myName1}`)
let myName11=parseInt(11.11)
console.log(`myName11 ${myName11}`)

let myName3=parseFloat("100")
console.log(`myName3 ${myName3}`)
let myName4=parseFloat("gargi100gargi")
console.log(`myName4 ${myName4}`)
let myName5=parseFloat("111.12")
console.log(`myName5 ${myName5}`)
let myName6=parseInt("111.12gargi")
console.log(`myName6 ${myName6}`)

let lalith= 100;
let lalithString= lalith.toString();

console.log(`lalithString ${ typeof lalithString}`)


//Implicit and Explicit Coercion
//Implicit Cocercion - javascript does the type conversion automatically

let num= 11.49; 
let num1=num.toFixed(); // it converts a number to a string 
console.log(`num1 ${ typeof num1}`)

console.log(`'11' + 11 --->  ${ '11' + 11}`)  // no got converted into string
console.log(`'11' - 11 --->  ${ '11' - 11}`)  // string got converted into a number
console.log(`'11' * 11 --->  ${ '11' * 11}`) 
console.log(`null == 0 --->  ${ null == 0}`) 
console.log(`null == 1 --->  ${ null == 1}`) 
console.log(`null === 0 --->  ${ null === 0}`) 
console.log(`null === 1 --->  ${ null === 1}`) 
console.log(`1 == 1 --->  ${ 1 == 1}`) 

/* const num99=prompt("can u enter 99?")// string
console.log(`num99 --->  ${ typeof num99}`) 
const num100= 100; //number
const letsAdd=num99+num100;  // string + number // concat
console.log(`letsAdd --->  ${letsAdd}`) //string
console.log(`typeof letsAdd --->  ${typeof letsAdd}`)  */

//explicit coercion - Developers do the type conversion

/* const num99=Number(prompt("can u enter 99?"))// number '99' => 99
console.log(`num99 --->  ${ typeof num99}`) 
const num100= 100; //number
const letsAdd=num99+num100;  // number + number  // '99' + 100
console.log(`letsAdd --->  ${letsAdd}`) //number
console.log(`typeof letsAdd --->  ${typeof letsAdd}`)  */

console.log(` String(99) --->  ${String(99)}`) 
console.log(` typeof String(99) --->  ${ typeof String(99)}`) 

//Number
//String
//Boolean

console.log('99'== String(99)) 
console.log(99 == String(99)) //true
console.log(99 === String(99)) //false


console.log(Boolean(-15)) 
console.log(Boolean(false) == true) 


//falsy
/* console.log(Boolean(0)) 
console.log(Boolean(null)) 
console.log(Boolean('')) 
console.log(Boolean(undefined)) 
console.log(Boolean(NaN))  */

console.log(String(25-true))
console.log(Number(undefined))
console.log(String(true+undefined))
console.log(2 + "2" - 2)
console.log(2 -2 + "2" )

console.log(null == 1) // false
console.log(null == 0) // false
console.log(null == null) //true
console.log(null == undefined) //true

//programs

//wap to convert C to F and F to C

/* F=(C * 1.8) + 32;
C=(F- 32) / 1.8; */

/* const C= prompt("Enter ur body temparature in Celsius")
const F=(C * 1.8) + 32;
console.log(F)
 */
//wap to check a nois even or odd

const numEvenOdd= parseInt(prompt("Enter a number"))
if(numEvenOdd % 2== 0){
    console.log(`${numEvenOdd} is an even no`)
} else{
    console.log(`${numEvenOdd} is an odd no`)
}


// 11 22 33

const n1=parseInt(prompt("Enter a number"))
const n2=parseInt(prompt("Enter a number"))
const n3=parseInt(prompt("Enter a number"))
let l;
if(n1>= n2 && n1>=n3 ){
    l=n1;
}else if (n2>=n1 && n2>=n3){
    l=n2;
}else{
    l=n3;
}
console.log(`the largest among ${n1}, ${n2} and ${n3} is ${l}`)



















