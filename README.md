# Unit 7 Problem Set #3
## Schema Design and Building RESTful APIs

### Directions
1. Fork and clone this lab.
2. Answer the following questions directly in this README. Be sure that your answers are well-formatted.
3. For the final question (build a to-do list), create all of your necessary app files in this directory. (I have included GitHub's standard Node.js `.gitignore` template so that you don't end up pushing `node_modules` to GitHub.

##

0. **What are the four types of HTTP requests that correspond to _creating_, _reading_, _updating_, and _deleting_ resources? Why is it important to use these different types of requests?**
<br>

- To create, you use a POST request. To read, you use a GET request. To update, you use a PUT request. Lastly, for deleting, you use a DELETE request. It's important to use different types of requests because different requests allow and do different things. For example, if you use a GET request, you won't be able to manipulate any data or send data to a server. However, with a POST request, you could certainly do all that. There are designated actions for different requests that make it more understandable to use.


1. **You've recently learned about an API for a cat sitting company. The API is fully RESTful for a resource called `cats`. You also happen to know that their database is running Postgresql on the backend. What are the five types of requests the API will respond to? Based on the description, list the HTTP method, the path, and what SQL the request will fire.**

| http method  |  path |  sql | description |
|---|---|---|---|
| POST | /add | 'INSERT INTO cats (breed, name, age) VALUES ("breed", "name", age)' | Creating a cat |
| GET | /cats | 'SELECT * FROM cats;' | Retrieving all the cats |
| GET | /cats/:id | 'SELECT * FROM cats WHERE id = $1;', [id] | Retriving a specific cat |
| PUT | /update/:id | 'UPDATE cats SET (breed, name, age) = ($2, $3, $4) WHERE id = $1;', [id, breed, name, age] | Updating a specific cat |
| DELETE | /delete/:id | 'DELETE FROM cats WHERE id = $1;', [id] | Deleting a cat |

<br>


2. **You're working on a blogging application and doing some debugging. You see in the logs that the following SQL has fired:**

   ```sql
   SELECT * FROM articles WHERE id = 9;
   ```

   **Given that the application is RESTful, what HTTP method and request would you expect to have been made to fire that SQL?**
<br>

- The HTTP request would have been a GET request, and this query is used to get a specific article from the `articles` table. The path would look something like '/articles/:id', and the method would also most likely be called `getArticleById`.


3. **You've been hired to do some work for Discogs, an application to help users track a vinyl record collection. A `Collection` has many `Albums`, and an `Album` has many collections via a join table called `Ownership`. You've been asked to build a feature that allows to remove an album from their collection. What HTTP Method/URL/controller action would you use to implement this feature?**
<br>

- I would use a DELETE method, since they're asking to remove an album from their collection. The URL would look like '/collection/:id', since we want to be able to access a specific album from the collection we want to remove. The controller action would be the following:
"DELETE FROM ownership WHERE album_id = $1", [id]. This removes the album from the ownership table, breaking the connection between the collection and the album.


4. **Choose your favorite web application. What's an example of a one-to-many and many-to-many relationship that might exist within the app?**
<br>

- I chose Tumblr as my web application. Tumblr has a few entities: users, posts, follows, and chatrooms. A one-to-many relationship would be the relationship between users and posts. One user can create many posts, and many posts can belong to one user. A many-to-many relationship could be the relationship between users and chatrooms. A user can be in many chatrooms, and chatrooms can have many users in them. I would say that you could have a table that tracks which users are in which chatrooms.

5. **Build a full CRUD, RESTful API using Express for a Todo List. A TodoList should have many items and belong to a user. Each endpoint should respond with the appropriate JSON response. Our API should support:**
   * **An index route to see a list of todos.**
   * **A show route to see details about an individual todo item.**
   * **The ability to update a todo (i.e. mark complete)**
   * **Delete a todo item**
   * **Create a Todo list item**

   **Deploy Your Project to Heroku and include a link here:** https://pumpkin-cake-93835.herokuapp.com/
