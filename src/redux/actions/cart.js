export const addProductToCart = (product) => ({
    type:'ADD_PRODUCT_CART',
    payload: product
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const deleteCartItem = (id) => ({
    type: 'DELETE_CART_ITEM',
    payload: id
})