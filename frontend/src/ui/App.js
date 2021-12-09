import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.js"
import { Home } from './home/Home'
import { FourOhFour } from './four-oh-four/FourOhFour'
import {Recommend} from './Recommend'
import {login} from './login';
import {Navigation} from './shared/Navigation';
import {Footer} from "./shared/Footer";
import {CreateYourProfile} from "./profile/CreateYourProfile";
import {Provider} from "react-redux";


export const App = (store) => (
    <>

        <Provider store={store} >
        <BrowserRouter>
            <Navigation/>
            <Switch>

                <Route exact path='/login' component={login}/>
                <Route exact path='/create-your-profile' component={CreateYourProfile} />
                <Route exact path='/recommend' component={Recommend} />
                <Route exact path='/' component={login} />

            {/*    <Route exact path='/login' component={SignOut}/>*/}

                <Route component={FourOhFour} />

                {/*<Route exact path="/profile/:profileHandle" component={Profile} />*/}




            </Switch>
            {/*<Footer/>*/}
        </BrowserRouter>
        </Provider>
    </>
)
