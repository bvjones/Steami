# Steami
Steami is a single page web app that provides information about your steam account, and statistics and achievements for your games. Made by Rick Clark, Ben Vaughan-Jones, Dylan Rhodius and Frankie Shaw.

## Technologies
Developing
- Mongodb: a local database
- Express: a web application framework
- React: a javascript library
- Node: an open-source, cross-platform JavaScript runtime environment
- Passport: an authentication middleware for Node

Testing

- Enzyme: a JavaScript Testing utility
- Mocha: a feature-rich JavaScript test framework
- Sinon: a testing library
- Chai: a unit testing library

## Installation
Clone this repo and change into it:
```
$ git@github.com:bvjones/Steami.git
$ cd Steami
```
Then to install the dependencies use:
```
$ npm install
```

## Usage
First host the server:
```
$ npm start
```
Then go to your browser and visit "localhost:3000"

You should see this button:

![Screenshot](http://i.imgur.com/tmpnk0Z.png)

Clicking it will redirect you to the steam authentication sign in page, hosted by Steam. Signing in will redirect you to the Steami homepage.

![Screenshot](http://i.imgur.com/B2LJmPX.jpg)

To see more information on a particular game simply click it!

## Testing
To test the app run:
```
npm test
```
Tests are stored in the 'test' folder
