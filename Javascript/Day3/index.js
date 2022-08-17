//postfix and prefix
//x++ ++x
// x++ ~ x=x+1

//postfix
let myScore= 90; //90 +1
let myLatestScore = myScore++ + 10;  // 90 + 10  ----> 90 + 1
//1. firt u gotta evaluate the expression with the original value
//2. the value of the variable is incremented
console.log("myLatestScore---" + myLatestScore)
console.log("myScore---" + myScore)


//prefix
let myScore1= 90; //90 +1
let myLatestScore1 = ++myScore1 + 10;  // 90+1-- > 91      91 + 10 ==101
//1. firt the value of the variable is incremented
//2. evaluate the expression with the updated value
console.log("myLatestScore1---" + myLatestScore1)
console.log("myScore1---" + myScore1)


//logical operator

let A= 100;
let B= 200;
let C= 300;
//logical AND
/* console.log( A>B && B<0) // false && false 0 && 0
console.log( A>B && B>0) // false && true 0 && 1
console.log( A<B && B<0) // true && false 1 && 0
console.log( A<B && B>0) // true && true 1 && 1 */


//logical OR
console.log( A>B || B<0) // false || false 0 || 0
console.log( A>B || B>0) // false || true 0 || 1
console.log( A<B || B<0) // true || false 1 || 0
console.log( A<B || B>0) // true || true 1 || 1
// !0 = 1
// !1= 0
console.log( !(A<B) || (B>0) && (C>0)) // !1 || 1 --> 0 || 1 


//string operator

let myName="Gargi"
let mySurname="Chakraborty"

console.log(myName + " " +  mySurname)
console.log(myName -  mySurname)



// length is a property

let myCar= "BMW"
console.log("length of string"+myCar.length)
//string methods
let myCar1= "Lamborghini"
console.log("length of string"+myCar1.length)
console.log("uppercase --> "+myCar1.toUpperCase())
console.log("uppercase --> "+myCar1.toLowerCase())


//extract a part of the string
//slice(starting position, ending position)
let slicedMyCar1= myCar1.slice(0,9)  //0- 8
console.log("slicedMyCar1 --> " + slicedMyCar1)

let charLambo= myCar1.charAt(0)
console.log("charLambo --> " + charLambo)
//substring()
let subMyCar1= myCar1.substring(0,9)  //0- 8
console.log("subMyCar1 --> " + subMyCar1)

let myText="I Love playing gGuitar"
console.log(myText.length)
console.log(myText.slice(-10,-6))

//control flow 
/* console.log("yaaay , chutti , I ll not go to school")
console.log("yaaay , chutti , I ll not go to school")
console.log("yaaay , chutti , I ll not go to school")
console.log("yaaay , chutti , I ll not go to school")
console.log("yaaay , chutti , I ll not go to school") */
let myCondition= "raining";
/* if(myCondition.includes("holaaa")){
    console.log("yaaay , chutti , I ll not go to school")
}else{
    console.log("I ll go to school")
} */

//truthy anf falsy
//truthy - 1
//falsy - 0 , "", undefined , null, NaN
if(NaN){
    console.log("yaaay , chutti , I ll not go to school")
}else{
    console.log("I ll go to school")
}














