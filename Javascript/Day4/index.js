let myCondition= "DhoniCenturi";
if(myCondition.includes("Century")){
    console.log("yaaay ,I ll eat Panipuri ")
}else{
    console.log("I ll eat something :(")
}

/* if(condition == true){
    content inside if gets executed
}
else{
    if false then content inside my else block gets executed
} */

//prompt() is a method of the global window object
// it is not part of js
// pls run ur code from a browser or any env where it supports BOM 
//WAP to check if a number is a +ve or a -ve or zero

const num= -15 // immutable
/* let num=0 // mutable */
//const num= parseInt(prompt("Hi user , pls enter a number"))
if(num>0){
    console.log(`${num} is a positive no`)

}else if (num < 0){
    console.log(`${num} is a negative no`)
}
else{
    console.log("zero")
}

const myName="Gargi"
const myPassion="Music"
const sentence= " I'm " + myName + " and My Passion is " + myPassion  /* const sentence= myName + myPassion */
console.log(sentence)

const newSentence= `I'm ${myName} and my passion is ${myPassion} and let's write something more `

console.log(newSentence)


/* const myUserName= window.prompt("Hi, pls enter ur username")
console.log(`Hey! ${myUserName} Good Evening !`) */

//switch case



/* if(weekDay == "monday"){
    console.log("Day1")
}else if (weekDay == "Tuesday"){
    console.log("Day2")
}else if (weekDay == "wednesday"){
    console.log("Day3")
}else if (weekDay == "Thursday"){
    console.log("Day4")
}else if (weekDay == "Friday"){
    console.log("Day5")
}else if (weekDay == "Saturday" || weekDay == "Sunday"){
    console.log("yuhuuuu, Holiday")
}else{
    console.log("default")
}
 */

//switch
const weekDay= "sanday"
switch(weekDay){
    case "monday":
    console.log("Day1")
    break; 
    case "tuesday":
    console.log("Day2")
    break;
    case "wednesday":
    console.log("Day3")
    break;
    case "thursay":
    console.log("Day4")
    break;
    case "friday": 
    console.log("Day5")
    break;
    case "saturday":
    case "sunday":
    console.log("yuhuuuu, Holiday")
    break;
    default:
        console.log("can u pls check ur spelling!")
    
}

//ternary operator
/* (condition)?():() */

const cricketBatWeight= 12;
/* if(cricketBatWeight>15){
    console.log("cricket says I can't play")
}else{
    console.log("cricket says let's play")
} */

const gameRule= (cricketBatWeight > 15) ? "cricket says I can't play" : "cricket says let's play"
console.log(gameRule)


//wap to swap two nos

let x= 17
let y = 11

// x= 17 , y=11
/* let z=y; //z=17
y=x// y=11
x=z// x=17 */

x= x+ y // x=28
y= x - y // y= 28-11= 17
x= x - y // x= 28-17=11


console.log(x)
console.log(y)

