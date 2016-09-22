#Plans

# Description #
Plans is a social application where friends can make groups and  make plans. It uses the Facebook and Yelp v2 API.  
###Current User Stories Implemented
  1. A user can Log in and Logout, They Log in via facebook.
  2. A user can add Groups with a specific title
  3. A user can search for businesses and add them to a particular group
  4. A user can view the groups and plans that they have made.
### Future Implementations
  1. Be able to add members to groups
  2. Be able to have voting on plans




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
