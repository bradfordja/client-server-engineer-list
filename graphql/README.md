Please note that this is a basic implementation of the project and doesn't cover authentication, validation, and other aspects that may be required in a real-world application.

- **Search for an engineer by name:**
  ```graphql
  query {
    engineerByName(firstName: "John", lastName: "Doe") {
      userId
      firstName
      lastName
      fullName
      title
      status
      siteId
    }
  }
  ```

- **Search for an engineer by site:**
  ```graphql
  query {
    engineerBySite(siteId: 123) {
      userId
      firstName
      lastName
      fullName
      title
      status
      siteId
    }
  }
  ```

- **Edit an engineer:**
  ```graphql
  mutation {
    editEngineer(
      userId: 456
      firstName: "John"
      lastName: "Doe"
      title: "Software Engineer"
      status: "Active"
      siteId: 789
    ) {
      userId
      firstName
      lastName
      fullName
      title
      status
     

 siteId
    }
  }
  ```


  - **Edit a site location:**
  ```graphql
  mutation {
    editSiteLocation(
      siteId: 789
      siteName: "Site A"
      address: "123 Main Street"
      city: "New York"
      state: "NY"
    ) {
      siteId
      siteName
      address
      city
      state
      status
    }
  }
  ```

  **Explanation:**

- The project is organized into different files: `dbConfig.js` for database connection, `engineerModel.js` for engineer CRUD operations, `siteModel.js` for site location CRUD operations, `graphql.js` for defining the GraphQL schema and resolvers, and `server.js` for setting up the Express server and GraphQL endpoint.

- The GraphQL schema includes two types: `Engineer` and `SiteLocation`, each representing an engineer and a site location, respectively.

- The `Query` type in the GraphQL schema includes two queries: `engineerByName` and `engineerBySite`, which are used to search for engineers by name and site, respectively.

- The `resolvers` object in `graphql.js` defines the functions that handle the GraphQL queries. These resolvers use the methods defined in `engineerModel.js` and `siteModel.js` to fetch data from the database.

- The Express server is set up in `server.js` and listens on port 3000. It mounts the GraphQL endpoint at `/graphql`, which can be accessed through the GraphiQL UI for testing.

- The unit tests in `__tests__/engineerModel.test.js` use Jest to test the `engineerModel` methods.
