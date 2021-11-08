import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import {CreateYourProfile} from "./CreateYourProfile";
import React from 'react'

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/create-your-profile' component={CreateYourProfile} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)
