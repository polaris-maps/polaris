# How to connect locally to MongoDB (Atlas)

**IMPORTANT:** When committing changes, please make sure **NOT** to add files with secret information similar to that in `config.env` to the changes to be committed. If needed, add the files to the list in the `.gitignore`. Pushing commits with secret information **will** accidentally and irrevocably expose the information unless you happen to be working on a repository fork that can be deleted entirely. If this does happen to you, to ensure security, please notify the groupchat. Although the data for this project are open, it would be best to change your password to ensure security. 

## Basic Connection
1. Accept the invite and create a MongoDB account, if you have not already.
2. Open the Polaris project. Under Security in the left sidebar, click on Database Access. Add yourself as a new database user with read/write access.
    - Since we likely will not be making multiple clusters, it would be best to select 'Read and write to any database' rather than 'Atlas admin' as one's role for now. 
3. Return to Database under Deployment and click on the "Connect" button. Click on "Connect your application," then select your driver (Node.js) and version (4.0 or later).
4. Copy the provided connection string and paste it at the end of the lines beginning with `ATLAS_URI` in the provided `config_template.env` to set the relevant `ATLAS_URI` environment variables. Rename `config_template.env` as `config.env`.
5. Make the needed edits to the connection strings, i.e., replace `<user>` with the username for your database user (not your MongoDB account), `<password>` with the password for your database user, and `myFirstDatabase` with the name of the database you are connecting to.
6. Open a new terminal and `cd` into the `api` folder. Run `npm test`. If this works, you are all set!
    - Note: Error logging has been temporarily removed but will be restored in future code versions!