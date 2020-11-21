import axios from "axios";

export const fetchProducts = (category, sortBy) => dispatch =>{
    dispatch(setLoaded(false))
    console.log(category)
    axios.get(`http://localhost:3001/products?${category !== null ? `category=${category}`:''}&_sort=${sortBy}&_order=desc`)
        .then(({data})=>{
            dispatch(setProducts(data))
        })
}

export const setProducts = (products) =>({
    type: 'SET_PRODUCTS',
    payload: products
})

export const setLoaded = (load) =>({
    type: 'SET_LOADED',
    payload: load
})