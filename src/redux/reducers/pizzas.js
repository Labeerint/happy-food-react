const initialState = {
    pizzas: [],
    isLoad: false
}

const pizzasReducer = (state = initialState, action) => {
    if(action.type === "SET_PIZZAS"){
        return {
            ...state,
            pizzas: action.payload,
        }
    }else if(action.type === "IS_LOAD"){
        return {
            ...state,
            isLoad: true
        }
    }
    return state
}

export default pizzasReducer