function multiply(a,b,c){
  return a*b*c
}
console.log(multiply(2,3,4))

function curringFunc(a){
  return function(b){
    return function(c){
      return a*b*c
    }
  }
}
console.log(curringFunc(5)(4)(2))