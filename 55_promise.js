const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data Fetched Successfully")
  } else {
    reject("Any Error Occured")
  }
})

myPromise.then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
})