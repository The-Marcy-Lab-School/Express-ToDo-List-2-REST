# Schema Design and Building RESTful APIs: ToDo List
Build a full CRUD, RESTful API using Express and Postgres for a Todo List. 

### Directions
Create all of your necessary app files in this directory. (I have included GitHub's standard Node.js `.gitignore` template so that you don't end up pushing `node_modules` to GitHub. You should `npm install express pg knex`. Use express to build your API. Use knex to create your database migrations and seeds. Use pg to connect your express API to your database.Your core app logic must be encapsulated using classes, and your project files should be organized into folders according to their purpose. At a minimum, you should be creating models and controllers

**Each endpoint should respond with the appropriate JSON response. Our API should support:**

   - A route to see all todos.
   - A route to see details about an individual todo item.
   - Create a todo
   - The ability to update the description of a todo 
   - The ability to mark a todo complete
   - Delete a todo 
   
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

