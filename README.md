# MusicPic frontend

![MusicPic-logo](./src/assets/logo3.png)

**```Authors```**```: David Stoll, Joanna Coll, Sarah Bixler, Kris Sakarias ```

**Version**: 1.0.0

## Overview

MusicPic helps you find music you may be interested in depending on your mood. A user must sign in to the app with their Spotify account. After being authenticated by Spotify, users can upload images of themselves (or anyone), which are then used by the app in conjunction with Microsoft Azure's Face API to determine the mood of the person in the picture. This information is then used to find a relevant playlist on Spotify for the user to listen to. 

No matter what mood you're in, MusicPic will be there to find the perfect playlist for you.

##Developer Dependencies
[![ForTheBadge uses-js](https://ForTheBadge.com/images/badges/uses-js.svg)](https://ForTheBadge.com)


## Setup

1. Git clone https://github.com/MusicPic/frontend.git
2. Install necessary dependencies and create directories.
3. Start with building webpack.common.js and webpack.dev.js and webpack.prod.js files and utils to pre-define functions bind.
4. Create .env files both for front-end.
5. Create store and App Component, also redux-thunk and redux-reporter. 
6. Create token reducer and auth-actions.js that should contain token actions:
  * `TOKEN_SET`
  * `TOKEN_REMOVE`
7. We are using OAuth, so we are creating a local token in the back-end receiving the token through a cookie. The token allows to keep the user signed in to the Spotify.
8. Create Header component to display nav links and spotify login button. On login we display nav links and the logout button but also the dashboard. Otherwise user gets only the login to spotify button.
9. Dashboard route holds picture upload, profile display and playlist display.
10. Profile is fetched from the database mongo right after logging in or signing up with Spotify and creating the account.
11. 


### Functionality

  

#### Architecture
This is the back-end for a front-end that can be cloned here: `https://github.com/MusicPic/frontend.git`

Consult the README in the front-end repo for more information.


The backend server is running with Node.js and is built entirely with Javascript. The REST API utilizes Express and we persist data with MongoDB. The server development has been driven by robust unit-testing (see below) and is continously integrated and deployed on Heroku. Several other libraries and dependencies are used - consult the package.json file for a complete list.

#### Testing

All of the above functionality is tested using the Jest library. 

To run tests: `npm run test`
