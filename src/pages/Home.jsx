import React from 'react'
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from 'react-redux'
import {setCategory} from "../redux/actions/filters";
function Home(){
    const dispatch = useDispatch()

    const {pizzas} = useSelector(({pizzasReducer, filtersReducer}) => {
        return{
            pizzas: pizzasReducer.pizzas,
            sortBy: filtersReducer.sortBy
        }
    })

    const onSelectCategory = React.useCallback( index => {
        dispatch(setCategory(index))
    })

    return(
        <div className="container">
            <div className="content__top">
                <Categories onClick={(name)=> onSelectCategory(name)} categories={['Raz', 'Dva', 'Tri']}/>
                <SortPopup items={["популярности", "цене", "алфавиту"]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas &&
                    pizzas.map((pizzaItem) => {
                        return <PizzaBlock key={pizzaItem.id} {...pizzaItem} />
                })
                }

            </div>
        </div>
    )
}

export default Home;