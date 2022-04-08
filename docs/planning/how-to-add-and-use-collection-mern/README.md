# How to Add and Use a New Collection of Database Records in This MERN App

## Part 1: Back end
1. Create a new JS file defining the schema in the [api/db folder](https://github.com/comp426-2022-spring/a99-polaris/tree/main/api/db). Feel free to model it after [issue.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/db/issue.js).
    - Note: Please make sure to specify a different collection than 'issues', to ensure that the records are kept separate within the database.
2. Create a corresponding JS file defining the API endpoints in the [api/routes folder](https://github.com/comp426-2022-spring/a99-polaris/tree/main/api/routes). Feel free to model it after the [issue.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/db/issue.js) file in that folder.
3. Give the API access to your routes by add the following line to [server.js](https://github.com/comp426-2022-spring/a99-polaris/blob/main/api/server.js) under the line reading `// TODO: add routes here`, replacing `<yourRoutes>` with the name of your routes:
    ```
    app.use(<yourRoutes>)
    ```
4. Test and document your API endpoints. 
    - Testing: See [api-tests.txt](https://github.com/comp426-2022-spring/a99-polaris/blob/main/docs/planning/how-to-add-and-use-collection-mern/api-tests.txt) for examples.
    - Documentation: more to come!

## Part 2: Front end
1. Add a service by `cd` ing into the client folder and executing the following command, replacing `<service name>` with the name of your service, i.e. issue or login:
    ```
    ng g s service/<service name>/<service name>
    ```
2. Define the service class in the newly created folder within the service folder. Edit the files created in Part 2, Step 1 as appropriate. Feel free to model the files after [those here]().
3. Edit the service files created with the 
4. Implement the appropriate methods within the various components using the defined service.
5. Edit the HTML in the components to use the implemented component methods.

_will update with appropriate links_