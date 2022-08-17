//filter
// it creates a new array with all the elements that that pass the test implemented by the provided function.
const num=[1,2,3,4,5,6,7,8,9]

const evenArr=num.filter(n=> n%2 === 0 )
const oddArr=num.filter(n=> n%2 === 1 )


console.log(evenArr)
console.log(oddArr)
