/* 
54321
4321
321
21
1

*/

console.log("pattern1")

let num=5
let pattern="";

for (i=1;i<=num;i++){  //i=1 --> 2
    for(j=1;j<=num -i+1;j++){ //j=1 --> 2 --> 3 --> 4 --> 5//5-1+1 =5 
       pattern+=num-i-j+2 // 5-1-1+2//5--> 5-1-2+2=4-->  5-1-3+2=3 --> 5-1-4+2=2 --> 5-1-5+2=1
    }
    pattern +="\n"
}
console.log(pattern)
