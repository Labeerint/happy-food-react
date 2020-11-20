const initialState = {
    pizzas: [],
    isLoad: false
}

const pizzasReducer = (state = initialState, action) => {
    if(action.type === "SET_PIZZAS"){
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

export default pizzasReducer