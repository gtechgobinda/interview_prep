const cart = ['shirt', 'pant', 'kurta'];
api.createOrder(cart, function () {
  api.proccedToPayment(function () {
    api.showOrderSummery(function () {
      api.updateWallet()
    })
  })
})