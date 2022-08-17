
    function myMarks(){
        let total=80+99+90
        return total
    }
    console.log(myMarks())

   let s=100; //global variable 
   console.log(s)
    function myScore(){
        let s1=90; // local variable
        console.log(s1)
        console.log(s)
    }
    myScore()
/*     console.log(s1) */
    console.log(s)
 
/*     console.log(s1) */ /* u can't access the local variable outside that particular function in which it is defined 

*/

let sentence="hello how r u how"
let s2=sentence.search("how")
console.log(s2)

let myName="gargi"
/* let myName="gargi, one,two,three" */
/* let myName1=myName.split("") */
let myName1=myName.split("").sort().join("")
console.log(myName1)

//hola
//aloh --> finalStr
//for(let i=str.length -1 ; i >-0 ; i--){
    //finalStr= originalStr[i] //aloh
//}

//}

/* madam - madam  */


