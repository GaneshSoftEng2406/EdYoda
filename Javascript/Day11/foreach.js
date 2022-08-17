//array methods

//foreach - it accepts a callback function
//it calls the function once per element in the array

const num=[1,2,3,4,5,6,7,8,9]
num.forEach(function (num){
    console.log(num * 2)
});


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

students.forEach(function(stu){
   console.log(stu.name.toUpperCase())
})