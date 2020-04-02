# Unit 7 Problem Set #3
## Schema Design and Building RESTful APIs

### Directions
1. Fork and clone this lab.
2. Answer the following questions directly in this README. Be sure that your answers are well-formatted. 
3. For the final question (build a to-do list), create all of your necessary app files in this directory. (I have included GitHub's standard Node.js `.gitignore` template so that you don't end up pushing `node_modules` to GitHub. 

## 

0. **What are the four types of HTTP requests that correspond to _creating_, _reading_, _updating_, and _deleting_ resources? Why is it important to use these  different types of requests?**
<br>

   The four types are:
   <br>
         1. create => 'POST'
         <br>
         2. reading => 'GET'
         <br>
         3. update => 'PUT'
         <br>
         4. delete => 'DELETE'


1. **You've recently learned about an API for a cat sitting company. The API is fully RESTful for a resource called `cats`. You also happen to know that their database is running Postgresql on the backend. What are the five types of requests the API will respond to? Based on the description, list the HTTP method, the path, and what SQL the request will fire.**

| http method  |  path     |                                   sql                                         |  description   |
|---|---|---|---|
|     POST     | /cats     |```sql INSERT INTO cats (name, age, height) VALUES (new_name, age, height); ```| Creating a cat |
|     GET      | /cats     |```sql                       SELECT * FROM cats;                         ```   | Retrieving all the cats |
|     GET      | /cats/:id |```sql            SELECT * FROM cats WHERE cats.id = id;                   ``` | Retriving a specific cat |
|     PUT      | /cats/:id |```sql UPDATE cats SET name = new_name, age = new_age, height = new_height WHERE cats.id = id;```| Updating a specific cat |
|     DELETE   | /cats/:id |```sql               DELETE * FROM cats WHERE cats.id = id                 ``` | Deleting a cat |

<br>

2. **You're working on a blogging application and doing some debugging. You see in the logs that the following SQL has fired:**

   ```sql
   SELECT * FROM articles WHERE id = 9;
   ```

   **Given that the application is RESTful, what HTTP method and request would you expect to have been made to fire that SQL?**
<br>

   The http method is GET and will send a request of /articles/:id


3. **You've been hired to do some work for Discogs, an application to help users track a vinyl record collection. A `Collection` has many `Albums`, and an `Album` has many collections via a join table called `Ownership`. You've been asked to build a feature that allows to remove an album from their collection. What HTTP Method/URL/controller action would you use to implement this feature?**
<br>

   HTTP Method: DELETE
   <br>
   URL: /ownership/album_id
   <br>
   Controller/sql : 
   <br>
   const { album_id } = req.params;
   <br>
   ```sql DELETE * FROM collection JOIN ownership ON ownership.album_id = collection.album_id  WHERE album_id = $1;```, [album_id]

4. **Choose your favorite web application. What's an example of a one-to-many and many-to-many relationship that might exist within the app?**
<br>

   Web App: Youtube
   <br>
         1. one to many: one user can have many videos, and one video can only belong to one user
         <br>
         2. many to many: one user can have many followers, and a user can be following many other users

5. **Build a full CRUD, RESTful API using Express for a Todo List. A TodoList should have many items and belong to a user. Each endpoint should respond with the appropriate JSON response. Our API should support:**
   * **An index route to see a list of todos.**
   * **A show route to see details about an individual todo item.**
   * **The ability to update a todo (i.e. mark complete)**
   * **Delete a todo item**
   * **Create a Todo list item**

   **Deploy Your Project to Heroku and include a link here:**
