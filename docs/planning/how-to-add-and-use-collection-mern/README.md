# How to Add and Use a New Collection of Database Records in This MERN App

## Part 0: Set up connection to MongoDB
See [this file](https://github.com/comp426-2022-spring/a99-polaris/blob/main/docs/planning/how-to-add-and-use-collection-mern/mongodb-conn.md) (mongodb-conn.md) for instructions on setting up a preliminary connection to MongoDB!

## Part 1: Back end
1. Create a new JS file defining the schema in the [api/schemas folder](https://github.com/comp426-2022-spring/a99-polaris/tree/main/api/schemas). Feel free to model it after [issue.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/schemas/issue.js) or [user.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/schemas/user.js).
    - Note: Please make sure to specify a different collection than 'issues', to ensure that the records are kept separate within the database.
2. Create a corresponding JS file defining the appropriate database connection in the [api/connections folder](https://github.com/comp426-2022-spring/a99-polaris/tree/main/api/connections). Feel free to model it after the [issue.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/connections/issue.js) file or the [user.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/connections/user.js) file in that folder.
3. Create a corresponding JS file defining the API endpoints in the [api/routes folder](https://github.com/comp426-2022-spring/a99-polaris/tree/main/api/routes). Feel free to model it after the [issue.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/routes/issue.js) file or the [user.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/routes/user.js) file in that folder.
4. Give the API access to your routes by add the following line to [server.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/server.js) under the line reading `// TODO: add routes here`, replacing `<yourRoutes>` with the name of your routes:
    ```
    app.use(<yourRoutes>)
    ```
5. Test and document your API endpoints. 
    - Testing: See [api-tests.txt](https://github.com/comp426-2022-spring/a99-polaris/blob/main/docs/planning/how-to-add-and-use-collection-mern/api-tests.txt) for examples.
    - Documentation: more to come!

## Part 2: Front end
1. Add a service by `cd` ing into the client folder and executing the following command, replacing `<service name>` with the name of your service, i.e. issue or login:
    ```
    ng g s service/<service name>/<service name>
    ```
2. Define the service class as a new file in the newly created folder within the service folder. Feel free to model it after [issue.ts](https://github.com/comp426-2022-spring/a99-polaris/blob/main/client/src/app/service/issue/issue.ts).
3. Edit the files created in Part 2, Step 1 as appropriate, modeling them after [issue.service.ts](https://github.com/comp426-2022-spring/a99-polaris/blob/main/client/src/app/service/issue/issue.service.ts) and [issue.service.spec.ts](https://github.com/comp426-2022-spring/a99-polaris/blob/main/client/src/app/service/issue/issue.service.spec.ts) as appropriate/needed.
4. Implement the appropriate methods within the various components using the defined service. An example (currently in progress) is [notifications.component.ts](https://github.com/comp426-2022-spring/a99-polaris/blob/main/client/src/app/notifications/notifications.component.ts).
5. Edit the HTML in the components to use the implemented component methods. An example is [notifications.component.html](https://github.com/comp426-2022-spring/a99-polaris/blob/main/client/src/app/notifications/notifications.component.html). For further examples of how the HTML can use the implemented component methods, feel free to refer to the bottom of [MERN Stack tutorial and detailed example](https://www.positronx.io/build-angular-crud-application-with-nodejs-and-express-rest-api/) and search online!
