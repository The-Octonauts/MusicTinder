import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.js"
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import {Recommend} from './Recommend'
import {login} from './login';






export const App = () => (
    <>
        <BrowserRouter>
            <Switch>

                <Route exact path='/login' component={login}/>
                <Route exact path='/recommend' component={Recommend} />
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />

            </Switch>
        </BrowserRouter>

    </>
)
