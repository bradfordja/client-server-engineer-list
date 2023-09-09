Now, run your web server using 

Set the environment variable:
Before running the server, you need to set the environment variable NODE_ENV to 'localhost'. You can do this in your terminal or command prompt.

```bash
cd server
npm install
```

```linux/mac bash
export NODE_ENV=localhost
```

```window bash
set NODE_ENV=localhost
```

Build the TypeScript project:
```bash
npx tsc
node dist/src/server.js
```

default endpoints
'https://localhost:3000/engineers'
'https://localhost:3000/sites'
'https://localhost:3000/engineerStatus'

testcase
http://localhost:3000/engineers/all
http://localhost:3000/sites/all

**Explanation:**

- The project is organized into different files and directories. The `dbConfig.ts` file configures the connection to the Microsoft SQL Server database, and the `engineerModel.ts` and `siteModel.ts` files define the models and their corresponding CRUD operations.

- The `server.ts` file sets up the Express server and defines the API endpoints. For simplicity, we've only implemented the GET endpoints for now, and you can expand it to include other CRUD operations as needed.

- The unit tests in `engineerModel.test.ts` use Jest to test the `engineerModel` methods.


**Sample use-cases:**

- **Search for an engineer by name:**
  ```bash
  GET /engineers?firstName=John&lastName=Doe
  ```

- **Search for an engineer by site:**
  ```bash
  GET /engineers/site/123
  ```

- **Edit an engineer:**
  ```bash
  PUT /

engineers/456
  ```

- **Edit a site location:**
  ```bash
  PUT /sites/789
  ```
