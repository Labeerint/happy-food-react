import axios from "axios";

export const fetchPizzas = (category, sortBy) => dispatch =>{
    dispatch(setLoaded(false))
    console.log(category)
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}`:''}&_sort=${sortBy}&_order=desc`)
        .then(({data})=>{
            dispatch(setPizzas(data))
        })
}

export const setPizzas = (pizzas) =>({
    type: 'SET_PIZZAS',
    payload: pizzas
})

export const setLoaded = (load) =>({
    type: 'SET_LOADED',
    payload: load
})