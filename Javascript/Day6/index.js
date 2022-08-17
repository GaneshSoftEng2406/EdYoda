const myCar1= "BMW"
const myCar2="Mercedes"
const myCar3="Audi"
const myCar4="Suzuki"

// Data Structure
//Array
// const myCar=[] // empty array
const myCar=["BMW","Marcedes","Audi","Suzuki"]
console.log(myCar)
const myName=['a','b','c']
//const myNum=[1,2,3]
const myNum= new Array(1,2,3);
console.log(myNum)

console.log(myCar[0])
console.log(myCar[1])
console.log(myCar[2])
console.log(myCar[3])
console.log(myCar[4])

console.log(myNum[0])
console.log(myNum[1])
console.log(myNum[2])

console.log(`length of myname array is ${myName.length}`)

/* myCar.splice(2,2);
console.log(myCar)
 */
console.log(myCar[myCar.length-1]) //last element inside my array
console.log(myCar)
myCar[2]="Lamborghini"
console.log(myCar)

//array methods
//push - add to the end of ur array
//pop - remove from end of ur array
//shift - remove from the start
//unshift - add to he start



//push  - add an element to the end of an array
console.log(myCar)
console.log(myCar.push("Maruti")) // returns the updated length of the array
console.log(myCar) //updated array

//pop  - deletes an element from the end of an array
console.log(myCar)
console.log(myCar.pop()) // returns the popped element
console.log(myCar) //updated array

//shift - delete an from the beginning of ur array
console.log(myCar)
console.log(myCar.shift()) // returns the deleted element
console.log(myCar) //updated array

//unshift -  add an element to beginning of an array
console.log(myCar)
console.log(myCar.unshift("Maruti","ferrari","skoda","Rolls Royce","Porsche")) // returns the updated length of the array
console.log(myCar) //updated array

console.log(myCar)
//splice()
//mention from which index u wanna delete
// and how many elements u wanna delete 
myCar.splice(3,2)
console.log(myCar)

const isThere= myCar.includes("Suzuki")
console.log(isThere)



const operator= window.prompt("select + , - , * or / ")
const num1=Number(window.prompt("Enter the first no"))
const num2=Number(window.prompt("Enter the second no"))

/* if(isNaN(num1 && num2 )){
    console.log("heyy , try to enter a number ")
}
else{
    switch()
} */
if(isNaN(num1 && num2 )){
    console.log("heyy , try to enter a number ")
}
else{
    switch(operator){
        case "+":
            result= num1 + num2;
            console.log(result)
            break;
        case "-":
            result= num1 - num2;
            console.log(result)
            break;
        case "*":
            result= num1 * num2;
            console.log(result)
            break;
        case "/":
            result= num1 / num2;
            console.log(result)
            break;
            default:
                console.log("Enter valid operator")
                break;
    }
} 














