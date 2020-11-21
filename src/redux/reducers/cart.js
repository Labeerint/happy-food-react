const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = mas => mas.reduce((sum, product) => product.price + sum, 0)


const cartReducer = (state = initialState, action) => {
   if(action.type === 'ADD_PRODUCT_CART'){
        const currentCartItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload]


        const newItems = {
            ...state.items,
            [action.payload.id]:{
                items: currentCartItems,
                totalPrice: getTotalPrice(currentCartItems)
            }
        }

        const items  = Object.values(newItems).map(obj => obj.items)
        const allProducts = [].concat.apply([], items)
        const totalPrice = getTotalPrice(allProducts)

        return {
            ...state,
            items: newItems,
            totalCount: allProducts.length,
            totalPrice
        }
    } else if(action.type === 'CLEAR_CART'){
       return {
           items: {},
           totalPrice: 0,
           totalCount: 0
       }
   } else if(action.type === 'DELETE_CART_ITEM'){
       const newItems = {
           ...state.items
       }
       const currentTotalPrice = newItems[action.payload].totalPrice
       const currentTotalCount = newItems[action.payload].items.length
       delete newItems[action.payload]
       return {
           ...state,
           items: newItems,
           totalPrice: state.totalPrice - currentTotalPrice,
           totalCount: state.totalCount - currentTotalCount
       }
   }
    return state
}

export default cartReducer