const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(1, 2);
console.log(removed); // [2,3]
console.log(numbers); // [1,4,5]
// Add elements
numbers.splice(1, 0, 10, 20,30);
console.log(numbers); // [1,10,20,4,5]