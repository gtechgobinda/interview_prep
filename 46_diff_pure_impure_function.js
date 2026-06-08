//pure fucntion
function add(a,b){
  return a+b
}

console.log(add(2,3))
console.log()


//impure function
let count =0;
function increment(){
  count++;
  return count
}

console.log(increment())
console.log(increment())