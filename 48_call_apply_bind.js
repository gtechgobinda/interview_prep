let student={
  firstName:"Gobinda",
  lastName:"Saha",
  age:25
}

let teacher={
  firstName:"Rabindra",
  lastName:"Sarkar",
  age:50
}

function getEmailForCall(){
  return `${this.firstName}.${this.lastName}@test.com`
}

function getEmailForbind(domain){
  return `${this.firstName}.${this.lastName}@${domain}`
}

console.log(getEmailForCall.call(teacher))

console.log(getEmailForbind.apply(student,['gmail.com']))


let teacherEmail = getEmailForCall.bind(teacher);
console.log(teacherEmail());