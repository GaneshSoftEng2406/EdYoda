//0 - 100
/* console.log(0);
console.log(1);
console.log("2");
console.log("3");
console.log("4");
 */
//0-10
// for , while , dowhile , for in , for of
//for(initial expression /initialization / initial value;condition;increment / decrement expression){
//    statement
//}

/* i = 0 // 0+1 
i= 1  // 1+1 = 2
i=2    // 2+1 //3
i = 3
i <=10 */

//i--> index
for ( let i=0;i<10;i++){ //0 --> 1 --> 2 --> 3 --> 4 --> 5 --> 6 
    console.log(i)
}
console.log("hello")
for(let i=5;i>=0;i--){ // 10 --> 9 --> 8 --> 7 .....2 // 1 // 0
    console.log(i) //
}
console.log("while loop")
//while
/* let j=0; // 0 1 2 3 4
while(j<=3){
    console.log(j)
    j += 1; // j= j+ 1
} */
/* let j=0; // 0 1 2 3 4
while(j<=10){
    if(j==4){
        j += 1; // j= j+ 1
        break;
    }
    console.log(j)
    j +=1; // 0 1 2 3 
} */

// 1. check the condition 2. excute the statement
let j=0; // 0 1 2 3 4
while(j<=10){
    if(j==4){
        j += 1; // j= j+ 1 // 5
        console.log(j)
        break;
    }
    console.log(j)
    j +=1; // 0 1 2 3 
}
/* console.log("while loop")
let k=0
while(k<=10){ //10 11
    k+=1; //11
    console.log(k)
   
}
 */
//do while
console.log("do while loop")
/* let k= 1; // 1
do{
    console.log(k) //1
    k +=1  // 2
}while(k<=0) */

let k=0;
do{
    console.log(k);
    if(k==5){
        break;
    }
    k++;
}while(k<=10)


//array
/* const rakhi=["Laddu","Rosogolla","Rasamalai","Talsash","Gulabjamun","milkcake"]
/* for (let i=0; i< rakhi.length;i ++){
    console.log(rakhi[i])
} */
// for of 
/* for ( let i of rakhi){
    console.log(i)
}  */
const rakhi=["laduu","rosogolla","rasmalayi","cake","gulabjamun"];
for (let i=0; i< rakhi.length;i++){
    console.log(rakhi[i])
}

const car = {
    company: "Tesla",
    model: "X",
    price: 65000,
    electric: true,
  };
  //for in 
  for ( let i in car){
   /*  console.log(i) */
    console.log(`${i} : ${car[i]}`) // car[company]
  }



/* let j=0;
while(j<=10)
    {
        if(j==2){
        j+=1;
        break;
    }
    if(j==5){
        j+=2;
        continue;
    }
console.log(j)
j=j+5;
    } */

/*   const arr=[]
    for(let i=0;i<=5;i++){
    prompt(arr[i])
    } */

    const arr=[]
    for(let i of arr){
    prompt(arr[i])
    }

    //A -65 

    //fibonacci series
   /*  const num= parseInt(prompt("Enter the no of terms in ur series")) */
   const num=10;
    let n1=0;
    let n2=1;
    let n3;
    for (let f=1;f<=num;f++){
        console.log(n1) // 0 1 1 2 3
        n3=n1+n2; // 0+1  --> 1 2
        n1=n2; //1
        n2=n3; // 1
    }


    




