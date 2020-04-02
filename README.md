# Unit 7 Problem Set #3
## Schema Design and Building RESTful APIs

### Directions
1. Fork and clone this lab.
2. Answer the following questions directly in this README. Be sure that your answers are well-formatted. 
3. For the final question (build a to-do list), create all of your necessary app files in this directory. (I have included GitHub's standard Node.js `.gitignore` template so that you don't end up pushing `node_modules` to GitHub. 

## 

0. **What are the four types of HTTP requests that correspond to _creating_, _reading_, _updating_, and _deleting_ resources? Why is it important to use these  different types of requests?**

Answer: The four types of HTTP requests that correspond to _creating_, _reading_, _updating_, and _deleting_ are __POST__ , __GET__ , __PUT__, and __DELETE__. It is important to use these different type of requests because requests are made everday when a user visit different websites. You want to ensure to display the type of info that a user expect when they visit or use your app. The different type of requests I mentioned earlier lets you handle different requests made to you server. Also you can handle errors for example when a user visit an endpoint that do not exist or have been move on your website.

<br>


1. **You've recently learned about an API for a cat sitting company. The API is fully RESTful for a resource called `cats`. You also happen to know that their database is running Postgresql on the backend. What are the five types of requests the API will respond to? Based on the description, list the HTTP method, the path, and what SQL the request will fire.**

| http method  |  path |  sql | description |
|---|---|---|---|
| POST| '/cats'  |INSERT INTO cats(name, color) VALUES($1,$2) ;| Creating a cat |
| GET | '/cats' |SELECT * FROM cats ; | Retrieving all the cats |
| GET | '/cats/:id' | SELECT * FROM cats WHERE id = $1 ; | Retriving a specific cat |
| PUT | '/cats/:id' |UPDATE cats SET (name,color) = ($2,$3) WHERE id = $1 | Updating a specific cat |
|DELETE|'cats/:id' |DELETE FROM cats WHERE id = $1 ; | Deleting a cat |

<br>

2. **You're working on a blogging application and doing some debugging. You see in the logs that the following SQL has fired:**

   ```sql
   SELECT * FROM articles WHERE id = 9;
   ```

   **Given that the application is RESTful, what HTTP method and request would you expect to have been made to fire that SQL?**
   
   Answer : The http method is a GET request made to an route with an id of 9.
<br>


3. **You've been hired to do some work for Discogs, an application to help users track a vinyl record collection. A `Collection` has many `Albums`, and an `Album` has many collections via a join table called `Ownership`. You've been asked to build a feature that allows to remove an album from their collection. What HTTP Method/URL/controller action would you use to implement this feature?**

Answer: The HTTP method I would use is __DELETE__. My URL would probably look like this `/album/:id/collection/:id` and I would probably have a  sql statement in my controller that look like this `DELETE FROM ownership WHERE album_id = collection_id`

<br>

4. **Choose your favorite web application. What's an example of a one-to-many and many-to-many relationship that might exist within the app?**

Answer: My favorite web application is Twitch. A one-to-many relationship that might exist in Twitch is a user can have many notifications but notifications belong to one and only one user . A many-to-many relationship is a user can follow many users and a user can have many followers. 

<br>

5. **Build a full CRUD, RESTful API using Express for a Todo List. A TodoList should have many items and belong to a user. Each endpoint should respond with the appropriate JSON response. Our API should support:**
   * **An index route to see a list of todos.**
   * **A show route to see details about an individual todo item.**
   * **The ability to update a todo (i.e. mark complete)**
   * **Delete a todo item**
   * **Create a Todo list item**

   **Deploy Your Project to Heroku and include a link here:**
