// spread Operator

// example 1
const number=[1,2,3]
const newNumber=[...number,4,5]
// console.log(newNumber)

// example2 
//* copying an array
const arr1=[1,2]
const arr2=[...arr1]
// console.log(arr2)

//example3
const arr3=[10,20,30]
const arr4=[40,50,60]
const merge=[...arr3,...arr4]
// console.log(merge)

//example4
const user={
  name:"Gobinda",
  age:25,
}

const updatedUser={
  ...user,
  city:"habra"
}

// console.log(updatedUser)

//res operator


