#Plans
![alt tag](https://travis-ci.org/kscasado/Plans.svg?branch=master)

For a working demo visit [Demo] (https://lets-make-plans.herokuapp.com/)
# Description #
Plans is a social application where friends can make groups and  make plans. It uses the Facebook and Yelp v2 API.  
###Current User Stories Implemented
  1. A user can Log in and Logout, They Log in via facebook.
  2. A user can add Groups with a specific title
  3. A user can search for businesses and add them to a particular group
  4. A user can view the groups and plans that they have made
  5. A user is able to add members to groups
  6. A user is able to vote on options for the specific plan

### Future Implementations
  1. Enable email notification
  




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
  * __NPM__ 3.10.6

## Installing and Running
  1. Run 'npm install' on main project directory
  2. Include config folder and config.json file with api keys and db url
  3. Run 'npm run start' web page will be on localhost:3000

## Code Styling
  Code is linted using eslint in order to maintain readable standards throughout
