# Unit 7 Problem Set #3

Schema Design and Building RESTful APIs

## Short Responses

1. **What are the four types of HTTP requests that correspond to _creating_, _reading_, _updating_, and _deleting_ resources? Why is it important to use these different types of requests?**

   - Creating corresponds to `POST`.
   - Reading corresponds to `GET`.
   - Updating corresponds to `PUT`.
   - Deleting corresponds to `DELETE`.

   While we are the ones that dictate how our servers handle each request, using the correct request type makes our APIs simple, structured, and predictable. Different request types allows the architecture of our applications to be semantic, representing the underlying action with the corresponding HTTP method.

2. **You've recently learned about an API for a cat sitting company. The API is fully RESTful for a resource called `cats`. You also happen to know that their database is running PostgreSQL on the backend. What are the five types of requests the API will respond to? Based on the description, list the HTTP method, the path, and what SQL the request will fire.**

| HTTP method | Path             | SQL                                     | Description               |
| ----------- | ---------------- | --------------------------------------- | ------------------------- |
| `POST`      | [/cats]()        | `INSERT INTO cats ...;`                 | Creating a cat            |
| `GET`       | [/cats]()        | `SELECT * FROM cats;`                   | Retrieving all the cats   |
| `GET`       | [/cats/:catId]() | `SELECT * FROM cats WHERE id = catId;`  | Retrieving a specific cat |
| `PUT`       | [/cats/:catId]() | `UPDATE cats SET ... WHERE id = catId;` | Updating a specific cat   |
| `DELETE`    | [/cats/:catId]() | `DELETE FROM cats WHERE id = catId`     | Deleting a cat            |

3. **You're working on a blogging application and doing some debugging. You see in the logs that the following SQL has fired:**

   ```sql
   SELECT * FROM articles WHERE id = 9;
   ```

   **Given that the application is RESTful, what HTTP method and request would you expect to have been made to fire that SQL?**

   I expect the request type to be `GET` since we are retrieving information. The route should look something like [/articles/9]().

4. **You've been hired to do some work for Discogs, an application to help users track a vinyl record collection. A `Collection` has many `Albums`, and an `Album` has many collections via a join table called `Ownership`. You've been asked to build a feature that allows to remove an album from their collection. What HTTP Method/URL/controller action would you use to implement this feature?**

   In order to implement a feature that removes an album from a collection I would use the `DELETE` HTTP method, a route like [/users/:userId/collection/album/:albumId](). I would handle this request by firing SQL that deletes the correct entry from the `Ownership` table.

5. **Choose your favorite web application. What's an example of a one-to-many and many-to-many relationship that might exist within the app?**

   YouTube is one of my favorite web applications. One example of a one-to-many relationship is the relationship between a user and their video uploads. An example of a many-to-many exists between playlists and videos because a video can be in many playlists and many playlists can have a video.

6. **Build a full CRUD, RESTful API using Express for a Todo List. A TodoList should have many items and belong to a user. Each endpoint should respond with the appropriate JSON response. Our API should support:**

   - **An index route to see a list of todos.**
   - **A show route to see details about an individual todo item.**
   - **The ability to update a todo (i.e. mark complete)**
   - **Delete a todo item**
   - **Create a Todo list item**

   **Deploy Your Project to Heroku and include a link here:** [App](https://banana-surprise-06355.herokuapp.com/todos)

## Express Todo List API

### Routes

| HTTP Method | Route        | Description               |
| ----------- | ------------ | ------------------------- |
| GET         | [/todos]()   | List all of all tasks     |
| GET         | [/todos/1]() | Details about single task |
| POST        | [/todos]()   | Create a todo list item   |
| PUT         | [/todos/1]() | Toggle task `is_complete` |
| DELETE      | [/todos/1]() | Delete a todo list item   |

### Resources

#### Task

```SQL
CREATE TABLE task (
    task_id SERIAL PRIMARY KEY,
    task_name character varying(48)
    NOT NULL CONSTRAINT no_empty_task_name CHECK(task_name != ''),
    task_description text,
    is_complete boolean DEFAULT FALSE,
    date_created timestamptz DEFAULT NOW(),
    due_date DATE
);
```
