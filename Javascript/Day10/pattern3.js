/* 

    *
   ***
  *****
 *******
*********

*/

console.log("pattern1")

let num=5
let pattern="";

for (i=1;i<=num;i++){ 
    //printing the spaces
    for(j=1;j<=num - i;j++){ 
       pattern+=" "
    }
    //printing the stars
    for(let k=0;k<2*i-1;k++){
        pattern+="*"
    }
    pattern +="\n"
}
console.log(pattern)


/* for(i<10){
    setTimeout{

    }
}
10,10,10 */