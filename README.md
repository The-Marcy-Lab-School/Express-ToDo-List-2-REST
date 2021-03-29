# Schema Design and Building RESTful APIs: ToDo List

### Directions
1. Answer the following questions directly in this README. Be sure that your answers are well-formatted. 
2. For the final question (build a to-do list), create all of your necessary app files in this directory. (I have included GitHub's standard Node.js `.gitignore` template so that you don't end up pushing `node_modules` to GitHub. 

## 

0. **What are the four types of HTTP requests that correspond to _creating_, _reading_, _updating_, and _deleting_ resources? Why is it important to use these  different types of requests?**
<br>


1. **You've recently learned about an API for a cat sitting company. The API is fully RESTful for a resource called `cats`. You also happen to know that their database is running Postgresql on the backend. What are the five types of requests the API will respond to? Based on the description, list the HTTP method, the path, and what SQL the request will fire.**

| http method  |  path |  sql | description |
|---|---|---|---|
|  |  | | Creating a cat |
|  |  | | Retrieving all the cats |
|  |  | | Retriving a specific cat |
|  |  | | Updating a specific cat |
|  |  | | Deleting a cat |

<br>

2. **You're working on a blogging application and doing some debugging. You see in the logs that the following SQL has fired:**

   ```sql
   SELECT * FROM articles WHERE id = 9;
   ```

   **Given that the application is RESTful, what HTTP method and request would you expect to have been made to fire that SQL?**
<br>


3. **You've been hired to do some work for Discogs, an application to help users track a vinyl record collection. A `Collection` has many `Albums`, and an `Album` has many collections via a join table called `Ownership`. You've been asked to build a feature that allows to remove an album from their collection. What HTTP Method/URL/controller action would you use to implement this feature?**
<br>

4. **Choose your favorite web application. What's an example of a one-to-many and many-to-many relationship that might exist within the app?**
<br>

5. **Build a full CRUD, RESTful API using Express for a Todo List. A user can have many tasks and a task belongs to a user. Each endpoint should respond with the appropriate JSON response. Our API should support:**

- An index route to see all of a user's tasks.
- A show route to see details about an individual task item.
- The ability to update a task (i.e. mark complete)
- Delete a task 
- Create a task

   **Deploy Your Project to Heroku and submit the link on Canvas. Provide the URL to your github repo as a comment in your submission.**
