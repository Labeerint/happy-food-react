import React from 'react'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./redux/actions/products";

function App( ) {
    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzasReducer}) => pizzasReducer.pizzas)
    const {category, sortBy} = useSelector(({filtersReducer}) => {
        return{
            category: filtersReducer.category,
            sortBy: filtersReducer.sortBy
        }
    })

    React.useEffect(()=>{
        if(!pizzas.lenth){
            dispatch(fetchProducts(category, sortBy))
        }

    }, [category, sortBy])

  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path='/' component={Home} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
  );
}

export default App;
