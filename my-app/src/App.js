import React from 'react'
import {Route, Switch} from 'react-router-dom' 

import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Error from './components/Error'
 
 
export default function App() {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} /> 
            </Switch>
        </>
    )
}