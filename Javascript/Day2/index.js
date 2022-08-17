console.log("Hello Guysss!!!")


let myName="Gargi";
console.log("myName")
console.log(myName)
/* console.log(myname)  JS is case - sensative*/
/* variable name can't start with a number */
/* let 1myName="gargi"  // wrong */
/* variable name can start with _ , $ */
/* let _myName="gargi"
let $myName="gargi"
 */
/* let my name= "g" // wrong //can't have spcaes */

//primitive datatypes-  a datatype that refers to a single value
/* number , string , boolean , null , undefined */

let myChoco= 50;
myChoco=70
console.log(myChoco)


/* NaN nd isNaN() */

/* NaN is  a property of the global object */
/* it is representing a value which is not a number */

/* Gargi - false
11 - true */
/* ___Gargi_____ is not a number  */ //true statement
let myNamee= isNaN("Gargi") // true
let myDob= isNaN(11) //false

// isNaN() it will convert the value to a number
let myTrue=isNaN(true) // 1 - false
let myFalse=isNaN(false) // 0 - false
let myNull=isNaN(null) // 0 - false
let myUndefined= isNaN(undefined) //  true



/* console.log(myNamee)
console.log(myDob)
console.log(myTrue)
console.log(myFalse)
console.log(myNull)
console.log(myUndefined) */
//undefined - the variable is declared but it has no vslue declared to it
let abc;
console.log(abc)

//null // it has no value ~~~ the null value
let xyz= null;
console.log(xyz)


/* operator and operands */

console.log(123+123)
console.log(123-23)
console.log(123*3)
console.log(123/4)
console.log(123%4)

/* assignment */
/* assigning the value to the left operand */
let myMarks = 90;
let myNewMarks=100;
let myAge='90';
let mySchool="abc";

/*  == vs ===*/
console.log(typeof(myMarks))
console.log(typeof(myAge))
console.log(typeof(mySchool))

console.log(myMarks==myAge) /* checks only the values */
console.log(myMarks===myAge) /* not only the values but also checks for the datatype*/

/* comparison */

console.log(myMarks==myNewMarks) 
console.log(myMarks!=myNewMarks) 
console.log(myMarks>=myNewMarks) 
console.log(myMarks<=myNewMarks) 



















