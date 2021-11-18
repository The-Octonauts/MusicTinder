import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.js"
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import {Recommend} from './Recommend'
import {login} from './login';
import {Navigation} from './Navigation';
import {Footer} from "./Footer";
import {CreateYourProfile} from "./CreateYourProfile";





export const App = () => (
    <>


        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path='/create-your-profile' component={CreateYourProfile} />
                <Route exact path='/login' component={login}/>
                <Route exact path='/recommend' component={Recommend} />
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />

            </Switch>
            <Footer/>
        </BrowserRouter>
    </>
)
