const initialState = {
    items: 0,
    totalPrice: 0,
    totalCount: 0
}

const cartReducer = (state = initialState, action) => {
    if(action.type === "SET_TOTAL_PRICE"){
        return {
            ...state,
            totalPrice: action.payload,
        }
    }else if(action.type === 'SET_TOTAL_COUNT'){
        return {
            ...state,
            totalCount: action.payload
        }
    }else if(action.type === 'ADD_PRODUCT_CART'){
        const cartItems = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload]
        }

        const allProducts = [].concat.apply([], Object.values(cartItems))
        const totalPrice = allProducts.reduce((sum, product) => product.price + sum, 0)

        return {
            ...state,
            items: cartItems,
            totalCount: allProducts.length,
            totalPrice
        }
    }
    return state
}

export default cartReducer