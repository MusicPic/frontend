# MusicPic frontend

![MusicPic-logo](./src/assets/logo2.png)

**```Authors```**```: ```

David Stoll 

[![linkedin link](https://img.shields.io/badge/link-linkedin-green.svg?longCache=true&style=for-the-badge)](https://www.linkedin.com/in/dstoll243/)

Joanna Coll 

[![linkedin link](https://img.shields.io/badge/link-linkedin-green.svg?longCache=true&style=for-the-badge)](https://www.linkedin.com/in/joanna-coll/)

Sarah Bixler

[![linkedin link](https://img.shields.io/badge/link-linkedin-green.svg?longCache=true&style=for-the-badge)](https://www.linkedin.com/in/sarah-bixler/)

Kris Sakarias 

[![linkedin link](https://img.shields.io/badge/link-linkedin-green.svg?longCache=true&style=for-the-badge)](https://www.linkedin.com/in/kris-sakarias/)

**Version**: 1.0.0

## Overview

MusicPic helps you find music you may be interested in depending on your mood. A user must sign in to the app with their Spotify account. After being authenticated by Spotify, users can upload images of themselves (or anyone), which are then used by the app in conjunction with Microsoft Azure's Face API to determine the mood of the person in the picture. This information is then used to find a relevant playlist on Spotify for the user to listen to. 

No matter what mood you're in, MusicPic will be there to find the perfect playlist for you.

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
11. Picture Upload is created in picture-form component. We send the picture uploaded by the user to the bucket on AWS-S3 and then to the Azure that gives us back the keywords describing mood of the face from the picture uploaded by the user. The keywords are used to search on spotify for a dedicated playlist based on the strongest keyword.
12. Render all the components into HTML.
13. Style the css files.
14. Run: run dbon, npm run start, npm run watch to test the app. The address line must be at least 10 characters long.
15. Write some reducer and action testing.

  

#### Architecture

JavaScript, Node.js, Sass, React, Redux, AZURE Face API, Spotify API, Airbnb package, webpack babel, , Redux, Enzyme, Jest, Babel, Superagent, MongoDB, other dependencies

All the documentation and drawings you can find under this link:

[![google docs link](https://img.shields.io/badge/link-google_docs-green.svg?longCache=true&style=for-the-badge)](https://docs.google.com/document/d/1tEHkDGlPcnRfyXfNGVHZ0_vqpJFMAu3cgXCS3zMPS9U/edit?usp=sharing)



#### Testing

All of the above functionality is tested using the Jest library.
Write some reducer and action testing. 

To run tests: `npm run test`
