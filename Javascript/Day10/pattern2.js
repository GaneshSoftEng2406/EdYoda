/* 

****
***
**
*

*/

console.log("pattern1")

let num=6
let pattern="";

for (i=1;i<=num;i++){ //i=1 --> 2
    for(j=1;j<=num - i;j++){ // 1<=5 --> 2<=5 --> 3<=5 --> 4<=5 --> 5<=5 -->6<=5 
       /*  pattern +="*"  // a = a+ 1 // a+=1 */
       pattern+=j
    }
    pattern +="\n"
}
console.log(pattern)