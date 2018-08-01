export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})
export const cartTotalPrice = state => {
  let totalPriceStore = 0
  let productQuantityObj
  let idAndData
  let arrayOfProducts  = []
  const items = state.cart.items
  const products = state.products.products
  for (const productId in items) {
      const quantity = items[productId]
      const product = products.find(function(item) {
          return item.id == productId
      })
      productQuantityObj = {product, quantity}
      idAndData = {productId, productQuantityObj}
      arrayOfProducts.push(idAndData)
      if (product) {
        totalPriceStore += product.price * quantity
      }
  }
  return totalPriceStore / 100
}

export const arrayOfProductOrders = state => {
  if (state.cartOrder.order){
  let productQuantityObj
  let idAndData
  let arrayOfProducts  = []
  let finalArr = []
  let orderId = state.cartOrder.order.id
  const items = state.cart.items
  const products = state.products.products
  for (const productId in items) {
      const quantity = items[productId]
      const product = products.find(function(item) {
          return item.id == productId
      })
      productQuantityObj = {product, quantity}
      idAndData = {productId, productQuantityObj}
      arrayOfProducts.push(idAndData)
      console.log('DATA******', idAndData)

  }
  console.log('ARRRAY*******', arrayOfProducts)
  for (let i=0; i<arrayOfProducts.length; ++i){
    let currentProduct = arrayOfProducts[i]
    finalArr.push({orderId: orderId, productId: +currentProduct.productId, quantity: currentProduct.productQuantityObj.quantity, unitPrice: currentProduct.productQuantityObj.product.price})
  }
  console.log("MYFINALARRAY", finalArr)
return finalArr
}

}

export const arrayOfCurrentOrder = state => {
  if (state.cartOrder.order){
  let productQuantityObj
  let idAndData
  let arrayOfProducts  = []
  let finalArr = []
  let orderId = state.cartOrder.order.id
  const items = state.cart.items
  const products = state.products.products
  for (const productId in items) {
      const quantity = items[productId]
      const product = products.find(function(item) {
          return item.id == productId
      })
      productQuantityObj = {product, quantity}
      idAndData = {productId, productQuantityObj}
      arrayOfProducts.push(idAndData)
      console.log('DATA******', idAndData)

  }
  console.log('ARRRAY*******', arrayOfProducts)
  for (let i=0; i<arrayOfProducts.length; ++i){
    let currentProduct = arrayOfProducts[i]
    finalArr.push({orderId: orderId, productId: +currentProduct.productId, title: currentProduct.productQuantityObj.product.title, quantity: currentProduct.productQuantityObj.quantity, unitPrice: currentProduct.productQuantityObj.product.price})
  }
  console.log("MYFINALARRAY", finalArr)
return finalArr
}

}


