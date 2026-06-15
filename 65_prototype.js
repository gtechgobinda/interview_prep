function User(){
  this.name="Gobinda Saha";
  // this.SayHi=function(){
  //   console.log(this.name)
  // }
}
// User.prototype.sayHi=function(){
//     console.log(this.name)
//   }

// u1=new User()
// u2=new User()

// console.log(u1)
// u1.sayHi() 


let users=["Gobinda","Tithi","Rahul"];
let afterPop=users.pop()

// console.log(afterPop) 


Array.prototype.first=function(){
  return this[0]
}

console.log(users.first())


String.prototype.reverseStringByGobi=function(){
  return this.split("").reverse().join("")
}


let myStr="I live in Habra"
console.log(myStr.reverseStringByGobi())