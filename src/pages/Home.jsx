import React from 'react'
import {Categories, PizzaBlock, SortPopup} from "../components";

function Home({pizzas}){
    return(
        <div className="container">
            <div className="content__top">
                <Categories onClick={(name)=> alert(name)} categories={['Raz', 'Dva', 'Tri']}/>
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