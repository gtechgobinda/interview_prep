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
console.log(!!null);
console.log(!!"");
console.log(!!1);
