// Map 
// let user={name:"Gobinda"};
// const map=new Map();
// map.set(user,"Developer")
// console.log(map)
// user = null;
// console.log(map)


let user={name:"Gobinda"};
const weakMap=new WeakMap();
weakMap.set(user,"Developer")
console.log(weakMap)
// user = null;
// console.log(weakMap)