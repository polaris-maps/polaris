INTRODUCTION
----------------------------------------------------------------------


Polaris is an open source project created to display an open source website for Univeristy of North Carolina at Chapel Hill students and employees enabling more accessibilty options for the University. Polaris is able to display potential and current accessbility hazards through the interface and the use of its Users. Through interaction with the website users will have the ability to notify other students and faculty of disruptions of the campus such as elevator being down in one of the buildings. Users will also have the ability to favorite certain locations and upvote another's person notification so that popular places would be more well known about current issues. There will also be feedback page to notify our team of issues with the website. Below will be the instructions and contributors. 


DEPENDENCY LIST
----------------------------------------------------------------------


Bootstrap-Icons						Version: 1.8.1
Node-fetch							Version: 3.2.3
Body-Parser							Version: 1.19.2
Cors:								Version: 2.8.5
Dotenv:								Version: 16.0.0
Express:							Version: 4.17.3
Mongodb:							Version: 4.4.0
Nodemon:							Version: 2.0.15
@Angular/animations 				Version: 13.0.0
@Angular/common						Version: 13.0.0
@Angular/compiler					Version: 13.0.0
@Angular/core						Version: 13.0.0
@Angular/forms						Version: 13.0.0
@Angular/platform-browser			Version: 13.0.0
@Angular/platform-browser-dynamic	Version: 13.0.0
@Angular/router						Version: 13.0.0
Bootstrap							Version: 5.1.3
Jquery								Version: 3.6.0
Leaflet								Version: 1.7.1
Popper.js							Version: 1.16.1
Rxjs								Version: 7.4.0
Tslib								Version: 2.3.0
Zone.Js								Version: 0.11.4


INSTRUCTIONS
----------------------------------------------------------------------

Run `npm install` inside the `api` directory and the `client` directory. This package was built using Node.js. Other package dependency and version information can be found in `package.json`.

*****IMPORTANT: You will need a MongoDB account for the following steps*****

## Database Connection 
1. Accept the invite and create a MongoDB account, if you have not already.
2. Open the Polaris project. Under Security in the left sidebar, click on Database Access. Add yourself as a new database user with read/write access.
    - Since we likely will not be making multiple clusters, it would be best to select 'Read and write to any database' rather than 'Atlas admin' as one's role for now. 
3. Return to Database under Deployment and click on the "Connect" button. Click on "Connect your application," then select your driver (Node.js) and version (4.0 or later).
4. Copy the provided connection string and paste it at the end of the lines beginning with `ATLAS_URI` in the provided `config_template.env` to set the relevant `ATLAS_URI` environment variables. Rename `config_template.env` as `config.env`.
5. Make the needed edits to the connection strings, i.e., replace `<user>` with the username for your database user (not your MongoDB account), `<password>` with the password for your database user, and `myFirstDatabase` with the name of the database you are connecting to.
6. Open a new terminal and `cd` into the `api` folder. Run `npm test`. If this works, you are all set!
    - Note: Error logging has been temporarily removed but will be restored in future code versions!

## Client Connection

This project was generated with Angular CLI version 13.0.4.

Development server
Run ng serve in the `client` directory to start the dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

Running unit tests
Run ng test to execute the unit tests via Karma.

Running end-to-end tests
Run ng e2e to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI Overview and Command Reference page.

Polaris API Documentation
----------------------------------------------------------------------
Full API documentation can be found in the `docs` directory.

DEVELOPMENT TEAM
----------------------------------------------------------------------


The Polaris Project was created by Team Polaris as our final project for COMP 426: Modern Web Programming at UNC-CH. Below is the link to the roles and duties of each person who contributed.

https://github.com/comp426-2022-spring/a99-polaris/blob/main/docs/team.md


ACKNOWLEDGMENTS
----------------------------------------------------------------------


- Team Polaris of COMP 426 (Spring 2022)
- [Tar Heels at the Table](https://tarheels.live/tarheelsatthetable/)
- UNC-CH Undergraduate Senate
- Professor John D. Martin III, Dr. Gary Bishop, and Dr. Jennifer Diliberto of UNC-CH
