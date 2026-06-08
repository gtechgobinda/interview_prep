// Type Coercion 

//implicit coercion --- means automatic

let exp1='5'+2
let exp2='5'-2
let exp3= true+1
let exp4=false+1
// console.log(exp1, typeof(exp1));
// console.log(exp2,typeof(exp2));
// console.log(exp3,typeof(exp3));
// console.log(exp4,typeof(exp4));

//explicit coercion --- manual
let exp5=Number('5');
let exp6=String(123);
let exp7=Boolean(0)

console.log(exp5,typeof(exp5))
console.log(exp6,typeof(exp6))
console.log(exp7,typeof(exp7))




