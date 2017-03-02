import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import request from 'request';
import { Server } from 'http';
import Express from 'express';
//Require Mongo Connection
import mongo from 'mongodb';
import monk from 'monk';
var db = monk('localhost:27017/steami_test');
//require session storage and db connection
import session from 'express-session'
import MongodbStoreFactory from 'connect-mongodb-session'
const MongoDBStore = MongodbStoreFactory(session)
//Require React and React components
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
// var OpenIDStrategy = require('passport-openid').Strategy;
import {Strategy as OpenIDStrategy} from 'passport-openid';
import passport from 'passport';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var SteamStrategy = new OpenIDStrategy({
        // OpenID provider configuration
        providerURL: 'http://steamcommunity.com/openid',
        stateless: true,
        // How the OpenID provider should return the client to us
        returnURL: 'http://localhost:3000/auth/openid/return',
        realm: 'http://localhost:3000/',
    },
    // This is the "validate" callback, which returns whatever object you think
    // should represent your user when OpenID authentication succeeds.  You
    // might need to create a user record in your database at this point if
    // the user doesn't already exist.
    function(identifier, done) {
        // The done() function is provided by passport.  It's how we return
        // execution control back to passport.
        // Your database probably has its own asynchronous callback, so we're
        // faking that with nextTick() for demonstration.
        // process.nextTick(function () {
        //     // Retrieve user from Firebase and return it via done().
            var user = {
                identifier: identifier,
                // Extract the Steam ID from the Claimed ID ("identifier")
                steamId: identifier.match(/\d+$/)[0]
            };
        //     // In case of an error, we invoke done(err).
        //     // If we cannot find or don't like the login attempt, we invoke
        //     // done(null, false).
        //     // If everything went fine, we invoke done(null, user).
            return done(null, user);
    });
passport.use(SteamStrategy);

passport.serializeUser(function(user, done) {
    done(null, user.identifier);
});

passport.deserializeUser(function(identifier, done) {
    // For this demo, we'll just return an object literal since our user
    // objects are this trivial.  In the real world, you'd probably fetch
    // your user object from your database here.
    done(null, {
        identifier: identifier,
        steamId: identifier.match(/\d+$/)[0]
    });
});

app.use(passport.initialize());
app.use(passport.session());


// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

//Set up Sessions
var store = new MongoDBStore(
   {
     uri: 'mongodb://localhost:27017/steami_test',
     collection: 'mySessions'
   });

 // Catch errors
 store.on('error', function(error) {
   assert.ifError(error);
   assert.ok(false);
 });

 app.use(require('express-session')({
   secret: 'This is a secret',
   cookie: {
     maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
   },
   store: store,
   resave: true,
   saveUninitialized: true
 }));

//Pass Mongo db to every new request
app.use(function(req,res,next){
 req.db = db;
 next();
});

app.get('/steam/player', (req,res) => {
  let id = req.session.passport.user.match(/\d+$/)[0]
  console.log(id);
  let url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + process.env.STEAM_KEY + "&steamids=" + id
  request.get(url, (error, steamReq, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});

app.get('/steam/player/games', (req,res) => {
  let id = req.session.passport.user.match(/\d+$/)[0]
  console.log(id);
  let url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + process.env.STEAM_KEY + "&steamid=" + id + "&include_appinfo=1&include_played_free_games=1&format=json"
  request.get(url, (error, steamReq, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});

app.get('/steam/player/achievements/:game_id', (req,res) => {
  let url = "http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=" + req.params.game_id + "&key=" + process.env.STEAM_KEY + "&steamid=" + req.params.id
  request.get(url, (error, steamReq, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});

app.get('/steam/games/:game_id/achievements', (req,res) => {
  let url = "http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=" + req.params.game_id + "&format=json"
  request.get(url, (error, steamReq, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});

app.post('/auth/openid', passport.authenticate('openid'));

app.get('/auth/openid/return', passport.authenticate('openid', {
   'successRedirect': '/profile',
   'failureRedirect': '/auth/failure'
}));

// universal routing and rendering
app.get('*', (req, res) => {
  console.log(req.sessionID);
  console.log(req.session);
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// //BASIC SERVER ROUTE FOR INITIAL SETUP
// app.get('*', (req, res) => {
//   return res.render('index');
// });

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
