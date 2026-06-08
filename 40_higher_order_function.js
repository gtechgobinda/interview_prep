//callback function
function add(a,b){
  return a+b
}

//higher order fucntion
function display(num1,num2,operation){
  var result=operation(num1,num2)
  console.log(result)
}

display(30,40,add)