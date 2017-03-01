import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import request from 'request';
import { Server } from 'http';
import Express from 'express';
import session from 'express-session';
import React from 'react';
import passport from 'passport-steam';
import SteamStrategy from 'passport-steam';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
import FirebaseStoreFactory from 'connect-firebase';
const FirebaseStore = FirebaseStoreFactory(session);

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.get('/steam/player/:id', (req,res) => {
  let url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + process.env.STEAM_KEY + "&steamids=" + req.params.id
  request.get(url, (error, steamReq, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});

app.get('/steam/player/:id/games', (req,res) => {
  let url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + process.env.STEAM_KEY + "&steamid=" + req.params.id + "&include_appinfo=1&include_played_free_games=1&format=json"
  request.get(url, (error, steamReq, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});

app.get('/steam/player/:id/achievements/:game_id', (req,res) => {
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


// universal routing and rendering
app.get('*', (req, res) => {
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
