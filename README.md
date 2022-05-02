INTRODUCTION
----------------------------------------------------------------------


Polaris is an open source project created to display an open source website for University of North Carolina at Chapel Hill students and employees detailing accessible walking paths within the University. Polaris lists current accessibility hazards and allows users to post issues to notify other students and faculty of disruptions such as a broken elevator. On the about page is a form to submit feedback. 

In the future, users will have the ability to use the map to navigate around inaccessible paths, filter by favorited locations, and upvote/downvote others' notifications.

This app has not been deployed due to lack of functionality for user authentication, although endpoints and initial pages exist for users to register an account, update their information, see their information somewhere, and delete their account.

This project was built with a MEAN stack (MongoDB, Express, Angular, and Node.js). Other package dependency and version information can be found in `package.json` or in the dependency list below.


DEPENDENCY LIST
----------------------------------------------------------------------
Dependency | Version 
--- | ---
Bootstrap-Icons | 1.8.1 
Node-fetch | 3.2.3
Body-Parser | 1.19.2
Cors | 2.8.5
Dotenv | 16.0.0
Express | 4.17.3
Mongodb | 4.4.0
Nodemon | 2.0.15
@Angular/animations | 13.0.0
@Angular/common | 13.0.0
@Angular/compiler | 13.0.0
@Angular/core | 13.0.0
@Angular/forms	| 13.0.0
@Angular/platform-browser | 13.0.0
@Angular/platform-browser-dynamic | 13.0.0
@Angular/router | 13.0.0
Bootstrap | 5.1.3
Jquery | 3.6.0
Leaflet | 1.7.1
Popper.js | 1.16.1
Rxjs | 7.4.0
Tslib | 2.3.0
Zone.js | 0.11.4


INSTRUCTIONS
----------------------------------------------------------------------

1. Ask one of the project admins for a config.env file to be placed directly in the [api directory](https://github.com/comp426-2022-spring/a99-polaris/tree/main/api).
2. Run `npm install` inside the `api` directory and the `client` directory.
3. Run `npm run` inside the `api` directory and the `client` directory to start the app in localhost. The api should run on http://localhost:5001, while the client should come up on http://localhost:4200.


POLARIS API DOCUMENTATION
----------------------------------------------------------------------
Full API documentation can be found in [the README of the `docs` directory](https://github.com/comp426-2022-spring/a99-polaris/blob/main/docs/README.md#polaris-api-documentation).


DEVELOPMENT TEAM
----------------------------------------------------------------------


The Polaris Project was created by Team Polaris as our final project for COMP 426: Modern Web Programming at UNC-CH. The roles and duties of each person who contributed is detailed [in team.md in the docs](https://github.com/comp426-2022-spring/a99-polaris/blob/main/docs/team.md).


ACKNOWLEDGMENTS
----------------------------------------------------------------------


- Team Polaris of COMP 426 (Spring 2022)
- Professor John D. Martin III, Dr. Gary Bishop, and Dr. Jennifer Diliberto of UNC-CH
- [Tar Heels at the Table](https://tarheels.live/tarheelsatthetable/)
- UNC-CH Undergraduate Senate