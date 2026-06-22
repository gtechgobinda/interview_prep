// QS:1
// function fruit(){
//   console.log(name);
//   console.log(price);
//   var name="apple";
//   let price=20;
// }
// fruit()

// QS:2
// for(var i=0;i<3;i++){
//   setTimeout(()=>console.log(i),1)
// }

//QS:3
// for(let i=0;i<3;i++){
//   setTimeout(()=>console.log(i),1)
// }

//QS:4
// console.log(+true);
// console.log(typeof +true)

//QS:5
// console.log(!"anil");
// console.log(typeof("anil"))

//QS:6
// let data="size";
// const bird={
//   size:"small"
// }
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

// QS:7
// let c={name:"peter"};
// let d;
// d=c;
// c.name="Gobinda";
// console.log(d.name)

//QS:8
// var x;
// var x=10;
// console.log(x); 

//QS:9
// var x;
// let x=10;
// console.log(x); 

// QS:10
// let a=3;
// let b=new Number(3);

// console.log(a==b);
// console.log(a===b)

// QS:11
// let name;
// nmae={}; //type
// console.log(name)

// QS:12
// function fruit(){
//   console.log("Hello!")
// }
// fruit.name="apple";
// fruit()

// QS:13
// function sum(a,b){
//   return a+b
// }
// console.log(sum(1,"2"))

// QS:14
// let number=0;
// console.log(number++)
// console.log(++number)
// console.log(number)

// QS:15
// function getAge(...args){
//   console.log(args)
//   console.log(typeof args)
// }
// getAge(21)

// QS:16 
// function getAge(){
//   'use strict'
//   age=21;
//   console.log(age)
// }
// getAge()


// QS:16 
// const sum=eval('10*10+5');
// console.log(sum)

//QS:17
// sessionStorage.setItem('cool_scret',123)

//QS:18
// const obj={1:"a",2:"b",3:"c"};
// console.log(obj.hasOwnProperty("1"))
// console.log(obj.hasOwnProperty(1))

// QS:19
// const obj={a:"one",b:"two",a:"repeat"}
// console.log(obj)

// QS:20
// for(let i=1;i<5;i++){
//   if(i===3)continue;
//   console.log(i)
// }

// QS:21
// const foo=()=>console.log("First");
// const bar=()=>setTimeout(()=>console.log('second'));
// const bazz=()=>console.log('Third')

// foo();
// bar();
// bazz();

// QS:22



//QS:23
// const person={name:'Gobinda'};
// function sayHi(age){
//   return `${this.name} is ${age}`  
// }

// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21)())

//QS:24
// function sayHi(){
//   return (()=>"hello")();
// }
// console.log(typeof sayHi())

// QS:25 
// function sayHi(){
//   return ()=>0
// }
// console.log(typeof sayHi())
// console.log(typeof sayHi()())


// QS: 26 
// console.log(typeof 1)
// console.log(typeof typeof 1) //number itself is string

//QS :27
// const numbers=[1,2,3];
// numbers[9]=11;
// console.log(numbers)

//QS :28
// const numbers=[1,2,3];
// numbers[4]=numbers;
// console.log(numbers)

// QS: 29


// QS:30
// console.log(!!null); //false
// console.log(!!""); //false
// console.log(!!1); //true

// QS:31 
// console.log(setInterval(()=>console.log('Hi'),1000))
// console.log(setInterval(()=>console.log('Hi'),1000))
// console.log(setInterval(()=>console.log('Hi'),1000))

// 1
// 2
// 3
// Hi
// Hi
// Hi
// Hi
// Hi
// ...

// QS : 32
// console.log([..."anil"]) //[ 'a', 'n', 'i', 'l' ]
// console.log([...[3,6,8,0]]) //[3,6,8,0]

// QS: 37
// let data= 3+4+'5';
// console.log(typeof data) //string
// console.log(typeof (3+4+'5')) //string
// console.log(typeof 3+4+'5') // number 45

// QS: 38 
// let data= 3+4+'5';
// console.log(data) //75

// QS: 39 
// console.log(typeof (3 + 4 + +'5')) //number

// QS: 40
// console.log(typeof []) //object 
// console.log([]==[]) //false
// console.log([]===[]) //false

// QS: 41
// let data=[1,2,3].map(num=>{
// if (typeof num==='number')return;
// return num*2
// })
// console.log(data) //[ undefined, undefined, undefined ]

// QS : 42 
function getInfo(member){
  member.name='Gobinda'
}

const person={name:"Kobik"};
getInfo(person)
console.log(person) //{ name: 'Gobinda' }

// QS: 43
function Car(){
  this.make="tata";
  return {make:'Kia'}
}
const myCar=new Car();
console.log(myCar.make) //Kia

// qs: 44
(()=>{
  let x=(y=10)
})();
console.log(typeof x) //undefined

// qs: 45
(()=>{
  let x=y=10;
})();
console.log(typeof y) //number
console.log(y) //10

// qs:46
(()=>{
  let x=10;
})()
(()=>{
  let x=10
})()
console.log(typeof x)


//qs:47
(()=>{
  let x=y=10
})();
(()=>{
  let x=y=20
})();
console.log(y) //20

// qs:48
let x=100;
(()=>{
  var x=20
})()
console.log(x) //100

// qs:49
console.log(!true - true) // -1

// qs:50 
console.log(true+ +"10") //11






