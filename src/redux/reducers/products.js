const initialState = {
    pizzas: [],
    isLoad: false
}

const productsReducer = (state = initialState, action) => {
    if(action.type === "SET_PRODUCTS"){
        return {
            ...state,
            pizzas: action.payload,
            isLoad: true
        }
    }else if(action.type === 'SET_LOADED'){
        return {
            ...state,
            isLoad: action.payload
        }
    }
    return state
}

export default productsReducer