//shallow Copy
const user={
  name:"Gobinda",
  address:{
    city:"Habra"
  }
}

//*-----using operator ... (spread operator)
// const userCopy1={...user}
// userCopy1.address.city="Habra Town"
// console.log(user);
// console.log(userCopy1)


//*----Object.assign()
// userCopy2=Object.assign({},user)
// userCopy2.address.city="Barasat";
// console.log(user);
// console.log(userCopy2)


//*------Array.slice()
// const arr=[1,2,3];
// const result=arr.slice(1)
// result[0]=9
// console.log(result)
// console.log(arr)


// const newArr=[{name:"Gobinda"},{age:25},{place:"Habra"}];
// const newArrCopy=newArr.slice(1);
// newArrCopy[0].age=26
// console.log(newArrCopy,"newArrCopy") //[ { age: 26 }, { place: 'Habra' } ] newArrCopy
// console.log(newArr,"newArr") //[ { name: 'Gobinda' }, { age: 26 }, { place: 'Habra' } ] newArr


//*----Array.from()
// const arr=[1,2,3];
// const copy=Array.from(arr)
// copy[0]=100
// console.log(arr) //[ 1, 2, 3 ]
// console.log(copy) //[ 100, 2, 3 ]

// const newArr=[{name:"Gobinda"},{age:25},{place:"Habra"}];
// const newArrCopy=Array.from(newArr);
// newArrCopy[0].name="Kobik"
// console.log(newArrCopy,"newArrCopy") //[ { name: 'Kobik' }, { age: 25 }, { place: 'Habra' } ] newArrCopy
// console.log(newArr,"newArr") //[ { name: 'Kobik' }, { age: 25 }, { place: 'Habra' } ] newArr


//*---- Array.concat()
// const newArr=[{name:"Gobinda"},{age:25},{place:"Habra"}];
// const newArrCopy=newArr.concat();
// newArrCopy[0].name="Kobik"
// console.log(newArrCopy,"newArrCopy") //[ { name: 'Kobik' }, { age: 25 }, { place: 'Habra' } ] newArrCopy
// console.log(newArr,"newArr") //[ { name: 'Kobik' }, { age: 25 }, { place: 'Habra' } ] newArr