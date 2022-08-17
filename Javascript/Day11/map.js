//array methods

//map - it creats a new array with the results of
//calling a callback function on each element of the array.

const num=[1,2,3,4,5,6,7,8,9]
const newArr=num.map(function(val){
    return val*10
})

console.log(newArr)
console.log(num)


const students=[
    {id:1,
     name:"abc"
    },
    {id:2,
     name:"def"
    },
    {id:3,
     name:"ghi"
    },
    {id:4,
     name:"jkl"
    },
]

const upperName=students.map(function(val){
    return val.name.toUpperCase()
})
console.log(upperName)

