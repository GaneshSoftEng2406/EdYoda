/* 
Write a program to search if a number exists in an array.

1.If the number exists then return the position.
2.If it exists multiple time then return an array with all the positions.
3.If the number doesn't exist then return -1;
 For example,
 Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
 Output: 3
 Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
 Output: [0, 5]  Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
 Output: -1
 */

 const arr=[1, 2, 3, 4, 5, 1, 3]
 const searchElement=9;
 function arrSearch(){
    let searchPosition;
    const result=[]
    let count=0;
    for (let i=0; i<arr.length;i++){
        if(searchElement=== arr[i]){
            searchPosition=i
            result.push(i)
            count++;// 1 // 2
        }
    }

    if(count===1){
        return searchPosition;

    }else if(count>1){
        return result;
    }else{
        return -1;
    }
 }
 let finalValue=arrSearch();
 console.log(finalValue)



 let str1="LISTEN"
 let str2="SILENT"

 str1=str1.split("").sort()
 str2=str2.split("").sort()

 let anagram=false
 let l1=str1.length
 let l2=str2.length

 if(l1 !== l2){
    anagram=false
    console.log("not anagram")
 }else{
    for(let i=0;i< str1.length;i++){
        if(str1[i]===str2[i]){
            anagram=true;

        }
    }
 }

 if(anagram){
    console.log("strings r anagram , yaaayy!")
    console.log(anagram)

 }