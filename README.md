# Schema Design and Building RESTful APIs: ToDo List

### Directions
1. Create all of your necessary app files in this directory. (I have included GitHub's standard Node.js `.gitignore` template so that you don't end up pushing `node_modules` to GitHub. 

**Build a full CRUD, RESTful API using Express and Postgres for a Todo List. Each endpoint should respond with the appropriate JSON response. Our API should support:**

   - A route to see all tasks.
   - A route to see details about an individual task item.
   - Create a task
   - The ability to update the description of a task 
   - The ability to mark a task complete
   - Delete a task 
   
You can read [this tutorial](https://www.taniarascia.com/node-express-postgresql-heroku/) on deploying an Express app with Postgres on Heroku. 

**NOTE:** For your production Heroku environment, your pg connection object should be:

```js
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
```
See the [Heroku docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true#provision-a-database) for more info.

**Deploy Your Project to Heroku and submit the link on Canvas. Provide the URL to your github repo as a comment in your submission.**

