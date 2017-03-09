# Steami
Steami is a single page Universal Javascript app built on the MERN stack that summarises a user's [Steam](http://store.steampowered.com/) profile, showing their account statistics, games and achievements. Made by [Rick Clark](https://github.com/rkclark), [Ben Vaughan-Jones](https://github.com/bvjones), [Dylan Rhodius](https://github.com/dylanrhodius) and [Frankie Shaw](https://github.com/frankiefy).

[Click here to try out the demo on Heroku.](http://steami.herokuapp.com/)

## Technologies

- Mongodb: an open source database that uses a document-oriented data model
- Express: a web application framework
- React: a declarative, efficient, and flexible JavaScript library for building user interfaces
- React Router: A routing library for React
- Node.js: an open-source, cross-platform JavaScript runtime environment
- Passport: an authentication middleware for Node

Testing

- Enzyme: a JavaScript Testing utility
- Mocha: a feature-rich JavaScript test framework
- Sinon: a testing library
- Chai: a unit testing library

## Installation

Ensure you have MongoDB installed and available locally on port 27017, and you have updated to the latest stable versions of Node.js and npm.

Then:
- Clone this repo
- Change into the Steami directory
- Run `npm install` to install dependencies


## Usage

- Host the server by running `npm start`
- Go to your browser and visit `http://localhost:3000/`.

You should see this button:

![Button Screenshot](http://i.imgur.com/tmpnk0Z.png)

Clicking it will redirect you to the Steam authentication sign in page, hosted by Valve. Signing in will redirect you to the Steami homepage where you will be able to see your Steam profile:

![Homepage Screenshot](http://i.imgur.com/7cP9zh0.png)

To see more information on a particular game, simply click it. You will then see your total time played on the game and all of your completed and outstanding achievements. Mouse over an achievement to see its name and description:

![Gamepage Screenshot](http://i.imgur.com/r1BROYj.png)

## Testing

To run the tests, simply run `npm test`

Test specs are stored in the 'test' folder.
