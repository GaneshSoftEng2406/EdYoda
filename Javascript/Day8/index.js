//functions

const myName="Gargi"
const myName1="Himanshu"
const myName2="Jyoti"
const myName3="Imam"
const myName4="Satya"
const myName5="John"

console.log(`hey! I'm ${myName}`)
console.log("hello")
console.log(`hey! I'm ${myName1}`)
console.log(`hey! I'm ${myName2}`)
console.log(`hey! I'm ${myName3}`)
console.log(`hey! I'm ${myName4}`)
console.log(`hey! I'm ${myName5}`)

//DRY - Don't repeat yourself

//function - a piece of code that we can reuse

function myHobby(){
    console.log("I love to play Chess")
}
//calling the function or invocing the function
myHobby()
myHobby()
myHobby()
myHobby()
myHobby()

function myFriend(){
    console.log("Can u pls bring my book")
}
myFriend()


/* function myDevices(name,mobile=0,laptop=0){
    console.log(`${name} has ${mobile} mobiles and ${laptop} laptops`)
}
//function calls
myDevices("Gargi",2,2)
myDevices("Himanshu",3,3)
myDevices("Jyoti",1,1)
myDevices("Imam",1,1)
myDevices("Satya",1,1)
myDevices("John",2,3)
myDevices("Monika",2,2) */

function myDevices(name,mobile=0,laptop=0){
    const value=`${name} has ${mobile} mobiles and ${laptop} laptops`
    return value

}
//function calls
const Gargi=myDevices("Gargi",2,2)
console.log(Gargi)

const Himanshu=myDevices("Himanshu",3,3)
console.log(Himanshu)
const satya= myDevices("satya",1,1);
console.log(satya)
const monika = myDevices("Monika", 2,2)
console.log(monika)
const jyoti = myDevices("Jyoti", 2)
console.log(jyoti)
const aditi=myDevices("Aditi", 2, 2)
console.log(aditi)
const lalith= myDevices("lalith",2,3)
console.log(lalith)
const john=myDevices("John",2,3)
console.log(john)

//function declaration
//in case of function declaration 
//u can call the function before declaration
const Ruchi=ageCalculator("Ruchi", 2000)
console.log(Ruchi)
const Nikhil=ageCalculator("Nikhil", 2002)
console.log(Nikhil)

function ageCalculator(name,birthYear){
    console.log(`${name} was born in ${birthYear}`)
    return 2022-birthYear
}

const Rajesh=ageCalculator("Rajesh", 1999)
console.log(Rajesh)
const Aline=ageCalculator("Aline", 1998)
console.log(Aline)

//function expression
/* const Satya=ageCalculatorExp("Satya",1999)
console.log(Satya) */
//in case of function expression 
//u can not call the function before declaration
//Cannot access 'ageCalculatorExp' before initialization
const ageCalculatorExp=function(name,birthYear){
    console.log(`${name} was born in ${birthYear}`)
    return 2022-birthYear
}
const Satya=ageCalculatorExp("Satya",1999)
console.log(Satya)


//Arrow function
// fat arrow function
//()=>{}

const ageCalculatorArrow=(name,birthYear)=>{
    console.log(`${name} was born in ${birthYear}`)
    return 2022-birthYear

}
/* const ageCalculatorArrow=(name,birthYear)=>2022-birthYear */


const Lalith=ageCalculatorArrow("Lalith",1999)
console.log(`${Lalith} is lalith's age`)

const Ram={
    fname:"Ram",
    lname:"Sutar",
    state:"Pune",
    birthYear:1999,
    isVeg:true,
    calculateAge:function (bYear){
        return 2022-bYear
    }
}
/* //function expression
const calculateAge= function (bYear){
    return 2022-bYear;
} */
console.log("object method")

console.log(Ram.calculateAge(1999))
console.log(Ram.lname)
console.log(Ram["calculateAge"](1999))


