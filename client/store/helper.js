export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2
})

export const cartTotalPrice = state => {
	let totalPriceStore = 0
	const items = state.cart.items
	const products = state.products.products

	for (const productId in items) {
		const quantity = items[productId]
		const product = products.find(function(item) {
			return item.id == productId
		})

        if (product) {
          totalPriceStore += product.price * quantity
        }
	}
	return totalPriceStore / 100
}

