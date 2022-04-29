INTRODUCTION
----------------------------------------------------------------------


Polaris is an open source project created to display an open source website for Univeristy of North Carolina at Chapel Hill students and employees enabling more accessibilty options for the University. Polaris is able to display potential and current accessbility hazards through the interface and the use of its Users. Through interaction with the website users will have the ability to notify other students and faculty of disruptions of the campus such as elevator being down in one of the buildings. Users will also have the ability to favorite certain locations and upvote another's person notification so that popular places would be more well known about current issues. There will also be feedback page to notify our team of issues with the website. Below will be the instructions and contributors. 


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

Run `npm install` inside the `api` directory and the `client` directory. This package was built using Node.js. Other package dependency and version information can be found in `package.json` or above.

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


POLARIS API Documentation
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
