import React from 'react'
import {Categories, LoadingBlock, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from 'react-redux'
import {setCategory, setSortBy} from "../redux/actions/filters";


function Home(){
    const dispatch = useDispatch()
    const categories=['Raz', 'Dva', 'Tri']
    const items=[
        {name:"популярности", type: "rating"},
        {name:"цене", type: "price"},
        {name:"алфавиту", type:"name"}
        ]

    const {pizzas, category, sortBy} = useSelector(({pizzasReducer, filtersReducer}) => {
        return{
            pizzas: pizzasReducer.pizzas,
            sortBy: filtersReducer.sortBy,
            category: filtersReducer.category
        }
    })

    const isLoaded = useSelector(({pizzasReducer}) => pizzasReducer.isLoad)

    const onSelectCategory = React.useCallback( index => {
        dispatch(setCategory(index))
    })

    const onSelectSortType = React.useCallback( type => {
        dispatch(setSortBy(type))
    })

    return(
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} onClickCategory={(name)=> onSelectCategory(name)} categories={categories}/>
                <SortPopup sortByItem={sortBy} items={items} onClickSort={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? (pizzas && pizzas.map((pizzaItem) => {return <PizzaBlock key={pizzaItem.id} {...pizzaItem} />}))
                    : (Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>))
                }

            </div>
        </div>
    )
}

export default Home;