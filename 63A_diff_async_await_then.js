createOrder(cart)
  .then(proccedToPayment)
  .then(showOrderSummery)
  .then(updateWallet)
  .catch(console.error);


async function placeOrder(){
  try {
    await createOrder(cart)
    await proccedToPayment()
    await showOrderSummery()
    await updateWallet()
  } catch (error) {
    console.log(error)
  }
}
placeOrder()