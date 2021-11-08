import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import {Navigation} from './Navigation'
import {Footer} from "./Footer";
import React from 'react'




export const App = () => (
    <>


        <BrowserRouter>
            <Switch>
                <Navigation/>
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
        <Footer/>
    </>
)
