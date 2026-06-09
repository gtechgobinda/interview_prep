// callback hell 
const cart=['pen','pencil','book'];
api.createOrder(cart,function(){
  api.proccedOrder(function(){
    api.showOrderSummery(function(){
      api.updateWallet()
    })
  })
})

//same things in promises
api.createOrder(cart)
  .then(()=>api.proccedOrder())
  .then(()=>api.showOrderSummery())
  .then(()=>api.updateWallet())