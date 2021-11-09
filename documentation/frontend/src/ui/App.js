import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import {Recommend} from './Recommend'
import React from 'react'

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/recommend' component={Recommend} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)
