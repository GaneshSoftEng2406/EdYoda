var num1 = 123.4567
console.log(typeof num1.toFixed())

const myName="Gargi"
//expression and statement
//expression - that can produce a value
//statement - that can't produce a value
11+11// 22--> expression

console.log(`hello I'm ${11*12}`)

if(12>11){
    const myCar="I lost my car"
}//statement

//array
const mobile=[
  
    "13 pro max",
     "256",
     100000,
     "12px",
     "32px",
     ["Green","Blue","Silver"],
     "iphone"

]

console.log(mobile)

//object
//key:value
//brand:Iphone
//model: 13 pro max
//storage:256gb
//price:100000
//front:12px
//back:32px,
//color variants :   ["Green","Blue","Silver"]

const mobileObj={
   
    model:"13 pro max",
    storage:"256gb",
    price:100000,
    front:"12px",
    back:"32px",
    colorVariant: ["Green","Blue","Silver"],
    brand:"iphone",
    waterproof:false
}
// in objects the order doesn't matter
// in array order does matter
console.log(mobileObj)
//dot notation
console.log(mobileObj.brand)
console.log(mobileObj.model)
console.log(mobileObj.price)
console.log(mobileObj.colorVariant)
console.log(mobileObj.waterproof)

//bracket notation

console.log(mobileObj["brand"])
console.log(mobileObj["waterproof"])
console.log(mobileObj["storage"])
console.log(mobileObj["model"])
const temp="Variant"
console.log(mobileObj["color"+temp])// u can put expression inside bracket 
const myPrice="p"
console.log(mobileObj[myPrice+"rice"])// u can put expression inside bracket  //"price"

if(mobileObj["waterproof"]){
    console.log("Yaay , ,my phone is water proof")
}else{
    console.log("my phone is not water proof")
}

console.log(Object.entries(mobileObj))
 console.log(Object.keys(mobileObj))
console.log(Object.values(mobileObj)) 
const mobile1=[
    ['name',"apple"],["model","12 pro"]
]
const newObj=Object.fromEntries(mobile1)
/* console.log(newObj) */

/* mobileObj.color="blue";
mobileObj["screenSize"]=6.7
console.log(mobileObj) */


/* wap to check if a substring is present inside a string or not */


/* const myStr=prompt("Enter ur string")
const mySubStr=prompt("Enter the substring")
if(myStr.includes(mySubStr)){
    console.log(`${mySubStr} is present in ${myStr}`)
}
else {
    console.log(`${mySubStr} is not present in ${myStr}`)
} */
// 56 666 96

56%10// remainder 6
666%10 //   remainder 6
96%10 // remainder 6

const n1=56
const n2=666
const n3=96

const lastDigit1=n1%10;
const lastDigit2=n2%10;
const lastDigit3=n3%10;
if (lastDigit1 == lastDigit2 && lastDigit1 == lastDigit3)
{
  console.log("Same last digit")
}
else{
    console.log("bruhhh")
}

const person=[]
person["firstName"] = "John";
console.log(person[0])