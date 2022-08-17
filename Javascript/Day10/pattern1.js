/* 



1
22
333
4444

1
12
123
1234


*/

console.log("pattern1")

let num=4
let pattern="";

for (i=1;i<=num;i++){ //i=1 --> 2
    for(j=1;j<=i;j++){ // j=1 
       /*  pattern +="*"  // a = a+ 1 // a+=1 */
       pattern+=j
    }
    pattern +="\n"
}
console.log(pattern)