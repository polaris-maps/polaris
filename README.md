# polaris

An open-source website and framework for universities and organizations to develop campus maps that crowdsource data on accessible routes and potential obstacles.

## Development Team
This is being created by Team Polaris as our final project for COMP 426: Modern Web Programming at UNC-CH.
More details on people and roles are [here](https://github.com/comp426-2022-spring/a99-polaris/blob/main/docs/team.md).

## Documentation
More information to come.
See [the docs](https://github.com/comp426-2022-spring/a99-polaris/tree/main/docs) for all details.

## Related Links

### Development Resources
- [Instructions on how to connect to MongoDB for team members of this project](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/README.md#how-to-connect-locally-to-mongodb)
- [MERN Stack tutorial and detailed example](https://www.positronx.io/build-angular-crud-application-with-nodejs-and-express-rest-api/)
- [Angular concepts](https://angular.io/guide/architecture)
- [Mongoose Documentation](https://mongoosejs.com/)

### Testing Resources
- [Examples](https://github.com/comp426-2022-spring/a99-polaris/blob/main/docs/planning/api-tests.txt)
- [Curl command line builder](https://tools.w3cub.com/curl-builder)
- [JSON Editor](https://jsoneditoronline.org/#)

### For Faculty/Staff and Students of UNC-CH
[UNC Accessible Navigation SharePoint](https://adminliveunc.sharepoint.com/sites/accessiblenavigation)

## Deliverables
A GitHub repository containing your code and documentation and a prototype release package. Your project should take the form of a Node package, with all of the attendant items associated with that. The following three script commands should work in your package:
- `npm install` - Install dependencies for your package.
- `npm test` - Start app, check that everything can run, and then stop app.
- `npm run` - Command to bring up all parts of the app/system’s server scripts.

Your team is responsible for incorporating the following specifications and deliverables into your final project:

1. Back-end specifications
	1. API built on whatever framework you choose. You can build an API that interacts with other APIs as well in order to integrate them.
	2. API root endpoint at `http://HOST/app/`.
	2. Should create (if nonexistent) and interact with a database of users and interactions (this can be logs, even). These can be separate databases for different microservices or separate tables in one database. It is up to your team's decisions.
	3. Database can be of any type you choose.
2. Front-end specifications
	1. Give users the ability to register an account, update their information, see their information somewhere, and delete their account.
	2. Interactions with the front end should be logged in a database. 
3. Database specifications
	1. User database - registration details (username, email address, etc.)
	2. Interaction database - details of user interactions (login history, access logs, etc.)
4. Documentation
	1. License documenation - Choose a license and include it in the repository just like we have been.
	1. README.md file with basic description, installation requirements/instructions, dependency list, run instructions
	3. `/docs/` directory containing full documentation of every available API endpoint that you create for your app. This directory shoud also house an archive of your planning documentation. 
	2. Code comments (preferably referring to the documentation)
	3. User instructions in the interface
5. Demo video to be presented in class on either 21 or 26 April
6. Self/group evaluation (Individual group members: this is part of the final exam for the course.)

## Acknowledgements
- Team Polaris of COMP 426 (Spring 2022)
- [Tar Heels at the Table](https://tarheels.live/tarheelsatthetable/)
- UNC-CH Undergraduate Senate
- Professor John D. Martin III, Dr. Gary Bishop, and Dr. Jennifer Diliberto of UNC-CH
