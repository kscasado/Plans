#Plans

# Description #
Plans is a social application where friends can make groups and uses make plans. It uses the Facebook and Yelp v2 API.  Currently allows adding plans and groups for users.
Future implementations will include messaging, adding friends to groups and voting on plans



## Tech Stack

### server  
  * __Node__ -Used for Back end serving files and running REST API
  * __MongoDB__  - ORM for defining relationships between users, plans and groups
  * __Express__ - Server framework for easy routing

### client
  * __React__ -View framework to build reuseable components
  * __Redux__ - Data store to manage state

## Requirements
  * __Node__ 6.2.0
    * Install instructions [here] (https://nodejs.org/en/)
  * __NPM__ 3.8.9

## Installing and Running
  1. Run 'npm install' on main project directory
  2. Include config folder and config.json file with api keys and db url
  3. Run 'npm run start' web page will be on localhost:3000
