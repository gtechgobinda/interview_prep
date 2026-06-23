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
const numbers=[5,7,8,9,10,12];
const result=numbers.find((num)=>num>10);
console.log(result,"result")

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
const numbers=[2, 4, 6, 12]
const result=numbers.some((num=>num>2))
console.log(result,"someFn-result") //true someFn-result

//*-----every()
const numbers = [2, 4, 6, 8];
const result=numbers.every((num)=>num>1)
console.log(result,"everyFun")

//*------includes()
// array.includes(valueToFind, fromIndex)

const fruits = ["apple", "banana", "mango"];
const result = fruits.includes("banana");

console.log(result); // true

const numbers = [1, 2, 3, 4];
console.log(numbers.includes(10)); // false


//*------sort()
// array.sort((a,b)=>a-b)
const numbers = [40, 10, 100, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 10, 40, 100]
// Descending
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 40, 10, 5]
//Acending
numbers.sort((a, b) => a - b);
console.log(numbers);


//*------slice()
// array.slice(startIndex,endIndex)
const numbers = [1, 2, 3, 4, 5];
const result = numbers.slice(1, 4);
console.log(result); // [2,3,4]
console.log(numbers); // [1,2,3,4,5]


//*------splice()
// array.splice(startIndex, deleteCount, item1, item2...)
const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(1, 2);
console.log(removed); // [2,3]
console.log(numbers); // [1,4,5]
// Add elements
numbers.splice(1, 0, 10, 20);
console.log(numbers); // [1,10,20,4,5]


//*------concat()
// array1.concat(array2)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1.concat(arr2);
console.log(result); // [1,2,3,4,5,6]
console.log(arr1); // [1,2,3]


//*------flat()
// array.flat(depth)
const numbers = [1, 2, [3, 4], [5, [6, 7]]];
const result = numbers.flat();
console.log(result); // [1,2,3,4,5,[6,7]]
const result2 = numbers.flat(2);
console.log(result2); // [1,2,3,4,5,6,7]


//*------flatMap()
// array.flatMap(callback)
const numbers = [1, 2, 3];
const result = numbers.flatMap((num) => [num, num * 2]);
console.log(result);


//*------join()
// array.join(separator)
const fruits = ["apple", "banana", "mango"];
const result = fruits.join("-");
console.log(result); // apple-banana-mango
console.log(fruits.join(" "));


//*------reverse()
// array.reverse()
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5,4,3,2,1]

//*------push()
// array.push(element)
const numbers = [1, 2, 3];
const length = numbers.push(4);
console.log(numbers); // [1,2,3,4]
console.log(length); // 4


//*------pop()
// array.pop()
const numbers = [1, 2, 3, 4];
const removed = numbers.pop();
console.log(removed); // 4
console.log(numbers); // [1,2,3]


//*------unshift()
// array.unshift(element)
const numbers = [2, 3, 4];
const length = numbers.unshift(1);
console.log(numbers); // [1,2,3,4]
console.log(length); // 4