import React from 'react'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import axios from 'axios'

function App() {
    const [pizzas, setPizzas] = React.useState()

    React.useEffect(()=>{
        axios.get('http://localhost:3001/pizzas')
            .then(({data})=>{
                setPizzas(data)
            })
    }, [])

  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path='/' render={() => <Home pizzas={pizzas} />} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
  );
}

export default App;
