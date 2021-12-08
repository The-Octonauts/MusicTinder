import express, {Application, Errback, ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
// Routes
import { indexRoute } from './apis/index.routes'
import {signupRoute} from "./apis/sign-up/sign-up.route";
import {signinRouter} from "./apis/profile/sign-in/sign-in.route";
const session = require("express-session");
const MemoryStore = require('memorystore')(session);
import csrf from "csurf";
import passport = require('passport');
import {passportStrategy} from "./apis/profile/sign-in/sign-in.controller";
import {signoutRoute} from "./apis/sign-out/sign-out.route";
import podcastRouter from "./apis/podcast/podcast.route";
import {savedRouter} from "./apis/saved/saved.route";
import {swipeRouter} from "./apis/swipe/swipe.route";
import {ProfileRoute} from "./apis/profile/profile.route";


// The following class creates the app and instantiates the server
export class App {
    app: Application;

    constructor (
        private port?: number | string
    ) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () : void {
        this.app.set('port', this.port || process.env.PORT || 4200)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares () :void {
        const sessionConfig  =  {
            store: new MemoryStore({
                checkPeriod: 100800
            }),
            secret:"secret",
            saveUninitialized: true,
            resave: true,
            maxAge: "3h"
        };
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(session(sessionConfig));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        passport.use(passportStrategy);
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () :void {
        // TODO add "/apis"
        this.app.use('/apis', indexRoute);
        this.app.use('/apis/sign-up', signupRoute);
        this.app.use('/apis/sign-in', signinRouter);
        this.app.use('/apis/sign-out', signoutRoute);
        this.app.use('/apis/podcast',podcastRouter );
        this.app.use('/apis/saved' , savedRouter);
        this.app.use('/apis/swipe' , swipeRouter);
        this.app.use('/apis/profile', ProfileRoute)

    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}