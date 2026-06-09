//simple examnple of SetInterval
// setInterval(()=>{
//   console.log("Hello I am SetInterval")
// },2000)



// how to stop setInterval 
const intervalId=setInterval(()=>{
  console.log("Hello")
},1000)

//stop after 6 seconds
setTimeout(()=>{
  clearInterval(intervalId)
},6000)