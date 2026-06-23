//*-------map()
let number1=[1,2,3]
let mappedNumber1=number1.map((element,index,array)=>{
  return element*3;
})
console.log(mappedNumber1,"mappedNumber1") //[ 3, 6, 9 ] mappedNumber1

const number=[1,2,3,4,5]
const doubled=number.map(num=>num*2)
console.log(doubled) //[ 2, 4, 6, 8, 10 ]


//*--------filter()
const number2=[1,2,3,4,5]
const evenNumer=number2.filter(num=>num%2===0)
console.log(evenNumer)

const number=[1,2,3,4,5,6];
const numberMoreThanTwo=number.filter((num,curr)=>{
  return num>7;
})
console.log(numberMoreThanTwo);

//*------------reduce()
// array.reduce((accumulator,currentValue,index,array)=>{
//   return updatedAccumulater;
// },initialvalue)

const numbers=[10,20,30,40,50];
const total=numbers.reduce((acc,curr)=>{
  return acc+curr
},0)
console.log(total,"total") // 150 total

//*-------forEach()
// array.forEach((element,index,array)=>{
// //action
// });
const users=["Gobinda","Rahul","Sayan"];
users.forEach((user)=>{
  console.log(user)
})

const numbers=[1,2,3,4,5]
const forEachNumbers=numbers.forEach((item)=>{
  return item*2
})
console.log(forEachNumbers,"forEachNumbers") //undefined forEachNumbers 


//*------find()
// array.find((element,index,array)=>{
//   return condition
// })
// const numbers=[5,7,8,9,10,12];
// const result=numbers.find((num)=>num>10);
// console.log(result,"result")

//*------findIndex()
// array.findIndex((element,index,array)=>{
//     //
// })
// const numbers = [5, 8, 12, 15, 20];
// const result=numbers.findIndex(num=>num>10)
// console.log(result,"result")

//*------some()
// array.some((element, index, array) => {
//   return condition;
// });
// const numbers=[2, 4, 6, 12]
// const result=numbers.some((num=>num>2))
// console.log(result,"someFn-result")

//*-----every()
const numbers = [2, 4, 6, 8];
const result=numbers.every((num)=>num>1)
console.log(result,"everyFun")



// slice()

// ADD
// push()
// concat()

//REMOVE
// pop()
// shift()
// splice()


// MODIFY 



// OTHERS
// join()
// length()
// sort()
// reverse()

// some()
// every()