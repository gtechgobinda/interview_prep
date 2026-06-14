//-----global Scope
// let name="Gobinda";
// function greet(){
//   console.log(name)
// }
// greet()
// console.log(name)


//----functional Scope
// function greet(){
//   let name="Gobinda";
//   console.log(name)
// }
// greet()
// console.log(name)  // show error 


//----block scope
// if(true){
//   let age=25;
//   var city="habra"
// }
// console.log(age) // show error
// console.log(city)


//---- lexical scope
// function outer(){
//   let x=10;
//   function inner(){
//     console.log(x)
//   }
//   inner()
// }
// outer()


//------scope Chain
let a=1;
function outer(){
  let b=2;
  function inner(){
    let c=3;
    console.log(a,b,c);
  }
  inner();
}
outer();




