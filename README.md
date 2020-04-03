# Unit 7 Problem Set #3

## Schema Design and Building RESTful APIs

### Directions

1. Fork and clone this lab.
2. Answer the following questions directly in this README. Be sure that your answers are well-formatted.
3. For the final question (build a to-do list), create all of your necessary app files in this directory. (I have included GitHub's standard Node.js `.gitignore` template so that you don't end up pushing `node_modules` to GitHub.

4. **What are the four types of HTTP requests that correspond to _creating_, _reading_, _updating_, and _deleting_ resources? Why is it important to use these different types of requests?**<br>

  - The four different HTTP requests are:

    - **GET**
    - **POST**
    - **PUT**
    - **DELETE**

  - These different requests allow users to use the api to do different things with the data. GET requests allow a user to get information from the api they need. POST requests allow users to post data to the api. PUT requests, update data, and DELETE requests delete data from the api.

5. **You've recently learned about an API for a cat sitting company. The API is fully RESTful for a resource called `cats`. You also happen to know that their database is running Postgresql on the backend. What are the five types of requests the API will respond to? Based on the description, list the HTTP method, the path, and what SQL the request will fire.**

http method    | path        | sql                                                                                 | description
-------------- | ----------- | ----------------------------------------------------------------------------------- | ------------------------
POST request   | '/cats'     | 'INSERT INTO cats(column1, column2) VLAUES(value1, vlaue2);'                        | Creating a cat
GET request    | '/cats'     | 'SELECT * FROM cats;'                                                               | Retrieving all the cats
GET request    | '/cats/:id' | 'SELECT * FROM cats WHERE id = $1;', [id]                                           | Retriving a specific cat
PUT request    | 'cats/:id'  | 'UPDATE cats SET(column1, column2) = ($2, $3) WHERE id = $1;', [id, value1, value2] | Updating a specific cat
DELETE request | 'cats/:id'  | DELETE FROM cats WHERE id = $1;', [id]                                              | Deleting a cat

<br>

1. **You're working on a blogging application and doing some debugging. You see in the logs that the following SQL has fired:**

  ```sql
  SELECT * FROM articles WHERE id = 9;
  ```

  **Given that the application is RESTful, what HTTP method and request would you expect to have been made to fire that SQL?**<br>

  - I expect that a GET request was made to return all information for an article that had an id of 9.

2. **You've been hired to do some work for Discogs, an application to help users track a vinyl record collection. A `Collection` has many `Albums`, and an `Album` has many collections via a join table called `Ownership`. You've been asked to build a feature that allows to remove an album from their collection. What HTTP Method/URL/controller action would you use to implement this feature?**<br>

  - I would create a DELETE http request.

3. **Choose your favorite web application. What's an example of a one-to-many and many-to-many relationship that might exist within the app?**<br>

  - **Twitter**
  - On twitter there is a one to many relationship between posts and users

    - For every post there is one user who created it, but a user can create multiple posts

  - There is a many to many relationship between group chats and users

    - Every group chat has multiple users, and a user can be apart of multiple group chats

4. **Build a full CRUD, RESTful API using Express for a Todo List. A TodoList should have many items and belong to a user. Each endpoint should respond with the appropriate JSON response. Our API should support:**

  - **An index route to see a list of todos.**
  - **A show route to see details about an individual todo item.**
  - **The ability to update a todo (i.e. mark complete)**
  - **Delete a todo item**
  - **Create a Todo list item**

  **Deploy Your Project to Heroku and include a link here:**

  ![my app](https://sql-todo.herokuapp.com/tasks)
